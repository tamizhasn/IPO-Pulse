export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const base =
    "h-9 px-4 rounded-lg text-sm font-medium transition focus:outline-none";

  const styles = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "border border-border bg-white hover:bg-gray-50",
    danger: "text-red-600 hover:bg-red-50",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
