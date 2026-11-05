import "./Spinner.css";

type SpinnerProps = {
  size?: string;
  message?: string;
  className?: string;
};

export default function Spinner({
  size = "1.5rem",
  message = "",
  className = "",
}: SpinnerProps) {
  return (
    <div className={`spinner-wrapper ${className}`}>
      <div
        className="loading-spinner"
        style={{ width: size, height: size }}
      ></div>
      {message && <span className="spinner-message">{message}</span>}
    </div>
  );
}
