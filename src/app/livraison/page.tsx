import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livraison & Retours — Vélour",
};

export default function LivraisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-10">Livraison & Retours</h1>

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-4">Délais de livraison</h2>
        <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
          <p>Toutes les commandes sont expédiées sous 1 à 2 jours ouvrés depuis notre entrepôt en France.</p>
          <ul className="space-y-2 border-t border-stone-100 pt-4">
            <li className="flex justify-between py-2 border-b border-stone-100">
              <span>Livraison standard (Colissimo)</span>
              <span className="font-medium text-stone-900">3 – 5 jours ouvrés</span>
            </li>
            <li className="flex justify-between py-2 border-b border-stone-100">
              <span>Livraison express</span>
              <span className="font-medium text-stone-900">1 – 2 jours ouvrés</span>
            </li>
            <li className="flex justify-between py-2 border-b border-stone-100">
              <span>Livraison offerte dès</span>
              <span className="font-medium text-stone-900">80 €</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-4">Politique de retours</h2>
        <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
          <p>Vous disposez de <strong className="text-stone-900">30 jours</strong> à compter de la réception de votre commande pour retourner un article.</p>
          <p>Les articles doivent être retournés dans leur état d'origine, non portés, non lavés, avec leurs étiquettes attachées.</p>
          <p>Les retours sont <strong className="text-stone-900">gratuits</strong> depuis la France métropolitaine.</p>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-4">Remboursement</h2>
        <p className="text-sm text-stone-600 leading-relaxed">
          Le remboursement est effectué sur votre moyen de paiement d'origine dans un délai de 5 à 10 jours ouvrés après réception et vérification du retour.
        </p>
      </section>
    </div>
  );
}
