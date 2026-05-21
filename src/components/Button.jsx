function Button({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn primary ${className}`}
      aria-label="button"
    >
      {children}
    </button>
  );
}

export default Button;
