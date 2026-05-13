const StatusBadge = ({ status }) => {

  const statusStyles = {

    pending:
      "bg-yellow-100 text-yellow-700",

    approved:
      "bg-green-100 text-green-700",

    rejected:
      "bg-red-100 text-red-700",

    paid:
      "bg-blue-100 text-blue-700",
  };

  return (

    <span
      className={`
        px-3 py-1 rounded-full
        text-sm font-medium
        ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;