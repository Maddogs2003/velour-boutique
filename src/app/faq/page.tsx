"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Comment puis-je suivre ma commande ?",
    answer: "Un email de confirmation contenant un lien de suivi vous est envoyé dès l'expédition de votre commande. Vous pouvez suivre votre colis directement via le transporteur.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "La livraison standard prend 3 à 5 jours ouvrés. La livraison express est disponible en 1 à 2 jours ouvrés. La livraison est offerte dès 80 € d'achat.",
  },
  {
    question: "Comment effectuer un retour ?",
    answer: "Vous disposez de 30 jours après réception pour retourner un article dans son état d'origine avec ses étiquettes. Les retours sont gratuits depuis la France métropolitaine. Contactez-nous pour initier votre retour.",
  },
  {
    question: "Puis-je modifier ou annuler ma commande ?",
    answer: "Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant votre achat en nous contactant par email. Passé ce délai, la commande est en cours de préparation et ne peut plus être modifiée.",
  },
  {
    question: "Les tailles sont-elles fidèles ?",
    answer: "Nos vêtements suivent les tailles européennes standards. Consultez notre guide des tailles pour trouver votre taille idéale. En cas de doute, nous recommandons de choisir la taille supérieure.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal et Apple Pay. Tous les paiements sont sécurisés via Shopify Payments.",
  },
  {
    question: "Les articles en soldes sont-ils retournables ?",
    answer: "Oui, les articles soldés bénéficient de la même politique de retour que les articles à plein tarif, soit 30 jours après réception.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-10">Questions fréquentes</h1>

      <div className="divide-y divide-stone-100">
        {FAQS.map((faq, i) => (
          <div key={i}>
            <button
              className="flex items-center justify-between w-full py-5 text-left text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={16}
                className={`ml-4 flex-shrink-0 text-stone-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <p className="pb-5 text-sm text-stone-500 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
