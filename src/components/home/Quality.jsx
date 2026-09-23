import { ArrowRight } from "lucide-react";
import { qualitySteps } from "../../data/data";
import SectionTitle from "../common/SectionTitle";

const Quality = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="quality"
      className="scroll-mt-0 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">

        <SectionTitle
          subtitle="Quality Assurance"
          title="Quality at every stage."
          description="A structured manufacturing workflow helps us maintain consistency and reliability."
          center
        />

        <div className="mt-10 sm:mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {qualitySteps.map(
            ([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <span className="text-xs sm:text-sm font-black text-blue-700">
                  {number}
                </span>

                <h3 className="mt-3 sm:mt-5 text-sm sm:text-base font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-blue-700 p-5 sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Need technical product information?
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-blue-100">
                Contact our team for product specifications,
                documentation and supply requirements.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Contact Us
              <ArrowRight size={18} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;