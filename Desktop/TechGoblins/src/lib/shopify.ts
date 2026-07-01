import {
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
} from "@/types/shopify";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const endpoint = `https://${domain}/api/2024-07/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": accessToken,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);

  const { data, errors } = await res.json();
  if (errors) throw new Error(errors[0].message);

  return data as T;
}

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id handle title description descriptionHtml
    availableForSale tags vendor productType
    images(first: 10) {
      nodes { url altText width height }
    }
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    variants(first: 20) {
      nodes {
        id title availableForSale
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
        selectedOptions { name value }
      }
    }
    options { name values }
  }
`;

export async function getProducts(first = 12): Promise<ShopifyProduct[]> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProducts($first: Int!) {
      products(first: $first) {
        nodes { ...ProductFields }
      }
    }
  `;
  const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>(
    query,
    { first }
  );
  return data.products.nodes;
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetProduct($handle: String!) {
      product(handle: $handle) { ...ProductFields }
    }
  `;
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(query, { handle });
  return data.product;
}

export async function getCollection(handle: string, first = 12): Promise<ShopifyCollection | null> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query GetCollection($handle: String!, $first: Int!) {
      collection(handle: $handle) {
        id handle title description
        image { url altText width height }
        products(first: $first) {
          nodes { ...ProductFields }
        }
      }
    }
  `;
  const data = await shopifyFetch<{ collection: ShopifyCollection | null }>(
    query,
    { handle, first }
  );
  return data.collection;
}

export async function getCollections(): Promise<ShopifyCollection[]> {
  const query = `
    query GetCollections {
      collections(first: 10) {
        nodes {
          id handle title description
          image { url altText width height }
          products(first: 1) { nodes { id } }
        }
      }
    }
  `;
  const data = await shopifyFetch<{ collections: { nodes: ShopifyCollection[] } }>(query);
  return data.collections.nodes;
}

export async function createCart(): Promise<ShopifyCart> {
  const query = `
    mutation CartCreate {
      cartCreate {
        cart {
          id checkoutUrl totalQuantity
          lines(first: 100) {
            nodes {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  selectedOptions { name value }
                  product { id title handle images(first: 1) { nodes { url altText width height } } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
            totalTaxAmount { amount currencyCode }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>(query);
  return data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity: number): Promise<ShopifyCart> {
  const query = `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id checkoutUrl totalQuantity
          lines(first: 100) {
            nodes {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  selectedOptions { name value }
                  product { id title handle images(first: 1) { nodes { url altText width height } } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
            totalTaxAmount { amount currencyCode }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>(query, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  });
  return data.cartLinesAdd.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  const query = `
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id checkoutUrl totalQuantity
          lines(first: 100) {
            nodes {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  selectedOptions { name value }
                  product { id title handle images(first: 1) { nodes { url altText width height } } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
            totalTaxAmount { amount currencyCode }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch<{ cartLinesRemove: { cart: ShopifyCart } }>(query, {
    cartId,
    lineIds,
  });
  return data.cartLinesRemove.cart;
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number): Promise<ShopifyCart> {
  const query = `
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id checkoutUrl totalQuantity
          lines(first: 100) {
            nodes {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  selectedOptions { name value }
                  product { id title handle images(first: 1) { nodes { url altText width height } } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
            totalTaxAmount { amount currencyCode }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: ShopifyCart } }>(query, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });
  return data.cartLinesUpdate.cart;
}

export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}
