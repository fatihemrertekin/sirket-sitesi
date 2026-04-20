export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-colors text-sm";

  const variants = {
    primary: "bg-primary-800 text-white hover:bg-primary-900",
    secondary: "bg-accent-500 text-white hover:bg-accent-600",
    outline: "border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
