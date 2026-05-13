import {

  BarChart,

  Bar,

  XAxis,

  YAxis,

  Tooltip,

  ResponsiveContainer,

  CartesianGrid,

} from "recharts";

const ClaimsChart = ({
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
        Claims Analytics
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="status"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              fill="#f59e0b"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default ClaimsChart;