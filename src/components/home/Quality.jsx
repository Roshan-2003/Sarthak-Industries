import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
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
      className="scroll-mt-0 py-16 sm:py-20 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">

        <SectionTitle
          subtitle="Quality Assurance"
          title="Quality at every stage."
          description="A structured manufacturing workflow helps us maintain consistency and reliability."
          center
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-10 sm:mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {qualitySteps.map(([number, title, description], index) => (
            <motion.div
              key={number}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg">
                    {number}
                  </span>
                  <CheckCircle className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="mt-3 sm:mt-5 text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>

              <div className="mt-4 h-1 w-0 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle animated background shapes */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-white/10 blur-2xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Need technical product information?
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-xl">
                Contact our team for product specifications,
                documentation and supply requirements.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("contact")}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-blue-700 transition hover:bg-blue-50 shadow-lg"
            >
              Contact Us
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Quality;