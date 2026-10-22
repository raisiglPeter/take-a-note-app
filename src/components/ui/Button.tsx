import type { ButtonHTMLAttributes } from "react";

import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variantClass = `ui-button--${variant}`;
  return (
    <button className={`ui-button ${variantClass} `} {...props}>
      {children}
    </button>
  );
}
