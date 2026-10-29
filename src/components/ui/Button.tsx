import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  width?: "full" | "fit-content";
}

export default function Button({
  variant = "primary",
  width = "full",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${width}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
