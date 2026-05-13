const ActivityTimeline = ({
  logs
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
          mb-6
        "
      >
        Recent Activity
      </h2>

      <div className="space-y-4">

        {logs.map((log) => (

          <div
            key={log.id}
            className="
              border-l-4
              border-blue-500
              pl-4
              py-2
            "
          >

            <p className="font-medium">

              {log.description}

            </p>

            <p
              className="
                text-sm
                text-gray-500
              "
            >

              {log.username}
              {" • "}
              {new Date(
                log.created_at
              ).toLocaleString()}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ActivityTimeline;