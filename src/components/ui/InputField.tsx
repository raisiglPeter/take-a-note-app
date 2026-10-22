import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, ...props }: InputProps) {
  return (
    <>
      {label && <label>{label}</label>}
      <input {...props}></input>
    </>
  );
}
