import CustomerStatCard from "./CustomerStatCard";

const CustomerStatsRow = ({
  customers,
}) => {

  // TOTAL CUSTOMERS
  const totalCustomers =
    customers?.length || 0;

  // MOCK METRICS FOR NOW
  // Later these come from dashboard APIs

  const activePolicies = 12;

  const openClaims = 4;

  const totalRevenue = 24500;

  return (

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-6
    ">

      <CustomerStatCard
        title="Total Customers"
        value={totalCustomers}
        color="blue"
      />

      <CustomerStatCard
        title="Active Policies"
        value={activePolicies}
        color="green"
      />

      <CustomerStatCard
        title="Open Claims"
        value={openClaims}
        color="yellow"
      />

      <CustomerStatCard
        title="Revenue"
        value={`$${totalRevenue}`}
        color="purple"
      />

    </div>
  );
};

export default CustomerStatsRow;