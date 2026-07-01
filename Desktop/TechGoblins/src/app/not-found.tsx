import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <p className="text-stone-300 font-serif text-8xl">404</p>
      <h1 className="font-serif text-2xl text-stone-900">Page introuvable</h1>
      <p className="text-stone-400 text-sm max-w-xs">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 bg-stone-900 text-white text-sm hover:bg-stone-700 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
