import { cn } from "@/utils/helper";

interface ButtonProps {
  children: string;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "py-3 px-4 bg-primary-700 rounded-md text-white",
        { "bg-transparent border-primary-100 border": variant === "secondary" },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
