import useAuth from "./useAuth";

const usePermissions = () => {

  const { user } = useAuth();

   console.log(user);

  const isAdmin =
    user?.role === "admin";

  const isAgent =
    user?.role === "agent";

  const isCustomer =
    user?.role === "customer";

  return {
    isAdmin,
    isAgent,
    isCustomer,
  };
};

export default usePermissions;