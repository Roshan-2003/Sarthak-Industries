const SectionTitle = ({
  subtitle,
  title,
  description,
  light = false,
  center = false,
}) => {
  return (
    <div
      className={`
        ${center ? "mx-auto text-center" : ""}
        max-w-3xl
      `}
    >
      <div
        className={`flex items-center gap-2 ${
          center ? "justify-center" : ""
        }`}
      >
        <span
          className={`h-[2px] w-6 sm:w-8 ${
            light ? "bg-blue-400" : "bg-blue-700"
          }`}
        />

        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] ${
            light ? "text-blue-400" : "text-blue-700"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <h2
        className={`mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed ${
            light ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;