import type { ButtonHTMLAttributes } from "react";

import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  width?: "full" | "fit-content";
}

export default function Button({
  variant = "primary",
  width = "full",
  children,
  ...props
}: ButtonProps) {
  const variantClass = `ui-button--${variant}`;

  const buttonWidth = width === "full" ? "full-width" : "fit-width";

  return (
    <button className={`ui-button ${variantClass} ${buttonWidth}`} {...props}>
      {children}
    </button>
  );
}
