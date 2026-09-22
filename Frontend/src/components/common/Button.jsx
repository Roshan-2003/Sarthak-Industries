import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800",

    dark:
      "bg-slate-900 text-white hover:bg-blue-700",

    outline:
      "border border-white/20 text-white hover:bg-white/10",

    white:
      "bg-white text-blue-700 hover:bg-slate-100",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold transition ${variants[variant]} ${className}`}
    >
      {children}

      <ArrowRight size={17} />
    </button>
  );
};

export default Button;