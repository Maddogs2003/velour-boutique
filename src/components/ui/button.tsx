import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-stone-900 text-white hover:bg-stone-700 active:scale-[0.98]":
              variant === "primary",
            "bg-brand-500 text-white hover:bg-brand-600 active:scale-[0.98]":
              variant === "secondary",
            "border border-stone-900 text-stone-900 hover:bg-stone-100 active:scale-[0.98]":
              variant === "outline",
            "text-stone-700 hover:text-stone-900 hover:bg-stone-100":
              variant === "ghost",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm tracking-wide": size === "md",
            "px-8 py-3.5 text-base tracking-wide": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
