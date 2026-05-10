const EmptyState = ({
  title = "No Data Found",
  message = "Nothing to display.",
}) => {

  return (
    <div className="text-center py-16">

      <h2 className="text-2xl font-bold text-gray-600 mb-2">
        {title}
      </h2>

      <p className="text-gray-500">
        {message}
      </p>

    </div>
  );
};

export default EmptyState;