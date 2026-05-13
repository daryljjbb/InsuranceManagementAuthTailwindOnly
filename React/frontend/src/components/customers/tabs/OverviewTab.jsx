import CustomerStatsCard from "../cards/CustomerStatsCard";

const OverviewTab = ({
  customer,
}) => {

  return (

    <div className="space-y-6">

      <CustomerStatsCard
        customer={customer}
      />

    </div>
  );
};

export default OverviewTab;