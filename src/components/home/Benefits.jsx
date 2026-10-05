import { motion } from "framer-motion";
import { benefits } from "../../data/data";
import SectionTitle from "../common/SectionTitle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Benefits = () => {
  return (
    <section className="bg-white py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">

        <SectionTitle
          subtitle="Why Sarthak Industries"
          title="Built around quality and reliability."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 relative overflow-hidden"
              >
                {/* Subtle Hover Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;
