import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const DashboardLayout = ({ children }) => {

  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;