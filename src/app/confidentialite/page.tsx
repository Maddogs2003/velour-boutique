import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Vélour",
};

export default function ConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-4">Politique de confidentialité</h1>
      <p className="text-xs text-stone-400 mb-10">Dernière mise à jour : juillet 2026</p>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Responsable du traitement</h2>
        <p>
          Gabriel Maille — Vélour, 3 rue de Verville, 91680 Bruyères-le-Châtel.
          Contact : contact@velour-boutique.fr
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Données collectées</h2>
        <p>Nous collectons les données suivantes lors de votre navigation ou de vos achats :</p>
        <ul className="list-disc list-inside space-y-1 text-stone-500 pl-2">
          <li>Nom, prénom, adresse email</li>
          <li>Adresse de livraison et de facturation</li>
          <li>Données de paiement (traitées par Shopify Payments — nous n&apos;avons pas accès à vos coordonnées bancaires)</li>
          <li>Historique de commandes</li>
          <li>Données de navigation (cookies, adresse IP)</li>
        </ul>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Finalités du traitement</h2>
        <ul className="list-disc list-inside space-y-1 text-stone-500 pl-2">
          <li>Traitement et suivi de vos commandes</li>
          <li>Gestion du service client</li>
          <li>Envoi de la newsletter (avec votre consentement)</li>
          <li>Amélioration de l&apos;expérience utilisateur</li>
          <li>Respect des obligations légales et fiscales</li>
        </ul>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Conservation des données</h2>
        <p>
          Vos données de commande sont conservées pendant 10 ans conformément aux obligations comptables et fiscales.
          Les données de newsletter sont conservées jusqu&apos;à désinscription.
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de portabilité
          et d&apos;opposition sur vos données personnelles. Pour exercer ces droits, contactez-nous à :
          contact@velour-boutique.fr
        </p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Cookies</h2>
        <p>
          Ce site utilise des cookies techniques nécessaires au fonctionnement du panier et de la session.
          Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé sans votre consentement.
        </p>
      </section>

      <section className="space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Réclamation</h2>
        <p>
          Vous pouvez adresser une réclamation à la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
          cnil.fr
        </p>
      </section>
    </div>
  );
}
