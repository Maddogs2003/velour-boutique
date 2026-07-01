import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl tracking-[0.15em] text-white uppercase">
              Vélour
            </span>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Mode contemporaine pensée pour celles et ceux qui valorisent
              l&apos;élégance discrète.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 text-stone-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 text-stone-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Collections
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Nouveautés", href: "/collections/nouveautes" },
                { label: "Femme",      href: "/collections/femmes" },
                { label: "Homme",      href: "/collections/hommes" },
                { label: "Accessoires",href: "/collections/accessoires" },
                { label: "Soldes",     href: "/collections/soldes" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aide */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Aide
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Livraison & retours", href: "/livraison" },
                { label: "Guide des tailles", href: "/guide-tailles" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-stone-400 mb-4">
              Nouveautés, offres exclusives et inspirations stylistiques.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2024 Vélour. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
