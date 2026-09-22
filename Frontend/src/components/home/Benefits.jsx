import { benefits } from "../../data/data";
import SectionTitle from "../common/SectionTitle";
const Benefits = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionTitle
          subtitle="Why Sarthak Industries"
          title="Built around quality and reliability."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Benefits;

