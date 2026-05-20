function Button({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`primary ${className}`}
      aria-label="button"
    >
      {children}
    </button>
  );
}

export default Button;
