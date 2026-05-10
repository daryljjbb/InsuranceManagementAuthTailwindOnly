const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}) => {

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        justify-center
        items-center
        z-50
      "
    >

      <div
        className="
          bg-white
          rounded-xl
          shadow-xl
          w-full
          max-w-2xl
          p-6
        "
      >

        {/* HEADER */}
        <div
          className="
            flex
            justify-between
            items-center
            mb-4
          "
        >

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-gray-500
              hover:text-red-500
              text-xl
            "
          >
            ✕
          </button>

        </div>

        {/* CONTENT */}
        {children}

      </div>

    </div>
  );
};

export default Modal;