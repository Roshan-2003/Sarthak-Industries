import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  showIcon = true,
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
      type={type}
      onClick={onClick}
      className={`flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold transition ${variants[variant]} ${className}`}
    >
      {children}

      {showIcon && <ArrowRight size={17} />}
    </button>
  );
};

export default Button;