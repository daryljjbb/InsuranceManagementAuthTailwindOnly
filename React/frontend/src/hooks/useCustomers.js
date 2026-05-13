import { useEffect, useState } from "react";

import useAxios from "./useAxios";

import customerApi from "../api/customerApi";

import toast from "react-hot-toast";

import debounce from "lodash/debounce";

const useCustomers = () => {

  const api = useAxios();

  const customerService =
    customerApi(api);

  const [customers, setCustomers] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

   const [search, setSearch] =
  useState("");


  const [count, setCount] =
  useState(0);

const [nextPage, setNextPage] =
  useState(null);

const [previousPage, setPreviousPage] =
  useState(null);

const [currentPage, setCurrentPage] =
  useState(1);

  // FETCH CUSTOMERS
  const fetchCustomers = async (
    searchTerm = "",
    page = 1
    ) => {

    try {

      setLoading(true);

      const response =
        await customerService.getCustomers(
            searchTerm,
            page
        );

      setCustomers(response.data.results);

      setCount(response.data.count);

      setNextPage(response.data.next);

      setPreviousPage(
        response.data.previous
        );

      setCurrentPage(page);

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to load customers"
      );

    } finally {

      setLoading(false);
    }
  };

  const debouncedSearch =
  debounce((value) => {

    fetchCustomers(value);

  }, 500);

  const handleSearch = (value) => {

  setSearch(value);

  debouncedSearch(value);
};

  // CREATE CUSTOMER
  const createCustomer = async (data) => {

    try {

      await customerService.createCustomer(
        data
      );

      toast.success(
        "Customer created"
      );

      fetchCustomers();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to create customer"
      );
    }
  };

  // DELETE CUSTOMER
  const deleteCustomer = async (id) => {

    try {

      await customerService.deleteCustomer(id);

      toast.success(
        "Customer deleted"
      );

      fetchCustomers();

    } catch (error) {

      console.error(error);

      toast.error(
        "Delete failed"
      );
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);


  const updateCustomer = async (
  id,
  data
) => {

  try {

    await customerService.updateCustomer(
      id,
      data
    );

    toast.success(
      "Customer updated"
    );

    fetchCustomers();

  } catch (error) {

    console.error(error);

    toast.error(
      "Update failed"
    );
  }
};

  return {
    customers,
    loading,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    refreshCustomers:
    count,
    nextPage,
    previousPage,
    currentPage,
    fetchCustomers,
    search,
    handleSearch,
  };
};

export default useCustomers;