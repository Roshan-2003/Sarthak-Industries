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
      className="scroll-mt-0 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">

        <SectionTitle
          subtitle="Our Product"
          title="Industrial Chemical Solutions"
          description="Explore our featured chemical product designed to serve industrial requirements."
          center
        />

        {products.map((product) => (
          <div
            key={product.id}
            className="mx-auto mt-8 sm:mt-12 grid max-w-5xl overflow-hidden rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white shadow-xl lg:grid-cols-2"
          >

            {/* Image */}
            <div className="h-[220px] sm:h-[300px] lg:h-full w-full bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
              <h3 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
                {product.name}
              </h3>

              <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  ["Product", "Acidic Sylric"],
                  ["Grade", "Industrial"],
                  ["Supply", "Bulk / B2B"],
                  ["Packaging", "As Required"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-slate-50 p-3 sm:p-4"
                  >
                    <p className="text-[10px] sm:text-xs font-semibold uppercase text-slate-400">
                      {label}
                    </p>

                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold text-slate-800">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-6 sm:mt-8 flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-blue-800"
              >
                Enquire Now
                <ArrowRight size={17} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;