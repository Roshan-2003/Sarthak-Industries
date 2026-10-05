import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/data";
import SectionTitle from "../common/SectionTitle";

const Product = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="product"
      className="scroll-mt-0 py-16 sm:py-20 bg-slate-50/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">

        <SectionTitle
          subtitle="Our Product"
          title="Industrial Chemical Solutions"
          description="Explore our featured chemical product designed to serve industrial requirements."
          center
        />

        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-8 sm:mt-12 grid max-w-5xl overflow-hidden rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white shadow-xl lg:grid-cols-2 group hover:shadow-2xl transition-shadow"
          >

            {/* Image */}
            <div className="h-[220px] sm:h-[300px] lg:h-full w-full bg-slate-100 overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900"
              >
                {product.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600"
              >
                {product.description}
              </motion.p>

              {/* Specifications */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  ["Product", "Acidic Sylric"],
                  ["Grade", "Industrial"],
                  ["Supply", "Bulk / B2B"],
                  ["Packaging", "As Required"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -2, backgroundColor: "#eff6ff" }}
                    className="rounded-xl bg-slate-50 p-3 sm:p-4 border border-slate-100 transition-colors"
                  >
                    <p className="text-[10px] sm:text-xs font-semibold uppercase text-slate-400">
                      {label}
                    </p>

                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold text-slate-800">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
                className="mt-6 sm:mt-8 flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-blue-800 shadow-lg shadow-blue-700/20"
              >
                Enquire Now
                <ArrowRight size={17} />
              </motion.button>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Product;