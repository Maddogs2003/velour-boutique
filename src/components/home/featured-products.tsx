import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import { ProductGrid } from "@/components/product/product-grid";
import { mockProducts } from "@/lib/mock-data";

export async function FeaturedProducts() {
  let products = [];
  try {
    products = await getProducts(8);
    if (products.length === 0) products = mockProducts;
  } catch {
    products = mockProducts;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-brand-500 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Sélection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
            Nos coups de cœur
          </h2>
        </div>
        <Link
          href="/collections/nouveautes"
          className="hidden sm:inline-flex text-sm text-stone-600 hover:text-stone-900 underline underline-offset-4 transition-colors"
        >
          Voir tout
        </Link>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
