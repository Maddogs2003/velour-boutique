"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ShopifyCart } from "@/types/shopify";
import { createCart, addToCart, removeFromCart, updateCartLine } from "@/lib/shopify";

interface CartContextType {
  cart: ShopifyCart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [cartId, setCartId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("shopify_cart_id");
    if (stored) setCartId(stored);
  }, []);

  async function ensureCart(): Promise<string> {
    if (cartId) return cartId;
    const newCart = await createCart();
    setCart(newCart);
    setCartId(newCart.id);
    localStorage.setItem("shopify_cart_id", newCart.id);
    return newCart.id;
  }

  async function addItem(variantId: string, quantity = 1) {
    setIsLoading(true);
    try {
      const id = await ensureCart();
      const updated = await addToCart(id, variantId, quantity);
      setCart(updated);
      setIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function removeItem(lineId: string) {
    if (!cartId) return;
    setIsLoading(true);
    try {
      const updated = await removeFromCart(cartId, [lineId]);
      setCart(updated);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateItem(lineId: string, quantity: number) {
    if (!cartId) return;
    setIsLoading(true);
    try {
      const updated = await updateCartLine(cartId, lineId, quantity);
      setCart(updated);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoading,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
