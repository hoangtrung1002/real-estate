import { cn } from "@/utils/helper";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
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
