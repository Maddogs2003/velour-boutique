import { ShopifyProduct, ShopifyCollection } from "@/types/shopify";

const img = (id: string, alt: string) => ({
  url: `https://images.unsplash.com/photo-${id}?w=800&q=80&fit=crop`,
  altText: alt,
  width: 800,
  height: 1000,
});

export const mockProducts: ShopifyProduct[] = [
  {
    id: "gid://shopify/Product/1",
    handle: "robe-lin-naturel",
    title: "Robe en Lin Naturel",
    description: "Robe fluide en lin lavé, coupe droite et décontractée. Parfaite pour la saison chaude, elle associe légèreté et élégance naturelle.",
    descriptionHtml: "<p>Robe fluide en lin lavé, coupe droite et décontractée. Parfaite pour la saison chaude, elle associe légèreté et élégance naturelle.</p>",
    vendor: "Vélour",
    productType: "Robe",
    availableForSale: true,
    tags: ["nouveauté", "lin"],
    priceRange: {
      minVariantPrice: { amount: "89.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "89.00", currencyCode: "EUR" },
    },
    images: {
      nodes: [
        img("1515886657613-9f3515b0c78f", "Robe en Lin Naturel"),
        img("1558618666-fcd25c85cd64", "Robe en Lin Naturel - vue 2"),
      ],
    },
    variants: {
      nodes: [
        { id: "v1", title: "XS", price: { amount: "89.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 5, selectedOptions: [{ name: "Taille", value: "XS" }] },
        { id: "v2", title: "S",  price: { amount: "89.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 8, selectedOptions: [{ name: "Taille", value: "S" }] },
        { id: "v3", title: "M",  price: { amount: "89.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 3, selectedOptions: [{ name: "Taille", value: "M" }] },
        { id: "v4", title: "L",  price: { amount: "89.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: false, quantityAvailable: 0, selectedOptions: [{ name: "Taille", value: "L" }] },
      ],
    },
    options: [{ name: "Taille", values: ["XS", "S", "M", "L"] }],
  },
  {
    id: "gid://shopify/Product/2",
    handle: "blazer-creme-structure",
    title: "Blazer Crème Structuré",
    description: "Blazer ajusté en tissu crème légèrement structuré. Coupe cintrée qui sublime la silhouette, parfait sur un jean ou un pantalon tailleur.",
    descriptionHtml: "<p>Blazer ajusté en tissu crème légèrement structuré. Coupe cintrée qui sublime la silhouette.</p>",
    vendor: "Vélour",
    productType: "Veste",
    availableForSale: true,
    tags: ["nouveauté"],
    priceRange: {
      minVariantPrice: { amount: "145.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "145.00", currencyCode: "EUR" },
    },
    images: {
      nodes: [
        img("1525507119028-ed4c629a60a3", "Blazer Crème Structuré"),
        img("1490481651871-ab68de25d43d", "Blazer Crème - vue 2"),
      ],
    },
    variants: {
      nodes: [
        { id: "v5", title: "36", price: { amount: "145.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 4, selectedOptions: [{ name: "Taille", value: "36" }] },
        { id: "v6", title: "38", price: { amount: "145.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 6, selectedOptions: [{ name: "Taille", value: "38" }] },
        { id: "v7", title: "40", price: { amount: "145.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 2, selectedOptions: [{ name: "Taille", value: "40" }] },
      ],
    },
    options: [{ name: "Taille", values: ["36", "38", "40"] }],
  },
  {
    id: "gid://shopify/Product/3",
    handle: "pantalon-wide-leg-caramel",
    title: "Pantalon Wide Leg Caramel",
    description: "Pantalon à jambe large en crêpe de viscose. Taille haute et ceinture nouée pour une silhouette élancée et fluide.",
    descriptionHtml: "<p>Pantalon à jambe large en crêpe de viscose. Taille haute et ceinture nouée pour une silhouette élancée et fluide.</p>",
    vendor: "Vélour",
    productType: "Pantalon",
    availableForSale: true,
    tags: ["pantalon"],
    priceRange: {
      minVariantPrice: { amount: "110.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "110.00", currencyCode: "EUR" },
    },
    images: {
      nodes: [
        img("1539109136881-3be0616acf4b", "Pantalon Wide Leg Caramel"),
        img("1469334031218-e382a71b716b", "Pantalon Wide Leg - vue 2"),
      ],
    },
    variants: {
      nodes: [
        { id: "v8",  title: "34", price: { amount: "110.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 7, selectedOptions: [{ name: "Taille", value: "34" }] },
        { id: "v9",  title: "36", price: { amount: "110.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 5, selectedOptions: [{ name: "Taille", value: "36" }] },
        { id: "v10", title: "38", price: { amount: "110.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 4, selectedOptions: [{ name: "Taille", value: "38" }] },
        { id: "v11", title: "40", price: { amount: "110.00", currencyCode: "EUR" }, compareAtPrice: null, availableForSale: true, quantityAvailable: 2, selectedOptions: [{ name: "Taille", value: "40" }] },
      ],
    },
    options: [{ name: "Taille", values: ["34", "36", "38", "40"] }],
  },
  {
    id: "gid://shopify/Product/4",
    handle: "chemise-oversize-ecru",
    title: "Chemise Oversize Écru",
    description: "Chemise oversize en popeline de coton écru. Col classique, manches longues retroussables. À porter rentrée ou nouée à la taille.",
    descriptionHtml: "<p>Chemise oversize en popeline de coton écru. Col classique, manches longues retroussables.</p>",
    vendor: "Vélour",
    productType: "Chemise",
    availableForSale: true,
    tags: ["chemise", "soldes"],
    priceRange: {
      minVariantPrice: { amount: "75.00", currencyCode: "EUR" },
      maxVariantPrice: { amount: "75.00", currencyCode: "EUR" },
    },
    images: {
      nodes: [
        img("1487222477894-8943e31ef7b2", "Chemise Oversize Écru"),
        img("1503342217505-b0a15ec3261c", "Chemise Oversize - vue 2"),
      ],
    },
    variants: {
      nodes: [
        { id: "v12", title: "XS", price: { amount: "75.00", currencyCode: "EUR" }, compareAtPrice: { amount: "95.00", currencyCode: "EUR" }, availableForSale: true, quantityAvailable: 3, selectedOptions: [{ name: "Taille", value: "XS" }] },
        { id: "v13", title: "S",  price: { amount: "75.00", currencyCode: "EUR" }, compareAtPrice: { amount: "95.00", currencyCode: "EUR" }, availableForSale: true, quantityAvailable: 5, selectedOptions: [{ name: "Taille", value: "S" }] },
        { id: "v14", title: "M",  price: { amount: "75.00", currencyCode: "EUR" }, compareAtPrice: { amount: "95.00", currencyCode: "EUR" }, availableForSale: true, quantityAvailable: 4, selectedOptions: [{ name: "Taille", value: "M" }] },
        { id: "v15", title: "L",  price: { amount: "75.00", currencyCode: "EUR" }, compareAtPrice: { amount: "95.00", currencyCode: "EUR" }, availableForSale: true, quantityAvailable: 1, selectedOptions: [{ name: "Taille", value: "L" }] },
      ],
    },
    options: [{ name: "Taille", values: ["XS", "S", "M", "L"] }],
  },
];

export const mockCollections: ShopifyCollection[] = [
  {
    id: "gid://shopify/Collection/1",
    handle: "nouveautes",
    title: "Nouveautés",
    description: "Les dernières pièces de la collection",
    image: img("1558769132-cb1aea458c5e", "Nouveautés"),
    products: { nodes: mockProducts },
  },
  {
    id: "gid://shopify/Collection/2",
    handle: "femme",
    title: "Femme",
    description: "Collection femme",
    image: img("1515886657613-9f3515b0c78f", "Femme"),
    products: { nodes: mockProducts },
  },
];
