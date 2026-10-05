import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-0 bg-slate-50/70 py-16 sm:py-20 text-slate-900 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 px-4 sm:px-6 md:px-10 lg:grid-cols-2 items-start">

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Contact Sarthak Industries
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Let's discuss your chemical requirement.
          </h2>

          <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
            Contact us for product information, bulk requirements,
            packaging options and business enquiries.
          </p>

          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">

            <ContactItem
              icon={<Phone className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />}
              label="Phone"
              value="+91 XXXXX XXXXX"
              delay={0.1}
            />

            <ContactItem
              icon={<Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />}
              label="Email"
              value="info@sarthakindustries.com"
              isEmail
              delay={0.2}
            />

            <ContactItem
              icon={<MapPin className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />}
              label="Location"
              value="Gujarat, India"
              delay={0.3}
            />

          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 text-slate-900 shadow-xl relative"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center flex flex-col items-center justify-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Enquiry Received!</h3>
              <p className="text-sm text-slate-600 max-w-xs">
                Thank you for contacting Sarthak Industries. Our team will respond shortly.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Request a Quote
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Fill in your details and our team will contact you.
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
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

              <div className="mt-3 sm:mt-4">
                <label className="mb-1.5 block text-xs sm:text-sm font-bold">
                  Product Required
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition">
                  <option>Acidic Sylric</option>
                  <option>Other Requirement</option>
                </select>
              </div>

              <div className="mt-3 sm:mt-4">
                <label className="mb-1.5 block text-xs sm:text-sm font-bold">
                  Message
                </label>

                <textarea
                  rows="3"
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-6 flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-blue-800 shadow-lg shadow-blue-700/20"
              >
                Send Enquiry
                <ArrowRight size={18} />
              </motion.button>
            </>
          )}
        </motion.form>

      </div>
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
  isEmail = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ x: 5 }}
      className="flex items-center gap-3 sm:gap-4 p-2.5 rounded-xl hover:bg-white transition-all cursor-pointer"
    >
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs sm:text-sm text-slate-500">
          {label}
        </p>

        <p className={`mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base font-bold text-slate-900 ${isEmail ? "break-all sm:break-normal" : ""}`}>
          {value}
        </p>
      </div>
    </motion.div>
  );
};

const Input = ({
  label,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div className="mt-3 sm:mt-4">
      <label className="mb-1.5 block text-xs sm:text-sm font-bold">
        {label}
      </label>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition"
      />
    </div>
  );
};

export default Contact;
