const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        border
        rounded-lg
        px-4
        py-2
        w-full
        md:w-80
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
      "
    />
  );
};

export default SearchInput;