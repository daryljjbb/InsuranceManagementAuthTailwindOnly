import { useMemo, useState } from "react";

import Button from "./Button";

const DataTable = ({
  columns,
  data,
  searchable = true,
  pagination = true,
  pageSize = 5,
}) => {

  // SEARCH
  const [search, setSearch] =
    useState("");

  // PAGINATION
  const [currentPage,
    setCurrentPage] =
      useState(1);

  // SORTING
  const [sortConfig,
    setSortConfig] =
      useState({

        key: null,

        direction: "asc",
      });

  // HANDLE SORT
  const handleSort = (key) => {

    let direction = "asc";

    if (
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {

      direction = "desc";
    }

    setSortConfig({
      key,
      direction,
    });
  };

  // FILTER DATA
  const filteredData =
    useMemo(() => {

      return data.filter((row) =>

        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    }, [data, search]);

  // SORT DATA
  const sortedData =
    useMemo(() => {

      if (!sortConfig.key)
        return filteredData;

      return [...filteredData].sort(
        (a, b) => {

          if (
            a[sortConfig.key] <
            b[sortConfig.key]
          ) {

            return sortConfig.direction ===
              "asc"
              ? -1
              : 1;
          }

          if (
            a[sortConfig.key] >
            b[sortConfig.key]
          ) {

            return sortConfig.direction ===
              "asc"
              ? 1
              : -1;
          }

          return 0;
        }
      );
    }, [
      filteredData,
      sortConfig,
    ]);

  // PAGINATION LOGIC
  const totalPages =
    Math.ceil(
      sortedData.length / pageSize
    );

  const paginatedData =
    pagination
      ? sortedData.slice(
          (currentPage - 1) *
            pageSize,

          currentPage * pageSize
        )
      : sortedData;

  return (

    <div className="space-y-4">

      {/* SEARCH */}
      {searchable && (

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        />

      )}

      {/* TABLE */}
      <div
        className="
          overflow-x-auto
          bg-white
          shadow
          rounded-xl
        "
      >

        <table className="min-w-full">

          {/* HEADER */}
          <thead
            className="
              bg-slate-100
            "
          >

            <tr>

              {columns.map(
                (column) => (

                <th
                  key={column.key}
                  onClick={() =>
                    handleSort(
                      column.key
                    )
                  }
                  className="
                    text-left
                    px-6
                    py-4
                    font-semibold
                    text-slate-700
                    cursor-pointer
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    {column.title}

                    {sortConfig.key ===
                      column.key && (

                      <span>

                        {sortConfig.direction ===
                        "asc"
                          ? "↑"
                          : "↓"}

                      </span>
                    )}

                  </div>

                </th>

              ))}

            </tr>

          </thead>

          {/* BODY */}
          <tbody>

            {paginatedData.length >
            0 ? (

              paginatedData.map(
                (row, index) => (

                <tr
                  key={index}
                  className="
                    border-t
                    hover:bg-slate-50
                  "
                >

                  {columns.map(
                    (column) => (

                    <td
                      key={column.key}
                      className="
                        px-6
                        py-4
                      "
                    >

                      {column.render
                        ? column.render(
                            row
                          )
                        : row[
                            column.key
                          ]}

                    </td>

                  ))}

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={
                    columns.length
                  }
                  className="
                    text-center
                    py-10
                    text-gray-500
                  "
                >

                  No data found.

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}
      {pagination &&
        totalPages > 1 && (

        <div
          className="
            flex
            justify-between
            items-center
          "
        >

          <Button
            variant="warning"
            onClick={() =>
              setCurrentPage(
                (prev) =>
                  Math.max(
                    prev - 1,
                    1
                  )
              )
            }
          >
            Previous
          </Button>

          <span>
            Page {currentPage}
            {" "}of{" "}
            {totalPages}
          </span>

          <Button
            variant="warning"
            onClick={() =>
              setCurrentPage(
                (prev) =>
                  Math.min(
                    prev + 1,
                    totalPages
                  )
              )
            }
          >
            Next
          </Button>

        </div>

      )}

    </div>
  );
};

export default DataTable;