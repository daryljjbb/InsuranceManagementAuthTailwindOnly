import StatusBadge
from "../ui/StatusBadge";

const PaymentHistory = ({
  payments = [],
}) => {

  if (payments.length === 0) {

    return (

      <p className="text-gray-500">

        No payments yet.

      </p>
    );
  }

  return (

    <div className="space-y-3">

      {payments.map((payment) => (

        <div
          key={payment.id}
          className="
            border
            rounded-xl
            p-4
            flex
            justify-between
            items-center
          "
        >

          <div>

            <p className="font-semibold">

              ${payment.amount}

            </p>

            <p
              className="
                text-sm
                text-gray-500
              "
            >

              {
                payment.payment_method
              }

            </p>

            <p
              className="
                text-xs
                text-gray-400
              "
            >

              {
                payment.reference_number
              }

            </p>

          </div>

          <StatusBadge status="paid" />

        </div>

      ))}

    </div>
  );
};

export default PaymentHistory;