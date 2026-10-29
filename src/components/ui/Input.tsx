import { forwardRef, useId, type InputHTMLAttributes } from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => {
    const errorId = useId();
    const errorClass = error ? "ui-input--error" : "";

    const classes = ["ui-input", errorClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="ui-input-wrapper">
        <input
          ref={ref}
          className={classes}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="ui-input-error-message" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
