import {

  PieChart,

  Pie,

  Tooltip,

  ResponsiveContainer,

  Cell,

  Legend,

} from "recharts";

const COLORS = [

  "#22c55e",

  "#ef4444",

  "#facc15",
];

const InvoicePieChart = ({
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
        Invoice Status
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="total"
              nameKey="status"
              outerRadius={120}
              label
            >

              {data.map(
                (entry, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index %
                      COLORS.length
                    ]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default InvoicePieChart;