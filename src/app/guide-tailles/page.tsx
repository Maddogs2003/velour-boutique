import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide des tailles — Vélour",
};

const femmeRows = [
  { taille: "XS", fr: "34 – 36", poitrine: "80 – 84", taille_cm: "60 – 64", hanches: "86 – 90" },
  { taille: "S",  fr: "36 – 38", poitrine: "84 – 88", taille_cm: "64 – 68", hanches: "90 – 94" },
  { taille: "M",  fr: "38 – 40", poitrine: "88 – 92", taille_cm: "68 – 72", hanches: "94 – 98" },
  { taille: "L",  fr: "40 – 42", poitrine: "92 – 96", taille_cm: "72 – 76", hanches: "98 – 102" },
  { taille: "XL", fr: "42 – 44", poitrine: "96 – 100", taille_cm: "76 – 80", hanches: "102 – 106" },
];

const hommeRows = [
  { taille: "S",   fr: "44 – 46", poitrine: "88 – 92",  taille_cm: "74 – 78",  hanches: "88 – 92" },
  { taille: "M",   fr: "46 – 48", poitrine: "92 – 96",  taille_cm: "78 – 82",  hanches: "92 – 96" },
  { taille: "L",   fr: "48 – 50", poitrine: "96 – 100", taille_cm: "82 – 86",  hanches: "96 – 100" },
  { taille: "XL",  fr: "50 – 52", poitrine: "100 – 104", taille_cm: "86 – 90", hanches: "100 – 104" },
  { taille: "XXL", fr: "52 – 54", poitrine: "104 – 108", taille_cm: "90 – 94", hanches: "104 – 108" },
];

export default function GuideTaillesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-4">Guide des tailles</h1>
      <p className="text-sm text-stone-500 mb-10">
        Toutes les mesures sont en centimètres. En cas de doute entre deux tailles, nous recommandons de choisir la taille supérieure.
      </p>

      <section className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-5">Femme</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-stone-200 text-stone-400 text-xs uppercase tracking-wide">
                <th className="pb-3 pr-6">Taille</th>
                <th className="pb-3 pr-6">FR</th>
                <th className="pb-3 pr-6">Poitrine</th>
                <th className="pb-3 pr-6">Taille</th>
                <th className="pb-3">Hanches</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              {femmeRows.map((r) => (
                <tr key={r.taille} className="border-b border-stone-100">
                  <td className="py-3 pr-6 font-medium text-stone-900">{r.taille}</td>
                  <td className="py-3 pr-6">{r.fr}</td>
                  <td className="py-3 pr-6">{r.poitrine}</td>
                  <td className="py-3 pr-6">{r.taille_cm}</td>
                  <td className="py-3">{r.hanches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-5">Homme</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-stone-200 text-stone-400 text-xs uppercase tracking-wide">
                <th className="pb-3 pr-6">Taille</th>
                <th className="pb-3 pr-6">FR</th>
                <th className="pb-3 pr-6">Poitrine</th>
                <th className="pb-3 pr-6">Taille</th>
                <th className="pb-3">Hanches</th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              {hommeRows.map((r) => (
                <tr key={r.taille} className="border-b border-stone-100">
                  <td className="py-3 pr-6 font-medium text-stone-900">{r.taille}</td>
                  <td className="py-3 pr-6">{r.fr}</td>
                  <td className="py-3 pr-6">{r.poitrine}</td>
                  <td className="py-3 pr-6">{r.taille_cm}</td>
                  <td className="py-3">{r.hanches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
