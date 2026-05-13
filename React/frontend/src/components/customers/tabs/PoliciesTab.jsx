import PolicyAccordion from "../accordions/PolicyAccordion";

const PoliciesTab = ({
  customer,
}) => {

  return (

    <div className="space-y-4">

      {customer.policies?.length > 0 ? (

        customer.policies.map(
          (policy) => (

          <PolicyAccordion
            key={policy.id}
            policy={policy}
          />

        ))

      ) : (

        <p className="
          text-gray-500
        ">
          No policies found.
        </p>

      )}

    </div>
  );
};

export default PoliciesTab;