import DashboardLayout from "../../layouts/DashboardLayout";

const Dashboard = () => {

  return (
    <DashboardLayout>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            Customers
          </h2>

          <p className="text-3xl font-bold text-blue-600">
            0
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            Policies
          </h2>

          <p className="text-3xl font-bold text-green-600">
            0
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            Claims
          </h2>

          <p className="text-3xl font-bold text-red-600">
            0
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;