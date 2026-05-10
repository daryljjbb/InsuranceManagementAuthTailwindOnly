const Table = ({
  columns,
  data,
}) => {

  return (
    <div className="overflow-x-auto bg-white shadow rounded-xl">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            {columns.map((column) => (
              <th
                key={column.key}
                className="
                  text-left
                  px-6
                  py-4
                  font-semibold
                  text-slate-700
                "
              >
                {column.title}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr
              key={index}
              className="border-t hover:bg-slate-50"
            >

              {columns.map((column) => (

                <td
                key={column.key}
                className="px-6 py-4"
                >
                {
                    column.render
                    ? column.render(row)
                    : row[column.key]
                }
                </td>
              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Table;