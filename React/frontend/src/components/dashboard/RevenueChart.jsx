import {

  LineChart,

  Line,

  XAxis,

  YAxis,

  Tooltip,

  ResponsiveContainer,

  CartesianGrid,

} from "recharts";

const RevenueChart = ({
  data
}) => {

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
      "
    >

      <h2
        className="
          text-xl
          font-bold
          mb-4
        "
      >
        Revenue Trends
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default RevenueChart;