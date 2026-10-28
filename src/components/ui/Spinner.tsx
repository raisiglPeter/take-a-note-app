import "./Spinner.css";

type SpinnerProps = {
  size?: string;

  className?: string;
};

export default function Spinner({
  size = "1em",

  className = "",
}: SpinnerProps) {
  return (
    <div
      className={`loading-spinner ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
}
