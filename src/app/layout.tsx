import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Vélour — Mode contemporaine",
    template: "%s | Vélour",
  },
  description:
    "Boutique de mode en ligne. Collections femme, homme et accessoires. Livraison offerte dès 80€.",
  keywords: ["mode", "vêtements", "femme", "homme", "boutique en ligne"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vélour",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-stone-900 antialiased">
        <CartProvider>
          <Header />
          <main className="pt-[104px]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
