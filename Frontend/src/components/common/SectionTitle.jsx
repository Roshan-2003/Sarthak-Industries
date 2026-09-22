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
          className={`h-[2px] w-8 ${
            light ? "bg-blue-400" : "bg-blue-700"
          }`}
        />

        <p
          className={`text-sm font-semibold uppercase tracking-[0.25em] ${
            light ? "text-blue-400" : "text-blue-700"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <h2
        className={`mt-4 text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-[15px] leading-8 md:text-base ${
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