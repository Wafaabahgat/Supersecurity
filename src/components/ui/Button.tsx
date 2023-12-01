import { ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
}

const buttonVariants = cva(
  "flex items-center justify-center sm:text-base text-sm  gap-2 rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-main-light text-white hover:bg-main border hover:gap-4 rounded-full whitespace-nowrap",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "text-white bg-main-light rounded-full font-semibold",
        secondary: "bg-white hover:bg-main hover:text-white text-main-light rounded-full font-semibold",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "sm:h-[45px] h-[35px] sm:py-2 sm:px-6 py-3 px-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button: FC<ButtonProps> = ({
  className,
  variant,
  type,
  size,
  text,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      type={type}
      {...props}
    >
      {children}
      {text}
    </button>
  );
};

export { Button, buttonVariants };
