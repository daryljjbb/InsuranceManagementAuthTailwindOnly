import Card from "../../ui/Card";

const CustomerStatCard = ({
  title,
  value,
  color = "blue",
}) => {

  const colors = {

    blue: "text-blue-600",

    green: "text-green-600",

    yellow: "text-yellow-600",

    red: "text-red-600",

    purple: "text-purple-600",
  };

  return (

    <Card>

      <p className="
        text-sm
        text-gray-500
        mb-2
      ">
        {title}
      </p>

      <h2 className={`
        text-3xl
        font-bold
        ${colors[color]}
      `}>
        {value}
      </h2>

    </Card>
  );
};

export default CustomerStatCard;