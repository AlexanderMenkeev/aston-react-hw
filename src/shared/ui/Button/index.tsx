import { useTheme } from "../../lib/theme/ThemeContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "icon";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const { isDarkTheme } = useTheme();

  let baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-in-out focus:outline-none cursor-pointer border";

  let sizeClasses = "";
  if (variant !== "icon") {
    if (size === "sm") sizeClasses = "px-3 py-1.5 text-sm";
    else if (size === "lg") sizeClasses = "px-6 py-3 text-lg";
    else sizeClasses = "px-4 py-2 text-base";
  } else {
    baseClasses = "p-2 rounded-full transition-colors duration-200";
  }

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses =
      "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700";
  } else if (variant === "secondary") {
    variantClasses = isDarkTheme
      ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
      : "bg-white text-slate-900 border-slate-200 hover:bg-slate-100";
  } else if (variant === "icon") {
    variantClasses =
      "border-transparent " + isDarkTheme
        ? "text-slate-400 hover:bg-slate-700"
        : "text-slate-500 hover:bg-slate-200";
  }

  const allClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  return (
    <button onClick={onClick} className={allClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
