"use client";

export function NewsletterForm() {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="votre@email.com"
        className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-brand-400"
      />
      <button
        type="submit"
        className="w-full py-2.5 bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors tracking-wide"
      >
        S&apos;abonner
      </button>
    </form>
  );
}
