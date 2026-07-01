import { Truck, RotateCcw, Shield, Leaf } from "lucide-react";

const VALUES = [
  {
    icon: Truck,
    title: "Livraison offerte",
    description: "Dès 80€ d'achat en France métropolitaine",
  },
  {
    icon: RotateCcw,
    title: "Retours 30 jours",
    description: "Retours gratuits et sans question",
  },
  {
    icon: Shield,
    title: "Paiement sécurisé",
    description: "Shopify Payments — CB, PayPal, Apple Pay",
  },
  {
    icon: Leaf,
    title: "Mode responsable",
    description: "Matières certifiées, production éthique",
  },
];

export function BrandValues() {
  return (
    <section className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">
                  {value.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
