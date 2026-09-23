import { benefits } from "../../data/data";
import SectionTitle from "../common/SectionTitle";

const Benefits = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">

        <SectionTitle
          subtitle="Why Sarthak Industries"
          title="Built around quality and reliability."
        />

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
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
