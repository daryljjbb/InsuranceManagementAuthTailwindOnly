import DashboardLayout from "../../layouts/DashboardLayout";
import Card from "../../components/ui/Card";

const Dashboard = () => {

  return (
    <DashboardLayout>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Card>
        <h2 className="text-xl font-bold">
          Customers
        </h2>

        <p className="text-3xl font-bold">
          120
        </p>
      </Card>

        <Card>
          <h2 className="text-xl font-bold">
            Policies
          </h2>

          <p className="text-3xl font-bold">
            10
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-bold">
            Claims
          </h2>

          <p className="text-3xl font-bold">
            5
          </p>
        </Card>
      </div>

    </DashboardLayout>
  );
};

export default Dashboard;