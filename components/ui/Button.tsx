import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    variant?: keyof typeof variants;
    loading?: boolean;
  };

const variants = {
  primary:
    "h-[36px] px-3 rounded bg-interactive font-button text-button text-default-inverse border-transparent hover:bg-default hover:text-default hover:border-interactive active:bg-interactive active:text-default-inverse active:border-transparent disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none ",
  secondary:
    "h-[36px] px-3 rounded bg-interactive-inverse font-button text-button border-default hover:bg-hover active:bg-interactive active:text-interactive-inverse disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none",
  tertiary:
    "h-[36px] px-3 rounded bg-interactive-inverse font-button text-button border-transparent hover:bg-hover active:border-interactive disabled:border-transparent disabled:text-subdued focus:outline-none",
  icon:
    "h-[36px] px-2 rounded-full bg-transparent text-default border-transparent hover:bg-hover active:border-interactive disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none",
  buy:
  "h-[55px] px-3 rounded bg-[#00CF80] font-button text-button text-white font-black"
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  as = "button",
  type = "button",
  class: _class = "",
  children,
  loading,
  disabled,
  ...props
}, ref) => {
  const Component = as as ComponentType<
    { disabled?: boolean; className: string; type: string }
  >;
  const styles = variants[variant];

  return (
    <Component
      {...props}
      name="button"
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in border ${styles.buy} ${_class}`}
      disabled={disabled || loading}
      type={type}
      ref={ref}
      aria-label="Button"
    >
      {loading === true ? <Spinner size={24} /> : children}
    </Component>
  );
});

export default Button;
