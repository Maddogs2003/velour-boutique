import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Vélour",
};

export default function CGVPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-4">Conditions Générales de Vente</h1>
      <p className="text-xs text-stone-400 mb-10">Dernière mise à jour : juillet 2026</p>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 1 — Vendeur</h2>
        <p>
          Vélour est exploité par Gabriel Maille, entrepreneur individuel, SIRET 10695856400010,
          3 rue de Verville, 91680 Bruyères-le-Châtel. Email : contact@velour-boutique.fr.
          TVA non applicable — article 293 B du CGI.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 2 — Champ d&apos;application</h2>
        <p>
          Les présentes CGV s&apos;appliquent à toutes les ventes conclues sur le site velour-boutique.vercel.app
          entre Vélour et tout acheteur consommateur (personne physique non professionnelle).
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 3 — Commandes</h2>
        <p>
          Toute commande implique l&apos;acceptation des présentes CGV. La commande est confirmée par email
          après validation du paiement. Vélour se réserve le droit d&apos;annuler toute commande en cas
          d&apos;erreur manifeste de prix ou de rupture de stock.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 4 — Prix</h2>
        <p>
          Les prix sont indiqués en euros, toutes taxes comprises (TVA non applicable pour Vélour —
          article 293 B du CGI). Vélour se réserve le droit de modifier ses prix à tout moment,
          les produits étant facturés au tarif en vigueur au moment de la commande.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 5 — Paiement</h2>
        <p>
          Le paiement s&apos;effectue en ligne par carte bancaire (Visa, Mastercard, American Express),
          PayPal ou Apple Pay, via la plateforme sécurisée Shopify Payments. Le débit est effectué
          au moment de la validation de la commande.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 6 — Livraison</h2>
        <p>
          Les commandes sont expédiées sous 1 à 2 jours ouvrés. La livraison standard prend 3 à 5 jours ouvrés.
          La livraison est offerte dès 80 € d&apos;achat en France métropolitaine. En cas de retard imputable
          au transporteur, Vélour ne saurait être tenu responsable.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 7 — Droit de rétractation</h2>
        <p>
          Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai de
          <strong className="text-stone-900"> 14 jours</strong> à compter de la réception pour exercer votre droit de rétractation,
          sans avoir à justifier de motifs. Vélour étend ce délai à <strong className="text-stone-900">30 jours</strong> à titre commercial.
        </p>
        <p>
          Pour exercer ce droit, contactez-nous à contact@velour-boutique.fr. Les articles doivent être
          retournés dans leur état d&apos;origine, non portés et avec leurs étiquettes. Les retours sont gratuits
          depuis la France métropolitaine.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 8 — Remboursement</h2>
        <p>
          Le remboursement est effectué sur le moyen de paiement d&apos;origine dans un délai de 14 jours
          à compter de la réception du retour et de la vérification de l&apos;état des articles.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 9 — Garanties</h2>
        <p>
          Tous les produits bénéficient de la garantie légale de conformité (articles L217-4 et suivants
          du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants
          du Code civil).
        </p>
      </section>

      <section className="space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Article 10 — Droit applicable</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera
          recherchée en priorité. À défaut, les tribunaux français seront seuls compétents.
          Conformément à l&apos;article L612-1 du Code de la consommation, vous pouvez recourir gratuitement
          à un médiateur de la consommation.
        </p>
      </section>
    </div>
  );
}
