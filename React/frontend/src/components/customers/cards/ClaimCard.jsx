import StatusBadge from "../../ui/StatusBadge";

const ClaimCard = ({
  claim,
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
          status={claim.status}
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
  );
};

export default ClaimCard;