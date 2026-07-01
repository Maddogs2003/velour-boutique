"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";

const NAV_LINKS = [
  { href: "/collections/nouveautes", label: "Nouveautés" },
  { href: "/collections/femme", label: "Femme" },
  { href: "/collections/homme", label: "Homme" },
  { href: "/collections/accessoires", label: "Accessoires" },
  { href: "/collections/soldes", label: "Soldes" },
];

export function Header() {
  const { cart, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const itemCount = cart?.totalQuantity ?? 0;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Top banner */}
        <div className="bg-brand-800 text-brand-100 text-center py-2 text-xs tracking-widest uppercase">
          Livraison offerte dès 80€ d&apos;achat — Code : VELOUR10 pour -10%
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-2xl tracking-[0.15em] text-stone-900 uppercase">
                Vélour
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-600 hover:text-stone-900 tracking-wide transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                aria-label="Rechercher"
                className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Panier"
                onClick={openCart}
                className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-brand-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm text-stone-700 hover:text-stone-900 border-b border-stone-100 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
