import {
  useState,
} from "react";

import Card
from "../../ui/Card";

import Button
from "../../ui/Button";

import Modal
from "../../ui/Modal";

import StatusBadge
from "../../ui/StatusBadge";

import InvoiceForm
from "../../invoices/InvoiceForm";

import PaymentForm
from "../../payments/PaymentForm";

import PaymentHistory
from "../../payments/PaymentHistory";

import api
from "../../../api/axios";

import toast from "react-hot-toast";

const InvoicesTab = ({
  customer,
  refreshCustomer,
}) => {

  // EXPANDED POLICY
  const [expandedPolicy,
    setExpandedPolicy] =
      useState(null);

  // MODALS
  const [isInvoiceModalOpen,
    setIsInvoiceModalOpen] =
      useState(false);

  const [isPaymentModalOpen,
    setIsPaymentModalOpen] =
      useState(false);

  // SELECTED ITEMS
  const [selectedPolicy,
    setSelectedPolicy] =
      useState(null);

  const [selectedInvoice,
    setSelectedInvoice] =
      useState(null);

  // CLOSE MODALS
  const closeModal = () => {

    setSelectedPolicy(null);

    setSelectedInvoice(null);

    setIsInvoiceModalOpen(false);

    setIsPaymentModalOpen(false);
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

      refreshCustomer();

    } catch (error) {

      console.error(
        "CREATE INVOICE ERROR:",
        error.response?.data ||
        error.message
      );
    }
  };

  // CREATE PAYMENT
  const createPayment =
  async (formData) => {

  try {

    await api.post(
      "payments/",
      {

        ...formData,

        invoice:
          selectedInvoice.id,
      }
    );

    // REFRESH CUSTOMER DATA
    await refreshCustomer();

    // CLOSE MODAL
    closeModal();

  } catch (error) {

    console.error(
      "CREATE PAYMENT ERROR:",
      error.response?.data ||
      error.message
    );
    toast.error(
        error.response?.data?.amount?.[0]
    );
  }
};

  // CALCULATE TOTAL PAYMENTS
  const calculatePaid =
    (payments = []) => {

    return payments.reduce(
      (total, payment) => {

        return (
          total +
          parseFloat(
            payment.amount || 0
          )
        );

      },
      0
    );
  };

  return (

    <div className="space-y-6">

      {customer.policies?.map(
        (policy) => {

        const isExpanded =
          expandedPolicy ===
          policy.id;

        return (

          <Card key={policy.id}>

            {/* POLICY HEADER */}
            <div
              onClick={() =>

                setExpandedPolicy(

                  isExpanded
                    ? null
                    : policy.id
                )
              }

              className="
                flex
                justify-between
                items-center
                cursor-pointer
              "
            >

              <div>

                <h2
                  className="
                    text-xl
                    font-bold
                  "
                >

                  {
                    policy.policy_number
                  }

                </h2>

                <p className="text-gray-500">

                  {
                    policy.policy_type
                  }

                </p>

              </div>

              <div
                className="
                  text-2xl
                  font-bold
                "
              >

                {isExpanded
                  ? "−"
                  : "+"}

              </div>

            </div>

            {/* EXPANDED CONTENT */}
            {isExpanded && (

              <div className="mt-6">

                {/* HEADER */}
                <div
                  className="
                    flex
                    justify-between
                    items-center
                    mb-6
                  "
                >

                  <h3
                    className="
                      text-lg
                      font-bold
                    "
                  >
                    Invoices
                  </h3>

                  <Button
                    variant="warning"

                    onClick={() => {

                      setSelectedPolicy(
                        policy
                      );

                      setIsInvoiceModalOpen(
                        true
                      );
                    }}
                  >
                    Add Invoice
                  </Button>

                </div>

                {/* INVOICES */}
                <div className="space-y-4">

                  {policy.invoices
                    ?.length > 0 ? (

                    policy.invoices.map(
                      (invoice) => {

                      const totalPaid =
                        calculatePaid(
                          invoice.payments
                        );

                      const outstanding =
                        parseFloat(
                          invoice.amount
                        ) - totalPaid;

                      return (

                        <div
                          key={invoice.id}

                          className="
                            border
                            rounded-2xl
                            p-6
                            space-y-4
                          "
                        >

                          {/* INVOICE TOP */}
                          <div
                            className="
                              flex
                              justify-between
                              items-start
                            "
                          >

                            <div
                              className="
                                space-y-2
                              "
                            >

                              <h4
                                className="
                                  text-lg
                                  font-bold
                                "
                              >

                                Invoice #
                                {invoice.id}

                              </h4>

                              <p>

                                Amount:
                                {" "}
                                <span className="font-semibold">

                                  $
                                  {invoice.amount}

                                </span>

                              </p>

                              <p>

                                Paid:
                                {" "}
                                <span
                                  className="
                                    text-green-600
                                    font-semibold
                                  "
                                >

                                  $
                                  {totalPaid.toFixed(2)}

                                </span>

                              </p>

                              <p>

                                Outstanding:
                                {" "}
                                <span
                                  className="
                                    text-red-600
                                    font-semibold
                                  "
                                >

                                  $
                                  {outstanding.toFixed(2)}

                                </span>

                              </p>

                            </div>

                            <StatusBadge
                              status={
                                invoice.status
                              }
                            />

                          </div>

                          {/* PAYMENT ACTION */}
                          <div>

                            {outstanding > 0 && (

                            <Button
                                variant="success"
                                onClick={() => {

                                setSelectedInvoice(
                                    invoice
                                );

                                setIsPaymentModalOpen(
                                    true
                                );
                                }}
                            >
                                Add Payment
                            </Button>

                            )}

                          </div>

                          {/* PAYMENT HISTORY */}
                          <div>

                            <h4
                              className="
                                text-md
                                font-bold
                                mb-3
                              "
                            >
                              Payment History
                            </h4>

                            <PaymentHistory
                              payments={
                                invoice.payments || []
                              }
                            />

                          </div>

                        </div>
                      );
                    })

                  ) : (

                    <p className="text-gray-500">

                      No invoices found.

                    </p>

                  )}

                </div>

              </div>

            )}

          </Card>
        );
      })}

      {/* CREATE INVOICE MODAL */}
      <Modal
        isOpen={
          isInvoiceModalOpen
        }

        onClose={closeModal}

        title="Create Invoice"
      >

        <InvoiceForm
          onSubmit={createInvoice}
        />

      </Modal>

      {/* CREATE PAYMENT MODAL */}
      <Modal
        isOpen={
          isPaymentModalOpen
        }

        onClose={closeModal}

        title="Add Payment"
      >

        <PaymentForm
          onSubmit={createPayment}
        />

      </Modal>

    </div>
  );
};

export default InvoicesTab;