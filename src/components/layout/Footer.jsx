import {
  Factory,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-700 flex items-center justify-center">
                <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Sarthak Industries
                </h2>

                <p className="text-[11px] sm:text-xs text-slate-500">
                  Chemical Manufacturing
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A professional chemical manufacturing business
              focused on quality, reliability and industrial
              requirements.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-5 sm:mt-6">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {[
                ["#home", "Home"],
                ["#about", "About Us"],
                ["#product", "Products"],
                ["#applications", "Applications"],
                ["#quality", "Quality"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-blue-700 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-slate-900">
              Our Products
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              <li className="text-xs sm:text-sm text-slate-600">
                Acidic Sylric
              </li>
              <li className="text-xs sm:text-sm text-slate-600">
                Industrial Chemicals
              </li>
              <li className="text-xs sm:text-sm text-slate-600">
                Chemical Solutions
              </li>
              <li className="text-xs sm:text-sm text-slate-600">
                Custom Requirements
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-4 sm:space-y-5">

              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-600">
                  Gujarat, India
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-xs sm:text-sm text-slate-600 hover:text-blue-700 transition"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 shrink-0" />
                <a
                  href="mailto:info@sarthakindustries.com"
                  className="text-xs sm:text-sm text-slate-600 hover:text-blue-700 transition break-all sm:break-normal"
                >
                  info@sarthakindustries.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Sarthak Industries.
              All rights reserved.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">

              <a
                href="#"
                className="text-xs sm:text-sm text-slate-500 hover:text-blue-700 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-slate-500 hover:text-blue-700 transition"
              >
                Terms & Conditions
              </a>

              <button
                onClick={scrollToTop}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
