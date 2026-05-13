import CustomerMetricCard from "./CustomerMetricCard";

const CustomerStatsCard = ({
  customer,
}) => {

  // TOTAL CLAIMS
  const totalClaims =
    customer.policies?.reduce(
      (total, policy) =>

        total +
        (policy.claims?.length || 0),

      0
    );

  // TOTAL INVOICES
  const totalInvoices =
    customer.policies?.reduce(
      (total, policy) =>

        total +
        (policy.invoices?.length || 0),

      0
    );

  // TOTAL INVOICE AMOUNT
  const totalInvoiceAmount =
    customer.policies?.reduce(
      (total, policy) =>

        total +

        policy.invoices?.reduce(
          (invoiceTotal, invoice) =>

            invoiceTotal +
            Number(invoice.amount || 0),

          0
        ),

      0
    );

  return (

    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
    ">

      <CustomerMetricCard
        title="Policies"
        value={
          customer.policies?.length || 0
        }
        color="blue"
      />

      <CustomerMetricCard
        title="Claims"
        value={totalClaims}
        color="green"
      />

      <CustomerMetricCard
        title="Invoices"
        value={totalInvoices}
        color="yellow"
      />

      <CustomerMetricCard
        title="Invoice Revenue"
        value={`$${totalInvoiceAmount.toFixed(2)}`}
        color="purple"
      />

    </div>
  );
};

export default CustomerStatsCard;