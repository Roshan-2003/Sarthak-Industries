import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const About = () => {
  const points = [
    "Quality-focused manufacturing",
    "Consistent product supply",
    "Professional customer support",
    "Industrial and bulk requirements",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-0 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 px-4 sm:px-6 md:px-10 lg:grid-cols-2">

        {/* Owner Image */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -bottom-4 -right-4 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-blue-100" />

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white p-2.5 sm:p-3 shadow-xl">
            <img
              src="/images/ownerphoto.webp"
              alt="Owner of Sarthak Industries"
              className="h-[280px] sm:h-[340px] md:h-[360px] w-full rounded-xl sm:rounded-[1.5rem] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 rounded-xl sm:rounded-2xl bg-white/95 p-3.5 sm:p-5 shadow-xl">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-700">
                Leadership
              </p>

              <h3 className="mt-0.5 sm:mt-1 text-base sm:text-xl font-black text-slate-900">
                Owner & Founder
              </h3>

              <p className="text-xs sm:text-sm text-slate-500">
                Sarthak Industries
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionTitle
            subtitle="About Sarthak Industries"
            title={
              <>
                Building trust through
                <span className="text-blue-700">
                  {" "}quality chemicals.
                </span>
              </>
            }
            description="Sarthak Industries is focused on delivering dependable chemical manufacturing solutions for industrial customers. Our approach combines manufacturing discipline, quality awareness and customer-focused service."
          />

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
            We aim to become a trusted long-term partner for businesses
            that require consistent chemical products and dependable
            supply.
          </p>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 sm:gap-3"
              >
                <CheckCircle2
                  className="h-4 w-4 sm:h-[21px] sm:w-[21px] shrink-0 text-blue-700"
                />

                <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;