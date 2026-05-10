const Input = ({
  label,
  error,
  className = "",
  ...props
}) => {

  return (
    <div>

      {label && (
        <label className="block mb-1 font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          border
          rounded-lg
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
          ${className}
        `}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;