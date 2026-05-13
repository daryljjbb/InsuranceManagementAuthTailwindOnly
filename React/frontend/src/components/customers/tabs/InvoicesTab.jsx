import { useState } from "react";

import Card from "../../ui/Card";

import StatusBadge from "../../ui/StatusBadge";

const InvoicesTab = ({
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

          {/* INVOICES */}
          {expandedPolicy ===
            policy.id && (

            <div className="
              mt-6
              space-y-4
            ">

              {policy.invoices
                ?.length > 0 ? (

                policy.invoices.map(
                  (invoice) => (

                  <div
                    key={invoice.id}

                    className="
                      border
                      rounded-xl
                      p-4
                    "
                  >

                    <div className="
                      flex
                      justify-between
                      items-center
                    ">

                      <div>

                        <h3 className="
                          text-lg
                          font-bold
                        ">
                          Invoice #
                          {invoice.id}
                        </h3>

                        <p className="
                          text-gray-500
                        ">
                          $
                          {invoice.amount}
                        </p>

                        {invoice.due_date && (

                          <p className="
                            text-gray-500
                          ">
                            Due:
                            {" "}
                            {invoice.due_date}
                          </p>

                        )}

                      </div>

                      <StatusBadge
                        status={
                          invoice.status
                        }
                      />

                    </div>

                    {/* FUTURE PAYMENTS */}
                    <div className="
                      mt-6
                      border-t
                      pt-4
                    ">

                      <h4 className="
                        font-bold
                        mb-2
                      ">
                        Payments
                      </h4>

                      <p className="
                        text-gray-500
                        text-sm
                      ">
                        Payment history
                        coming soon.
                      </p>

                    </div>

                  </div>

                ))

              ) : (

                <p className="
                  text-gray-500
                ">
                  No invoices found.
                </p>

              )}

            </div>

          )}

        </Card>

      ))}

    </div>
  );
};

export default InvoicesTab;