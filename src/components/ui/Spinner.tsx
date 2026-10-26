import "./Spinner.css";

type SpinnerProps = {
  width?: string;
  height?: string;
  size?: string;
  className?: string;
};

export default function Spinner({
  size = "3em",
  className = "",
}: SpinnerProps) {
  return (
    <div
      className={`loading-spinner ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
}
