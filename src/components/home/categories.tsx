import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    label: "Femme",
    href: "/collections/femme",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    description: "Robes, tops, pantalons",
  },
  {
    label: "Homme",
    href: "/collections/homme",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80",
    description: "Chemises, vestes, denim",
  },
  {
    label: "Accessoires",
    href: "/collections/accessoires",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    description: "Sacs, bijoux, foulards",
  },
];

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-3">
          Explorez nos univers
        </h2>
        <p className="text-stone-500 text-sm">
          Des collections soigneusement sélectionnées pour chaque style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
          >
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs text-stone-300 uppercase tracking-widest mb-1">
                {cat.description}
              </p>
              <h3 className="font-serif text-2xl text-white">{cat.label}</h3>
              <span className="inline-block mt-3 text-white text-xs border-b border-white pb-0.5 tracking-widest uppercase opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                Voir tout
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
