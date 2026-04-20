export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-primary-100 text-primary-700",
    accent: "bg-accent-100 text-accent-700",
    success: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
