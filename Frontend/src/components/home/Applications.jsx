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
      className="scroll-mt-0 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>
            <SectionTitle
              subtitle="Applications"
              title="Supporting industrial applications."
              description="Our chemical solutions are positioned for industrial and manufacturing requirements. Final applications and technical recommendations should always be based on the approved product specification and safety documentation."
            />

            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 flex items-center gap-2 font-bold text-blue-700"
            >
              Discuss your requirement
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((application, index) => (
              <div
                key={application}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">
                    0{index + 1}
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700"
                  />
                </div>

                <h3 className="mt-6 font-bold text-slate-800">
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