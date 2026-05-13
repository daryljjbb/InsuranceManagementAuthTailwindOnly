import StatusBadge from "../../ui/StatusBadge";

const InvoiceCard = ({
  invoice,
}) => {

  return (

    <div className="
      border
      rounded-xl
      p-4
    ">

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
          status={invoice.status}
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
          Payment history coming soon.
        </p>

      </div>

    </div>
  );
};

export default InvoiceCard;