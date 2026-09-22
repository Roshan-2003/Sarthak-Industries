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
      className="scroll-mt-0 bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">

        {/* Owner */}
       {/* Owner */}
<div className="relative mx-auto max-w-sm">
  <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-blue-100" />

  <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
    <img
      src="/images/ownerphoto.webp"
      alt="Owner of Sarthak Industries"
      className="h-[360px] w-full rounded-[1.5rem] object-cover"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />

    <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-5 shadow-xl">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
        Leadership
      </p>

      <h3 className="mt-1 text-xl font-black">
        Owner & Founder
      </h3>

      <p className="text-sm text-slate-500">
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

          <p className="mt-4 leading-8 text-slate-600">
            We aim to become a trusted long-term partner for businesses
            that require consistent chemical products and dependable
            supply.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-blue-700"
                />

                <span className="font-semibold text-slate-700">
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