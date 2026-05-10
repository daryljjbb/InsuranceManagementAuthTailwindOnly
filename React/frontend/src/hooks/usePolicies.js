const usePolicies = () => {
  return useCrud(() =>
    api.get("policies/")
  );
};