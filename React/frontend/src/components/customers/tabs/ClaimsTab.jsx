import { useState } from "react";

import Card from "../../ui/Card";

import StatusBadge from "../../ui/StatusBadge";

const ClaimsTab = ({
  customer,
}) => {

  const [expandedPolicy,
    setExpandedPolicy] =
      useState(null);

  return (

    <div className="space-y-4">

      {customer.policies?.map(
        (policy) => (

        <Card key={policy.id}>

          {/* POLICY HEADER */}
          <div

            onClick={() =>

              setExpandedPolicy(

                expandedPolicy ===
                policy.id

                  ? null

                  : policy.id
              )
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
              text-2xl
              font-bold
            ">

              {expandedPolicy ===
              policy.id

                ? "−"

                : "+"}

            </div>

          </div>

          {/* CLAIMS */}
          {expandedPolicy ===
            policy.id && (

            <div className="
              mt-6
              space-y-4
            ">

              {policy.claims
                ?.length > 0 ? (

                policy.claims.map(
                  (claim) => (

                  <div
                    key={claim.id}

                    className="
                      border
                      rounded-xl
                      p-4
                    "
                  >

                    <div className="
                      flex
                      justify-between
                      items-start
                    ">

                      <div>

                        <h3 className="
                          text-lg
                          font-bold
                        ">
                          {claim.claim_number}
                        </h3>

                        <p className="
                          text-gray-500
                        ">
                          $
                          {claim.claim_amount}
                        </p>

                        <p className="
                          text-gray-500
                        ">
                          {claim.incident_date}
                        </p>

                      </div>

                      <StatusBadge
                        status={
                          claim.status
                        }
                      />

                    </div>

                    {claim.description && (

                      <div className="
                        mt-4
                      ">

                        <p className="
                          text-sm
                          text-gray-500
                          mb-1
                        ">
                          Description
                        </p>

                        <p>
                          {claim.description}
                        </p>

                      </div>

                    )}

                  </div>

                ))

              ) : (

                <p className="
                  text-gray-500
                ">
                  No claims found.
                </p>

              )}

            </div>

          )}

        </Card>

      ))}

    </div>
  );
};

export default ClaimsTab;