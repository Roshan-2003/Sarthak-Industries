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
      className="relative overflow-hidden bg-slate-950 pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.28),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-12xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-14">

        {/* Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            Chemical Manufacturing & Industrial Solutions
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
            Reliable Chemicals.

            <span className="block text-blue-400">
              Trusted Manufacturing.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Sarthak Industries delivers quality-focused chemical
            manufacturing solutions for industrial businesses with a
            commitment to consistency, reliability and customer support.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollTo("product")}
              className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2.4 font-bold text-white hover:bg-blue-500"
            >
              Explore Product

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white hover:bg-white/10"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
            <div>
              <p className="text-xl font-semibold text-white">
                100%
              </p>
              <p className="text-sm text-slate-400">
                Quality Focus
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white">
                B2B
              </p>
              <p className="text-sm text-slate-400">
                Industrial Supply
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white">
                24/7
              </p>
              <p className="text-sm text-slate-400">
                Enquiry Support
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="/images/chemicalfactory.avif"
              alt="Sarthak Industries Factory"
              className="h-[500px] w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Factory size={23} />
                </div>

                <div>
                  <p className="font-bold text-white">
                    Industrial Manufacturing
                  </p>

                  <p className="text-sm text-slate-400">
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