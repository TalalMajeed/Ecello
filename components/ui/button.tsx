import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "white" | "scrollDown" | "scrollUp";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  arrow?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "relative bg-navy text-white border-2 border-navy",
  ghost:
    "relative bg-transparent text-navy border-2 border-navy hover:border-blue",
  white: "relative bg-white text-navy border-2 border-white",
  scrollDown:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/82 text-navy border-2 border-navy text-[2.25rem] leading-none hover:border-azure",
  scrollUp:
    "w-[54px] h-[54px] !px-0 !py-0 justify-center bg-white/88 text-navy border-2 border-navy text-[2.25rem] leading-none hover:border-azure",
};

// Repeating scalloped crests across a 0..200 viewBox. The pattern repeats every
// 25 units, so a -50% (one button width) horizontal shift loops seamlessly.
const scallop = (baseline: number, ry: number) => {
  let d = `M0 ${baseline}`;
  for (let x = 25; x <= 200; x += 25) {
    d += ` A12.5 ${ry} 0 0 1 ${x} ${baseline}`;
  }
  return `${d} L200 20 L0 20 Z`;
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { variant = "primary", arrow = false, children, className = "", ...props },
  ref
) {
  return (
    <a
      ref={ref}
      className={`group overflow-hidden font-sans font-semibold text-[15px] rounded-full px-[22px] py-3 inline-flex items-center justify-center whitespace-nowrap transition-[background,border-color,color] duration-200 ease-out cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-4 overflow-hidden translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        <svg
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-full w-[200%] animate-[wave-move_2.4s_linear_infinite]"
        >
          <path d={scallop(11, 9)} className="fill-sky" />
        </svg>
        <svg
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-full w-[200%] animate-[wave-move_1.6s_linear_infinite]"
        >
          <path d={scallop(12, 8)} className="fill-azure" />
        </svg>
      </span>
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
        {arrow && (
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
    </a>
  );
});
