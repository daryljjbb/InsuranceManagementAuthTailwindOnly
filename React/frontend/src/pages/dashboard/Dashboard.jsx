import DashboardLayout from "../../layouts/DashboardLayout";

import MetricCard
from "../../components/dashboard/MetricCard";

import RevenueChart
from "../../components/dashboard/RevenueChart";

import ClaimsChart
from "../../components/dashboard/ClaimsChart";

import InvoicePieChart
from "../../components/dashboard/InvoicePieChart";

import ActivityTimeline
from "../../components/dashboard/ActivityTimeline";

import Loader
from "../../components/ui/Loader";

import useDashboard from "../../hooks/useDashboard";

import {

  Users,

  ShieldCheck,

  FileWarning,

  DollarSign,

} from "lucide-react";

const Dashboard = () => {

  const {

    metrics,

    revenueData,

    claimsData,

    invoiceData,

    logs,

    loading,

  } = useDashboard();

  if (loading) {

    return (

      <DashboardLayout>

        <Loader />

      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1
            className="
              text-4xl
              font-bold
            "
          >
            Insurance Dashboard
          </h1>

          <p className="text-gray-500">

            Business overview
            and analytics

          </p>

        </div>

        {/* KPI CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >

          <MetricCard
            title="Customers"
            value={
              metrics?.customers || 0
            }
            icon={<Users />}
            color="bg-blue-500"
          />

          <MetricCard
            title="Policies"
            value={
              metrics?.policies || 0
            }
            icon={<ShieldCheck />}
            color="bg-green-500"
          />

          <MetricCard
            title="Claims"
            value={
              metrics?.claims || 0
            }
            icon={<FileWarning />}
            color="bg-yellow-500"
          />

          <MetricCard
            title="Revenue"
            value={
              metrics?.revenue || 0
            }
            icon={<DollarSign />}
            color="bg-purple-500"
          />

        </div>

        {/* REVENUE */}
        <RevenueChart
          data={revenueData}
        />

        {/* ANALYTICS */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
          "
        >

          <ClaimsChart
            data={claimsData}
          />

          <InvoicePieChart
            data={invoiceData}
          />

        </div>

        {/* TIMELINE */}
        <ActivityTimeline
          logs={logs}
        />

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;