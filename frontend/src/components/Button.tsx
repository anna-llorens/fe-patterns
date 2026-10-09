import type { ComponentPropsWithoutRef } from "react";
import "@/css/button.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "link"
  | "pill"
  | "tab"
  | "chip";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  active?: boolean;
};

const TOGGLE_VARIANTS: ButtonVariant[] = ["pill", "tab", "chip"];

export const Button = ({
  variant = "primary",
  active = false,
  className,
  type = "button",
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={[
      "btn",
      `btn--${variant}`,
      active ? "btn--active" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    aria-pressed={TOGGLE_VARIANTS.includes(variant) ? active : undefined}
    {...props}
  />
);
