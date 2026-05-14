import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import Loader from "../../components/ui/Loader";

import Card from "../../components/ui/Card";

import Button from "../../components/ui/Button";

import AddPolicyModal from "../../components/customers/modals/AddPolicyModal";

import AddClaimModal from "../../components/customers/modals/AddClaimModal";

import AddInvoiceModal from "../../components/customers/modals/AddInvoiceModal";

import OverviewTab from "../../components/customers/tabs/OverviewTab";

import PoliciesTab from "../../components/customers/tabs/PoliciesTab";

import ClaimsTab from "../../components/customers/tabs/ClaimsTab";

import InvoicesTab from "../../components/customers/tabs/InvoicesTab";

import CustomerInfoCard from "../../components/customers/cards/CustomerInfoCard";

import api from "../../api/axios";

const CustomerDetail = () => {

  const { id } = useParams();

  const [customer, setCustomer] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [activeTab, setActiveTab] =
    useState("overview");

  // MODALS
  const [isPolicyModalOpen,
    setIsPolicyModalOpen] =
      useState(false);

  const [isClaimModalOpen,
    setIsClaimModalOpen] =
      useState(false);

  const [isInvoiceModalOpen,
    setIsInvoiceModalOpen] =
      useState(false);

  const [selectedPolicy,
    setSelectedPolicy] =
      useState(null);

  // FETCH CUSTOMER
  const fetchCustomer =
    async () => {

      try {

        const response =
          await api.get(
            `customers/${id}/`
          );

        setCustomer(
          response.data
        );

      } catch (error) {

        console.error(
          "CUSTOMER FETCH ERROR:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchCustomer();

  }, [id]);

  // CLOSE MODALS
  const closeModal = () => {

    setSelectedPolicy(null);

    setIsPolicyModalOpen(false);

    setIsClaimModalOpen(false);

    setIsInvoiceModalOpen(false);
  };

  // CREATE POLICY
  const createPolicy =
    async (formData) => {

      try {

        await api.post(
          "policies/",
          {
            ...formData,
            customer: customer.id,
          }
        );

        closeModal();

        fetchCustomer();

      } catch (error) {

        console.error(
          "CREATE POLICY ERROR:",
          error.response?.data ||
          error.message
        );
      }
    };

  // CREATE CLAIM
  const createClaim =
    async (formData) => {

      try {

        await api.post(
          "claims/",
          {
            policy:
              selectedPolicy.id,

            claim_amount:
              formData.claim_amount,

            description:
              formData.description,

            incident_date:
              formData.incident_date,

            status:
              formData.status,
          }
        );

        closeModal();

        fetchCustomer();

      } catch (error) {

        console.error(
          "CREATE CLAIM ERROR:",
          error.response?.data ||
          error.message
        );
      }
    };

  // CREATE INVOICE
  const createInvoice =
    async (formData) => {

      try {

        await api.post(
          "invoices/",
          {
            ...formData,
            policy:
              selectedPolicy.id,
          }
        );

        closeModal();

        fetchCustomer();

      } catch (error) {

        console.error(
          "CREATE INVOICE ERROR:",
          error.response?.data ||
          error.message
        );
      }
    };

  // FLATTEN CLAIMS
  const allClaims =
    customer?.policies?.flatMap(
      (policy) =>
        policy.claims?.map(
          (claim) => ({
            ...claim,
            policy_number:
              policy.policy_number,
          })
        ) || []
    ) || [];

  // FLATTEN INVOICES
  const allInvoices =
    customer?.policies?.flatMap(
      (policy) =>
        policy.invoices?.map(
          (invoice) => ({
            ...invoice,
            policy_number:
              policy.policy_number,
          })
        ) || []
    ) || [];

  if (loading) {

    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (!customer) {

    return (
      <DashboardLayout>
        <p>
          Customer not found.
        </p>
      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      <div className="space-y-6">

        {/* CUSTOMER HEADER */}
        
        <CustomerInfoCard
            customer={customer}
            onAddPolicy={() =>
                setIsPolicyModalOpen(true)
            }
         />

        {/* TABS */}
        <div className="
          border-b
          border-gray-200
        ">

          <nav className="
            flex
            gap-6
          ">

            {[
              "overview",
              "policies",
              "claims",
              "invoices",
            ].map((tab) => (

              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`
                  pb-3
                  capitalize
                  font-medium
                  border-b-2
                  transition-all

                  ${
                    activeTab === tab
                      ? `
                        border-blue-600
                        text-blue-600
                      `
                      : `
                        border-transparent
                        text-gray-500
                        hover:text-gray-700
                      `
                  }
                `}
              >
                {tab}
              </button>

            ))}

          </nav>

        </div>

        {/* TAB CONTENT */}
        {activeTab === "overview" && (
          <OverviewTab
            customer={customer}
            claims={allClaims}
            invoices={allInvoices}
          />
        )}

        {activeTab === "policies" && (
          <PoliciesTab
            customer={customer}
          />
        )}

        {activeTab === "claims" && (
          <ClaimsTab customer={customer} />
        )}

        {activeTab === "invoices" && (
          <InvoicesTab
            customer={customer}
            refreshCustomer={fetchCustomer}
            />
        )}

      </div>

      <AddPolicyModal
        isOpen={isPolicyModalOpen}
        onClose={closeModal}
        onSubmit={createPolicy}
    />

    <AddClaimModal
    isOpen={isClaimModalOpen}
    onClose={closeModal}
    onSubmit={createClaim}
    selectedPolicy={selectedPolicy}
    />

    <AddInvoiceModal
    isOpen={isInvoiceModalOpen}
    onClose={closeModal}
    onSubmit={createInvoice}
    selectedPolicy={selectedPolicy}
    />

    </DashboardLayout>
  );
};

export default CustomerDetail;