export default function SectionTitle({ subtitle, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {subtitle && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <div className="w-8 h-[1px] bg-accent-500"></div>
          <span className="text-accent-500 text-sm font-medium tracking-[0.2em] uppercase">
            {subtitle}
          </span>
          {align === "center" && <div className="w-8 h-[1px] bg-accent-500"></div>}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
        {title}
      </h2>
      {description && (
        <p className="text-primary-200 text-lg leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
