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
      className="scroll-mt-0 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionTitle
          subtitle="Quality Assurance"
          title="Quality at every stage."
          description="A structured manufacturing workflow helps us maintain consistency and reliability."
          center
        />

        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {qualitySteps.map(
            ([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-black text-blue-700">
                  {number}
                </span>

                <h3 className="mt-5 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-3xl bg-blue-700 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <h3 className="text-2xl font-semibold text-white">
                Need technical product information?
              </h3>

              <p className="mt-2 text-blue-100">
                Contact our team for product specifications,
                documentation and supply requirements.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-700"
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