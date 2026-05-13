const MetricCard = ({
  title,
  value,
  icon,
  color = "bg-blue-500",
}) => {

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        flex
        items-center
        justify-between
      "
    >

      <div>

        <p
          className="
            text-gray-500
            text-sm
          "
        >
          {title}
        </p>

        <h2
          className="
            text-3xl
            font-bold
            mt-2
          "
        >
          {value}
        </h2>

      </div>

      <div
        className={`
          ${color}
          text-white
          p-4
          rounded-xl
          text-2xl
        `}
      >

        {icon}

      </div>

    </div>
  );
};

export default MetricCard;