import { Factory, Menu, X } from "lucide-react";
import { useState } from "react";
// import { Menu, X, Factory } from "lucide-react";

const navLinks = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "product",
    label: "Product",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "quality",
    label: "Quality",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center">
              <Factory className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="font-bold text-lg text-slate-900">
                Sarthak Industries
              </h1>

              {/* <p className="text-xs text-slate-500">
                Chemical Manufacturing
              </p> */}
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-slate-700 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-blue-700 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
