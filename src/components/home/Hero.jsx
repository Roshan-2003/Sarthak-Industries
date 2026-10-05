import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Factory, ChevronDown } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20"
    >
      {/* Dynamic Animated Radial Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.35),transparent_40%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div style={{ opacity: opacityText }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Chemical Manufacturing & Industrial Solutions
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white"
          >
            Reliable Chemicals.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Trusted Manufacturing.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-300"
          >
            Sarthak Industries delivers quality-focused chemical
            manufacturing solutions for industrial businesses with a
            commitment to consistency, reliability and customer support.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 sm:mt-9 flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("product")}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/30"
            >
              Explore Product
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto flex items-center justify-center rounded-xl border border-white/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-white/10"
            >
              Request a Quote
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5 sm:pt-7 gap-2"
          >
            {[
              { value: "100%", label: "Quality Focus" },
              { value: "B2B", label: "Industrial Supply" },
              { value: "24/7", label: "Enquiry Support" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Container with Scroll Parallax */}
        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mt-4 lg:mt-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 shadow-2xl">
            <img
              src="/images/chemicalfactory.avif"
              alt="Sarthak Industries Factory"
              className="h-[260px] sm:h-[380px] md:h-[450px] lg:h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950/80 p-3 sm:p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-blue-600 text-white shadow-md">
                  <Factory className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    Industrial Manufacturing
                  </p>

                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Quality • Reliability • Supply
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 cursor-pointer hidden sm:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[11px] uppercase tracking-widest font-medium">Scroll Down</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;