import "./Spinner.css";

type SpinnerProps = {
  width?: string;
  height?: string;
  className?: string;
};

export default function Spinner({
  width = "1em",
  height = "1em",
  className = "",
}: SpinnerProps) {
  return (
    <div
      className={`loading-spinner ${className}`}
      style={{ width: width, height: height }}
    ></div>
  );
}
