function Button({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      aria-label="button"
    >
      {children}
    </button>
  );
}

export default Button;
