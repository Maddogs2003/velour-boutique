import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80"
          alt="Collection Vélour automne"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="max-w-xl">
          <p className="text-stone-900 text-xs font-semibold tracking-[0.3em] uppercase mb-4 inline-block bg-white/35 px-2 py-1 backdrop-blur-sm">
            Nouvelle Collection
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            L&apos;élégance
            <br />
            au naturel
          </h1>
          <p className="text-stone-200 text-base sm:text-lg mb-8 leading-relaxed max-w-sm">
            Des pièces intemporelles pensées pour accompagner chaque moment
            de votre quotidien.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/collections/nouveautes"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-900 text-sm font-medium tracking-wide hover:bg-stone-100 transition-colors"
            >
              Découvrir la collection
            </Link>
            <Link
              href="/collections/soldes"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              Voir les soldes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
