"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import { ShopifyProduct } from "@/types/shopify";
import { formatPrice } from "@/lib/shopify";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { addItem, isLoading } = useCart();

  const primaryImage = product.images.nodes[0];
  const hoverImage = product.images.nodes[1];
  const firstVariant = product.variants.nodes[0];
  const price = product.priceRange.minVariantPrice;
  const comparePrice = firstVariant?.compareAtPrice;
  const isOnSale = comparePrice && parseFloat(comparePrice.amount) > parseFloat(price.amount);

  return (
    <div className="group relative">
      {/* Image container */}
      <Link href={`/products/${product.handle}`}>
        <div
          className="relative aspect-[3/4] bg-stone-100 overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {primaryImage && (
            <Image
              src={primaryImage.url}
              alt={primaryImage.altText ?? product.title}
              fill
              className={`object-cover transition-all duration-500 ${
                hoverImage && hovered ? "opacity-0" : "opacity-100"
              }`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}
          {hoverImage && (
            <Image
              src={hoverImage.url}
              alt={hoverImage.altText ?? product.title}
              fill
              className={`object-cover transition-all duration-500 absolute inset-0 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {!product.availableForSale && (
              <span className="bg-stone-500 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5">
                Épuisé
              </span>
            )}
            {isOnSale && (
              <span className="bg-brand-500 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5">
                Solde
              </span>
            )}
          </div>

          {/* Quick add — visible on hover */}
          {product.availableForSale && firstVariant && (
            <div
              className={`absolute bottom-0 left-0 right-0 transition-all duration-200 ${
                hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(firstVariant.id);
                }}
                disabled={isLoading}
                className="w-full py-3 bg-stone-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-stone-700 transition-colors disabled:opacity-60"
              >
                Ajouter au panier
              </button>
            </div>
          )}
        </div>
      </Link>

      {/* Wishlist button */}
      <button
        onClick={() => setWished(!wished)}
        className="absolute top-3 right-3 p-1.5 text-stone-400 hover:text-brand-500 transition-colors"
        aria-label="Ajouter aux favoris"
      >
        <Heart
          size={18}
          className={wished ? "fill-brand-500 text-brand-500" : ""}
        />
      </button>

      {/* Product info */}
      <div className="mt-3">
        <Link href={`/products/${product.handle}`}>
          <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">
            {product.vendor}
          </p>
          <h3 className="text-sm text-stone-900 font-medium hover:text-brand-600 transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-stone-900">
            {formatPrice(price.amount, price.currencyCode)}
          </span>
          {isOnSale && comparePrice && (
            <span className="text-sm text-stone-400 line-through">
              {formatPrice(comparePrice.amount, comparePrice.currencyCode)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
