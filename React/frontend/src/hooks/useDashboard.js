import { useEffect, useState } from "react";

import api from "../api/axios";

const useDashboard = () => {

  // METRICS
  const [metrics, setMetrics] =
    useState(null);

  // ANALYTICS
  const [revenueData,
    setRevenueData] =
      useState([]);

  const [claimsData,
    setClaimsData] =
      useState([]);

  const [invoiceData,
    setInvoiceData] =
      useState([]);

  // ACTIVITY LOGS
  const [logs, setLogs] =
    useState([]);

  // LOADING
  const [loading, setLoading] =
    useState(true);

  // FETCH METRICS
  const fetchMetrics =
    async () => {

    try {

      const response =
        await api.get(
          "dashboard/metrics/"
        );

      setMetrics(
        response.data
      );

    } catch (error) {

      console.error(
        "METRICS ERROR:",
        error
      );
    }
  };

  // FETCH REVENUE
  const fetchRevenue =
    async () => {

    try {

      const response =
        await api.get(
          "dashboard/revenue/"
        );

      setRevenueData(
        response.data
      );

    } catch (error) {

      console.error(
        "REVENUE ERROR:",
        error
      );
    }
  };

  // FETCH CLAIMS
  const fetchClaimsAnalytics =
    async () => {

    try {

      const response =
        await api.get(
          "dashboard/claims/"
        );

      setClaimsData(
        response.data
      );

    } catch (error) {

      console.error(
        "CLAIMS ERROR:",
        error
      );
    }
  };

  // FETCH INVOICES
  const fetchInvoiceAnalytics =
    async () => {

    try {

      const response =
        await api.get(
          "dashboard/invoices/"
        );

      setInvoiceData(
        response.data
      );

    } catch (error) {

      console.error(
        "INVOICE ERROR:",
        error
      );
    }
  };

  // FETCH TIMELINE
  const fetchLogs =
    async () => {

    try {

      const response =
        await api.get(
          "audit/timeline/"
        );

      setLogs(
        response.data
      );

    } catch (error) {

      console.error(
        "TIMELINE ERROR:",
        error
      );
    }
  };

  // LOAD DASHBOARD
  const loadDashboard =
    async () => {

    try {

      setLoading(true);

      await Promise.all([

        fetchMetrics(),

        fetchRevenue(),

        fetchClaimsAnalytics(),

        fetchInvoiceAnalytics(),

        fetchLogs(),
      ]);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    loadDashboard();

  }, []);

  return {

    metrics,

    revenueData,

    claimsData,

    invoiceData,

    logs,

    loading,

    refreshDashboard:
      loadDashboard,
  };
};

export default useDashboard;