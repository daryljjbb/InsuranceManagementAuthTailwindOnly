import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Customers",
      path: "/customers",
    },
    {
      name: "Policies",
      path: "/policies",
    },
    {
      name: "Claims",
      path: "/claims",
    },
    {
      name: "Payments",
      path: "/payments",
    },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">

      <h1 className="text-2xl font-bold mb-10 text-blue-400">
        Insurance System
      </h1>

      <nav className="space-y-2">

        {navItems.map((item) => {

          const isActive =
            location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                block px-4 py-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}

      </nav>
    </div>
  );
};

export default Sidebar;