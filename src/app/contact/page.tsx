import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Vélour",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-4">Nous contacter</h1>
      <p className="text-sm text-stone-500 mb-12">
        Notre équipe est disponible pour répondre à toutes vos questions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Infos */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <Mail size={20} className="text-brand-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-stone-900 mb-1">Email</p>
              <a
                href="mailto:contact@velour-boutique.fr"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                contact@velour-boutique.fr
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock size={20} className="text-brand-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-stone-900 mb-1">Horaires</p>
              <p className="text-sm text-stone-500">Lundi – Vendredi</p>
              <p className="text-sm text-stone-500">9h00 – 18h00</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin size={20} className="text-brand-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-stone-900 mb-1">Adresse</p>
              <p className="text-sm text-stone-500">Paris, France</p>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1.5 uppercase tracking-wide">
              Nom
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1.5 uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2.5 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1.5 uppercase tracking-wide">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-2.5 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors resize-none"
              placeholder="Comment pouvons-nous vous aider ?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-stone-900 text-white text-sm font-medium tracking-wide hover:bg-stone-700 transition-colors"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}
