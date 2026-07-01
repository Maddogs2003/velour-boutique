import Image from "next/image";
import Link from "next/link";

export function EditorialBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Large image */}
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[500px] overflow-hidden bg-stone-100">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
            alt="Collection automne"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-stone-900/30" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-stone-200 text-xs uppercase tracking-widest mb-2">Éditorial</p>
            <h3 className="font-serif text-3xl text-white mb-4">
              La garde-robe
              <br />
              de l&apos;automne
            </h3>
            <Link
              href="/collections/femme"
              className="inline-flex text-white text-xs border-b border-white pb-0.5 tracking-wider uppercase hover:text-brand-200 transition-colors"
            >
              Découvrir →
            </Link>
          </div>
        </div>

        {/* Right column — 2 stacked */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-video overflow-hidden bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
              alt="Tendances"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-stone-900/30" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl text-white mb-2">
                Denim & minimalisme
              </h3>
              <Link
                href="/collections/homme"
                className="text-white text-xs border-b border-white pb-0.5 tracking-wider uppercase hover:text-brand-200 transition-colors"
              >
                Explorer →
              </Link>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=800&q=80"
              alt="Accessoires"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-stone-900/30" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl text-white mb-2">
                Accessoires essentiels
              </h3>
              <Link
                href="/collections/accessoires"
                className="text-white text-xs border-b border-white pb-0.5 tracking-wider uppercase hover:text-brand-200 transition-colors"
              >
                Voir la sélection →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
