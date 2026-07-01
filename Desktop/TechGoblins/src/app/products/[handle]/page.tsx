"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getProduct, formatPrice } from "@/lib/shopify";
import { mockProducts } from "@/lib/mock-data";
import { ShopifyProduct, ShopifyProductVariant } from "@/types/shopify";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Heart, Ruler, RotateCcw } from "lucide-react";

// For demo/SSG we use a client component with useEffect
export default function ProductPage({ params }: { params: { handle: string } }) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyProductVariant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeImage, setActiveImage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [wished, setWished] = useState(false);
  const { addItem, isLoading: cartLoading } = useCart();

  useEffect(() => {
    getProduct(params.handle)
      .then((p) => {
        const product = p ?? mockProducts.find((m) => m.handle === params.handle) ?? null;
        setProduct(product);
        if (product) {
          const defaultOptions: Record<string, string> = {};
          product.options.forEach((opt) => {
            defaultOptions[opt.name] = opt.values[0];
          });
          setSelectedOptions(defaultOptions);
        }
      })
      .catch(() => {
        const mock = mockProducts.find((m) => m.handle === params.handle) ?? null;
        setProduct(mock);
        if (mock) {
          const defaultOptions: Record<string, string> = {};
          mock.options.forEach((opt) => { defaultOptions[opt.name] = opt.values[0]; });
          setSelectedOptions(defaultOptions);
        }
      })
      .finally(() => setLoading(false));
  }, [params.handle]);

  useEffect(() => {
    if (!product) return;
    const variant = product.variants.nodes.find((v) =>
      v.selectedOptions.every((o) => selectedOptions[o.name] === o.value)
    );
    setSelectedVariant(variant ?? product.variants.nodes[0]);
  }, [product, selectedOptions]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-stone-100" />
          <div className="space-y-4">
            <div className="h-6 bg-stone-100 w-2/3" />
            <div className="h-8 bg-stone-100 w-1/2" />
            <div className="h-4 bg-stone-100 w-1/4 mt-4" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="text-stone-400">
          Produit introuvable ou boutique Shopify non configurée.
        </p>
      </div>
    );
  }

  const images = product.images.nodes;
  const price = selectedVariant?.price ?? product.priceRange.minVariantPrice;
  const comparePrice = selectedVariant?.compareAtPrice;
  const isOnSale =
    comparePrice && parseFloat(comparePrice.amount) > parseFloat(price.amount);
  const inStock = selectedVariant?.availableForSale ?? product.availableForSale;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Images */}
        <div className="flex gap-3">
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="hidden sm:flex flex-col gap-2 w-16">
              {images.map((img, i) => (
                <button
                  key={img.url}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square overflow-hidden bg-stone-100 border-2 transition-colors ${
                    activeImage === i ? "border-stone-900" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.altText ?? ""}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
          {/* Main image */}
          <div className="flex-1 relative aspect-[3/4] bg-stone-100 overflow-hidden">
            {images[activeImage] && (
              <Image
                src={images[activeImage].url}
                alt={images[activeImage].altText ?? product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="lg:pt-4">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">
            {product.vendor}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-3">
            {product.title}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-medium text-stone-900">
              {formatPrice(price.amount, price.currencyCode)}
            </span>
            {isOnSale && comparePrice && (
              <span className="text-base text-stone-400 line-through">
                {formatPrice(comparePrice.amount, comparePrice.currencyCode)}
              </span>
            )}
            {isOnSale && (
              <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 font-medium">
                Solde
              </span>
            )}
          </div>

          {/* Options */}
          {product.options.map((option) => (
            <div key={option.name} className="mb-5">
              <p className="text-sm font-medium text-stone-700 mb-2">
                {option.name} :{" "}
                <span className="font-normal text-stone-500">
                  {selectedOptions[option.name]}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => {
                  const testOptions = { ...selectedOptions, [option.name]: value };
                  const available = product.variants.nodes.some(
                    (v) =>
                      v.availableForSale &&
                      v.selectedOptions.every((o) => testOptions[o.name] === o.value)
                  );
                  return (
                    <button
                      key={value}
                      onClick={() =>
                        setSelectedOptions((prev) => ({ ...prev, [option.name]: value }))
                      }
                      disabled={!available}
                      className={`px-4 py-2 text-sm border transition-all ${
                        selectedOptions[option.name] === value
                          ? "border-stone-900 bg-stone-900 text-white"
                          : available
                          ? "border-stone-200 text-stone-700 hover:border-stone-500"
                          : "border-stone-100 text-stone-300 cursor-not-allowed line-through"
                      }`}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Stock */}
          {selectedVariant && selectedVariant.quantityAvailable <= 5 && inStock && (
            <p className="text-xs text-brand-600 mb-4">
              Plus que {selectedVariant.quantityAvailable} en stock
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-3 mb-8">
            <Button
              size="lg"
              className="flex-1"
              disabled={!inStock || cartLoading}
              onClick={() => selectedVariant && addItem(selectedVariant.id)}
            >
              {inStock ? "Ajouter au panier" : "Épuisé"}
            </Button>
            <button
              onClick={() => setWished(!wished)}
              className="p-3.5 border border-stone-200 text-stone-500 hover:text-brand-500 hover:border-brand-200 transition-colors"
              aria-label="Ajouter aux favoris"
            >
              <Heart
                size={20}
                className={wished ? "fill-brand-500 text-brand-500" : ""}
              />
            </button>
          </div>

          {/* Info strips */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-stone-500">
              <Ruler size={16} />
              <span>Guide des tailles disponible</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-500">
              <RotateCcw size={16} />
              <span>Retours gratuits sous 30 jours</span>
            </div>
          </div>

          {/* Accordion */}
          <div className="border-t border-stone-100">
            <button
              className="flex items-center justify-between w-full py-4 text-sm font-medium text-stone-900"
              onClick={() => setDetailsOpen(!detailsOpen)}
            >
              Description & composition
              {detailsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {detailsOpen && (
              <div
                className="pb-4 text-sm text-stone-500 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
