import Card from "../../ui/Card";

import Button from "../../ui/Button";

const CustomerInfoCard = ({
  customer,
  onAddPolicy,
}) => {

  return (

    <Card>

      <div className="
        flex
        flex-col
        lg:flex-row
        lg:justify-between
        lg:items-start
        gap-6
      ">

        {/* CUSTOMER INFO */}
        <div>

          <h1 className="
            text-3xl
            font-bold
            mb-2
          ">

            {customer.first_name}
            {" "}
            {customer.last_name}

          </h1>

          <div className="
            space-y-2
            text-gray-500
          ">

            <p>
              {customer.email}
            </p>

            <p>
              {customer.phone_number}
            </p>

            <p>
              {customer.address}
            </p>

          </div>

        </div>

        {/* ACTIONS */}
        <div className="
          flex
          gap-3
        ">

          <Button
            onClick={onAddPolicy}
          >
            Add Policy
          </Button>

        </div>

      </div>

    </Card>
  );
};

export default CustomerInfoCard;