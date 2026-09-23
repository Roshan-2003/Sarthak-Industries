import { ArrowRight, ChevronRight } from "lucide-react";
import { applications } from "../../data/data";
import SectionTitle from "../common/SectionTitle";

const Applications = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="applications"
      className="scroll-mt-0 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>
            <SectionTitle
              subtitle="Applications"
              title="Supporting industrial applications."
              description="Our chemical solutions are positioned for industrial and manufacturing requirements. Final applications and technical recommendations should always be based on the approved product specification and safety documentation."
            />

            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 sm:mt-8 flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-blue-700 transition hover:bg-blue-100"
            >
              Discuss your requirement
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Cards */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {applications.map((application, index) => (
              <div
                key={application}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-blue-50 text-xs sm:text-sm font-black text-blue-700">
                    0{index + 1}
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700"
                  />
                </div>

                <h3 className="mt-4 sm:mt-6 text-sm sm:text-base font-bold text-slate-800">
                  {application}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Applications;