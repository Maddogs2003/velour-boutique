"use client";

import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/shopify";

export function CartDrawer() {
  const { cart, isOpen, isLoading, closeCart, removeItem, updateItem } = useCart();

  const lines = cart?.lines.nodes ?? [];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-stone-700" />
            <h2 className="font-medium text-stone-900">
              Mon panier
              {lines.length > 0 && (
                <span className="ml-2 text-sm text-stone-400">
                  ({cart?.totalQuantity} article{(cart?.totalQuantity ?? 0) > 1 ? "s" : ""})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
            aria-label="Fermer le panier"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-stone-400">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-sm">Votre panier est vide</p>
              <Link
                href="/collections/nouveautes"
                onClick={closeCart}
                className="text-sm text-stone-900 underline underline-offset-4 hover:text-brand-600 transition-colors"
              >
                Découvrir nos produits
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-stone-100">
              {lines.map((line) => {
                const image = line.merchandise.product.images.nodes[0];
                return (
                  <li key={line.id} className="flex gap-4 px-6 py-4">
                    {image && (
                      <div className="relative w-20 h-24 flex-shrink-0 bg-stone-100">
                        <Image
                          src={image.url}
                          alt={image.altText ?? line.merchandise.product.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${line.merchandise.product.handle}`}
                        onClick={closeCart}
                        className="text-sm font-medium text-stone-900 hover:text-brand-600 transition-colors line-clamp-1"
                      >
                        {line.merchandise.product.title}
                      </Link>
                      <p className="text-xs text-stone-400 mt-0.5">
                        {line.merchandise.selectedOptions
                          .map((o) => o.value)
                          .join(" / ")}
                      </p>
                      <p className="text-sm font-medium text-stone-800 mt-1">
                        {formatPrice(
                          line.merchandise.price.amount,
                          line.merchandise.price.currencyCode
                        )}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-stone-200">
                          <button
                            onClick={() =>
                              line.quantity > 1
                                ? updateItem(line.id, line.quantity - 1)
                                : removeItem(line.id)
                            }
                            disabled={isLoading}
                            className="p-1.5 text-stone-500 hover:text-stone-900 disabled:opacity-40"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-sm font-medium text-stone-800">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() => updateItem(line.id, line.quantity + 1)}
                            disabled={isLoading}
                            className="p-1.5 text-stone-500 hover:text-stone-900 disabled:opacity-40"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(line.id)}
                          disabled={isLoading}
                          className="text-stone-300 hover:text-red-400 transition-colors disabled:opacity-40"
                          aria-label="Supprimer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && cart && (
          <div className="border-t border-stone-100 px-6 py-5">
            <div className="flex justify-between text-sm text-stone-600 mb-1">
              <span>Sous-total</span>
              <span>
                {formatPrice(
                  cart.cost.subtotalAmount.amount,
                  cart.cost.subtotalAmount.currencyCode
                )}
              </span>
            </div>
            <p className="text-xs text-stone-400 mb-4">
              Frais de livraison calculés à l&apos;étape suivante
            </p>
            <a
              href={cart.checkoutUrl}
              className="block w-full py-3.5 bg-stone-900 text-white text-sm font-medium text-center tracking-wide hover:bg-stone-700 transition-colors"
            >
              Passer à la caisse →
            </a>
            <button
              onClick={closeCart}
              className="block w-full mt-2 py-2.5 text-sm text-stone-500 hover:text-stone-900 transition-colors text-center"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </>
  );
}
