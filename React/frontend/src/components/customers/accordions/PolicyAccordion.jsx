import { useState } from "react";

import Card from "../../ui/Card";

import StatusBadge from "../../ui/StatusBadge";

const PolicyAccordion = ({
  policy,
}) => {

  const [expanded,
    setExpanded] =
      useState(false);

  return (

    <Card>

      {/* HEADER */}
      <div

        onClick={() =>
          setExpanded(!expanded)
        }

        className="
          flex
          justify-between
          items-center
          cursor-pointer
        "
      >

        <div>

          <h2 className="
            text-xl
            font-bold
          ">
            {policy.policy_number}
          </h2>

          <p className="text-gray-500">
            {policy.policy_type}
          </p>

        </div>

        <div className="
          flex
          items-center
          gap-4
        ">

          <StatusBadge
            status={policy.status}
          />

          <div className="
            text-2xl
            font-bold
          ">

            {expanded ? "−" : "+"}

          </div>

        </div>

      </div>

      {/* CONTENT */}
      {expanded && (

        <div className="
          mt-6
        ">

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
          ">

            {/* PREMIUM */}
            <div className="
              border
              rounded-xl
              p-4
            ">

              <p className="
                text-sm
                text-gray-500
                mb-1
              ">
                Premium
              </p>

              <p className="
                text-2xl
                font-bold
              ">
                $
                {policy.premium}
              </p>

            </div>

            {/* START DATE */}
            <div className="
              border
              rounded-xl
              p-4
            ">

              <p className="
                text-sm
                text-gray-500
                mb-1
              ">
                Start Date
              </p>

              <p className="
                text-2xl
                font-bold
              ">
                {policy.start_date}
              </p>

            </div>

            {/* END DATE */}
            <div className="
              border
              rounded-xl
              p-4
            ">

              <p className="
                text-sm
                text-gray-500
                mb-1
              ">
                End Date
              </p>

              <p className="
                text-2xl
                font-bold
              ">
                {policy.end_date}
              </p>

            </div>

          </div>

        </div>

      )}

    </Card>
  );
};

export default PolicyAccordion;