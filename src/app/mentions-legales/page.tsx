import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Vélour",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-10">Mentions légales</h1>

      <section className="mb-10 space-y-2 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Éditeur du site</h2>
        <p><span className="text-stone-900 font-medium">Raison sociale :</span> Vélour</p>
        <p><span className="text-stone-900 font-medium">Exploitant :</span> Gabriel Maille</p>
        <p><span className="text-stone-900 font-medium">Forme juridique :</span> Entrepreneur individuel (micro-entreprise)</p>
        <p><span className="text-stone-900 font-medium">SIRET :</span> 10695856400010</p>
        <p><span className="text-stone-900 font-medium">Code APE :</span> 6201Z</p>
        <p><span className="text-stone-900 font-medium">Adresse :</span> 3 rue de Verville, 91680 Bruyères-le-Châtel, France</p>
        <p><span className="text-stone-900 font-medium">Email :</span> contact@velour-boutique.fr</p>
        <p><span className="text-stone-900 font-medium">TVA :</span> Non applicable — article 293 B du CGI</p>
      </section>

      <section className="mb-10 space-y-2 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Hébergement</h2>
        <p><span className="text-stone-900 font-medium">Hébergeur du site :</span> Vercel Inc.</p>
        <p><span className="text-stone-900 font-medium">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
        <p><span className="text-stone-900 font-medium">Site :</span> vercel.com</p>
      </section>

      <section className="mb-10 space-y-2 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Plateforme e-commerce</h2>
        <p><span className="text-stone-900 font-medium">Prestataire :</span> Shopify Inc.</p>
        <p><span className="text-stone-900 font-medium">Adresse :</span> 151 O'Connor Street, Ottawa, Ontario K2P 2L8, Canada</p>
        <p><span className="text-stone-900 font-medium">Site :</span> shopify.com</p>
      </section>

      <section className="mb-10 space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de Vélour,
          sauf mentions contraires. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
        </p>
      </section>

      <section className="space-y-3 text-sm text-stone-600 leading-relaxed">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Responsabilité</h2>
        <p>
          Vélour s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site mais ne saurait être tenu responsable
          des erreurs, omissions ou résultats obtenus par une mauvaise utilisation de ces informations.
        </p>
      </section>
    </div>
  );
}
