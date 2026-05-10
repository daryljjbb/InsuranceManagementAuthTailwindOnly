const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    warning:
      "bg-yellow-500 hover:bg-yellow-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg transition font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;