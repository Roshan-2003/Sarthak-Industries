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
      className="scroll-mt-0 py-24"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        <SectionTitle
          subtitle="Our Product"
          title="Industrial Chemical Solutions"
          description="Explore our featured chemical product designed to serve industrial requirements."
          center
        />

      {products.map((product) => (
  <div
    key={product.id}
    className="mx-auto mt-6 grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl lg:grid-cols-2"
  >

    {/* Image */}
    <div className="h-[220px] lg:h-full w-full bg-slate-100">
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
    <div className="flex flex-col justify-center p-8 md:p-12">
      <h3 className="mt-5 text-4xl font-semibold">
        {product.name}
      </h3>

      <p className="mt-5 leading-7 text-slate-600">
        {product.description}
      </p>

      {/* Specifications */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {[
          ["Product", "Acidic Sylric"],
          ["Grade", "Industrial"],
          ["Supply", "Bulk / B2B"],
          ["Packaging", "As Required"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl bg-slate-50 p-4"
          >
            <p className="text-xs font-semibold uppercase text-slate-400">
              {label}
            </p>

            <p className="mt-1 font-bold text-slate-800">
              {value}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollTo("contact")}
        className="mt-8 flex w-fit items-center gap-2 rounded-xl  px-6 py-3 font-bold text-white bg-blue-700"
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