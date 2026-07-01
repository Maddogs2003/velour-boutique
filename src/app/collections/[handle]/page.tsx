import type { Metadata } from "next";
import { getCollection, getProducts } from "@/lib/shopify";
import { ProductGrid } from "@/components/product/product-grid";
import { mockCollections, mockProducts } from "@/lib/mock-data";

interface Props {
  params: { handle: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const collection = await getCollection(params.handle);
    if (collection) return { title: collection.title, description: collection.description };
  } catch {}
  const mock = mockCollections.find((c) => c.handle === params.handle);
  return { title: mock?.title ?? params.handle };
}

export default async function CollectionPage({ params }: Props) {
  let collection = await getCollection(params.handle, 24).catch(() => null);

  if (!collection) {
    const mock = mockCollections.find((c) => c.handle === params.handle);
    const title = mock?.title ?? params.handle.charAt(0).toUpperCase() + params.handle.slice(1);

    // "Nouveautés" n'existe pas toujours en tant que collection Shopify → fallback tous produits
    const isNouveautes = params.handle === "nouveautes";
    const products = isNouveautes
      ? await getProducts(48).catch(() => [])
      : [];

    collection = {
      id: "fallback",
      handle: params.handle,
      title,
      description: mock?.description ?? "",
      image: mock?.image ?? null,
      products: { nodes: products },
    };
  }

  const products = collection.products.nodes;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-stone-900 mb-2">
          {collection.title}
        </h1>
        {collection.description && (
          <p className="text-stone-500 text-sm max-w-xl">{collection.description}</p>
        )}
        <p className="text-xs text-stone-400 mt-2">
          {products.length} produit{products.length !== 1 ? "s" : ""}
        </p>
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="text-stone-400 text-sm py-12 text-center">
          Aucun produit dans cette collection.
        </p>
      )}
    </div>
  );
}
