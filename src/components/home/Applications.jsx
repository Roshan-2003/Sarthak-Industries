import { motion } from "framer-motion";
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
      className="scroll-mt-0 bg-slate-50/60 py-16 sm:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle
              subtitle="Applications"
              title="Supporting industrial applications."
              description="Our chemical solutions are positioned for industrial and manufacturing requirements. Final applications and technical recommendations should always be based on the approved product specification and safety documentation."
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="mt-6 sm:mt-8 flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-blue-700 transition hover:bg-blue-100 shadow-sm"
            >
              Discuss your requirement
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid gap-3 sm:gap-4 sm:grid-cols-2"
          >
            {applications.map((application, index) => (
              <motion.div
                key={application}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-blue-50 text-xs sm:text-sm font-black text-blue-700 border border-blue-100"
                  >
                    0{index + 1}
                  </motion.div>

                  <ArrowRight
                    size={18}
                    className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-700"
                  />
                </div>

                <h3 className="mt-4 sm:mt-6 text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {application}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Applications;