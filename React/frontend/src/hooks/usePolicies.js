import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import policyService from "../api/policyApi";

const usePolicies = () => {

  const [policies, setPolicies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH
  const fetchPolicies = async () => {

    try {

      const response =
        await policyService.getPolicies();

      setPolicies(
        response.data.results
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to load policies"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchPolicies();

  }, []);

  // CREATE
  const createPolicy = async (data) => {

    try {

      await policyService.createPolicy(data);

      toast.success(
        "Policy created"
      );

      fetchPolicies();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to create policy"
      );
    }
  };

  return {
    policies,
    loading,
    createPolicy,
  };
};

export default usePolicies;