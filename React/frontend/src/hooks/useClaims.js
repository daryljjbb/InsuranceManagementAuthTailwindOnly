import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import claimService from "../api/claimApi";

const useClaims = () => {

  const [claims, setClaims] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchClaims = async () => {

    try {

      const response =
        await claimService.getClaims();

      setClaims(
        response.data.results
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to load claims"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchClaims();

  }, []);

  return {
    claims,
    loading,
  };
};

export default useClaims;