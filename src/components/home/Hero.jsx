import { ArrowRight, Factory } from "lucide-react";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.28),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:grid-cols-2">

        {/* Content */}
        <div>
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Chemical Manufacturing & Industrial Solutions
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Reliable Chemicals.
            <span className="block text-blue-400">
              Trusted Manufacturing.
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-300">
            Sarthak Industries delivers quality-focused chemical
            manufacturing solutions for industrial businesses with a
            commitment to consistency, reliability and customer support.
          </p>

          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo("product")}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-blue-500"
            >
              Explore Product
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto flex items-center justify-center rounded-xl border border-white/20 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-white/10"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5 sm:pt-7 gap-2">
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                100%
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Quality Focus
              </p>
            </div>

            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                B2B
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Industrial Supply
              </p>
            </div>

            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                24/7
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Enquiry Support
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative mt-4 lg:mt-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10">
            <img
              src="/images/chemicalfactory.avif"
              alt="Sarthak Industries Factory"
              className="h-[260px] sm:h-[380px] md:h-[450px] lg:h-[500px] w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950/80 p-3 sm:p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-blue-600 text-white">
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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;