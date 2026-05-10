import useAuth from "../../hooks/useAuth";

const Navbar = () => {

  const { logoutUser } = useAuth();

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h2 className="text-2xl font-semibold text-slate-700">
        Insurance Management System
      </h2>

      <button
        onClick={logoutUser}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
};

export default Navbar;