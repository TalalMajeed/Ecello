import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "white" | "scrollDown" | "scrollUp";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  arrow?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#0a1f5e] text-white hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[--color-navy] border border-[rgba(150,176,208,0.28)] hover:border-[rgba(46,155,238,0.38)] hover:text-[--color-blue] hover:-translate-y-0.5",
  white: "bg-white text-[#0a1f5e] hover:-translate-y-0.5",
  scrollDown:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/82 text-[--color-navy] border border-[rgba(150,176,208,0.28)] text-2xl leading-none hover:-translate-y-0.5 hover:bg-white hover:border-[rgba(46,155,238,0.38)] hover:text-[--color-azure]",
  scrollUp:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/88 text-[--color-navy] border border-[rgba(150,176,208,0.28)] text-2xl leading-none hover:-translate-y-0.5 hover:bg-white hover:border-[rgba(46,155,238,0.38)] hover:text-[--color-azure]",
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { variant = "primary", arrow = false, children, className = "", ...props },
  ref
) {
  return (
    <a
      ref={ref}
      className={`group font-sans font-semibold text-[15px] rounded-full px-[22px] py-3 inline-flex items-center gap-2.5 whitespace-nowrap transition-[transform,background,border-color,color] duration-200 ease-out cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
          →
        </span>
      )}
    </a>
  );
});
