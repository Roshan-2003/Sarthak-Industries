import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TrustBar = () => {
  return (
    <section className="bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 sm:gap-4 p-3 rounded-2xl bg-slate-50/60 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-100 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-700">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">
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

export default TrustBar;