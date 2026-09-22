import {
  ShieldCheck,
  Factory,
  Truck,
  Award,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "Consistent quality standards",
  },
  {
    icon: Factory,
    title: "Reliable Manufacturing",
    description: "Professional production process",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "On-time business support",
  },
  {
    icon: Award,
    title: "Industry Focused",
    description: "Built for industrial requirements",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl transition cursor-pointer"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;