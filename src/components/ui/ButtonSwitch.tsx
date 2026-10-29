import "./ButtonSwitch.css";

interface ButtonSwitchProps {
  leftLabel: string;
  rightLabel: string;
  isRightActive: boolean;
  onToggle: (isRight: boolean) => void;
}

export default function ButtonSwitch({
  leftLabel,
  rightLabel,
  isRightActive,
  onToggle,
}: ButtonSwitchProps) {
  return (
    <div
      className={`button-switch-container ${isRightActive ? "right-active" : ""}`}
    >
      <div className="switch-indicator" />

      <button
        type="button"
        className={!isRightActive ? "active" : ""}
        onClick={() => onToggle(false)}
      >
        {leftLabel}
      </button>
      <button
        type="button"
        className={isRightActive ? "active" : ""}
        onClick={() => onToggle(true)}
      >
        {rightLabel}
      </button>
    </div>
  );
}
