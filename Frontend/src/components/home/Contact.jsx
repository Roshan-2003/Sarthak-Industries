import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-0 bg-white py-24 text-slate-900"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

        {/* Contact Information */}
        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact Sarthak Industries
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
            Let's discuss your chemical requirement.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-600">
            Contact us for product information, bulk requirements,
            packaging options and business enquiries.
          </p>

          <div className="mt-10 space-y-6">

            <ContactItem
              icon={<Phone size={19} />}
              label="Phone"
              value="+91 XXXXX XXXXX"
            />

            <ContactItem
              icon={<Mail size={19} />}
              label="Email"
              value="info@sarthakindustries.com"
            />

            <ContactItem
              icon={<MapPin size={19} />}
              label="Location"
              value="Gujarat, India"
            />

          </div>
        </div>

        {/* Form */}
     <form
  onSubmit={handleSubmit}
  className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl md:p-7"
>
  <div className="mb-1">
    <h3 className="text-xl font-semibold">
      Request a Quote
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      Fill in your details and our team will contact you.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2">
    <Input
      label="Name"
      placeholder="Your name"
      required
    />

    <Input
      label="Company"
      placeholder="Company name"
    />
  </div>

  <Input
    label="Email"
    type="email"
    placeholder="you@company.com"
    required
  />

  <Input
    label="Phone"
    type="tel"
    placeholder="+91"
    required
  />

  <div className="mt-4">
    <label className="mb-1.5 block text-sm font-bold">
      Product Required
    </label>

    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:border-blue-600">
      <option>Acidic Sylric</option>
      <option>Other Requirement</option>
    </select>
  </div>

  <div className="mt-4">
    <label className="mb-1.5 block text-sm font-bold">
      Message
    </label>

    <textarea
      rows="3"
      placeholder="Tell us about your requirement..."
      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-600"
    />
  </div>

  <button
    type="submit"
    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
  >
    Send Enquiry
    <ArrowRight size={18} />
  </button>
</form>

      </div>c
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="mt-1 font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
};

const Input = ({
  label,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div className="mt-5">
      <label className="mb-1.5 block text-sm font-bold">
        {label}
      </label>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-1.5 outline-none focus:border-blue-600"
      />
    </div>
  );
};

export default Contact;

