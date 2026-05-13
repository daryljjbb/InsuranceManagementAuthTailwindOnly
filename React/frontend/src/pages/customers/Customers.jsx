import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import DataTable from "../../components/ui/DataTable";

import CustomerForm from "../../components/forms/CustomerForm";

import useCustomers from "../../hooks/useCustomers";

import CustomerStatsRow from "../../components/customers/stats/CustomerStatsRow";

import { Link } from "react-router-dom";

const Customers = () => {

  // CUSTOMERS HOOK
  const {
    customers,
    loading,
    createCustomer,
    deleteCustomer,
    updateCustomer,

    // SEARCH + PAGINATION
    search,
    handleSearch,

    currentPage,
    nextPage,
    previousPage,

    fetchCustomers,
  } = useCustomers();

  // EDIT MODAL STATE
  const [selectedCustomer, setSelectedCustomer] =
    useState(null);

  const [isEditOpen, setIsEditOpen] =
    useState(false);

const [isCreateOpen,
  setIsCreateOpen] =
    useState(false);

  // OPEN EDIT MODAL
  const handleEdit = (customer) => {

    setSelectedCustomer(customer);

    setIsEditOpen(true);
  };

  
// CLOSE ALL MODALS
const closeModal = () => {

  setSelectedCustomer(null);

  setIsEditOpen(false);

  setIsCreateOpen(false);
};


  // UPDATE CUSTOMER
  const handleUpdateCustomer = (data) => {

    if (!selectedCustomer) return;

    updateCustomer(
      selectedCustomer.id,
      data
    );

    closeModal();
  };

  // TABLE COLUMNS
  const columns = [

    {
        key: "first_name",
        title: "First Name",

        render: (customer) => (

            <Link
            to={`/customers/${customer.id}`}
            className="
                text-blue-600
                hover:underline
                font-medium
            "
            >
            {customer.first_name}
            </Link>
        ),
    },
    {
      key: "last_name",
      title: "Last Name",
    },

    {
      key: "email",
      title: "Email",
    },

    {
      key: "phone_number",
      title: "Phone",
    },

    {
      key: "actions",
      title: "Actions",

      render: (customer) => (

        <div className="flex gap-2">

          {/* EDIT BUTTON */}
          <Button
            variant="warning"
            onClick={() =>
              handleEdit(customer)
            }
          >
            Edit
          </Button>

          {/* DELETE BUTTON */}
          <Button
            variant="danger"
            onClick={() =>
              deleteCustomer(customer.id)
            }
          >
            Delete
          </Button>

        </div>
      ),
    },
  ];

  return (

    <DashboardLayout>

      <div className="space-y-6">

        {/* CREATE CUSTOMER */}
        
        {/* PAGE HEADER */}
            <Card>

            <div className="
                flex
                flex-col
                lg:flex-row
                lg:justify-between
                lg:items-center
                gap-4
            ">

                {/* LEFT */}
                <div>

                <h1 className="
                    text-3xl
                    font-bold
                ">
                    Customers
                </h1>

                <p className="
                    text-gray-500
                    mt-1
                ">
                    Manage customer accounts,
                    policies, claims, and billing.
                </p>

                </div>

                {/* RIGHT */}
                <div className="
                flex
                gap-3
                ">

                <Button
                    onClick={() =>
                    setIsCreateOpen(true)
                    }
                >
                    Add Customer
                </Button>

                <Button variant="secondary">
                    Export
                </Button>

                </div>

            </div>

            </Card>

        <CustomerStatsRow
        customers={customers}
        />

        {/* CUSTOMERS DATATABLE */}
        <DataTable
          title="Customers"

          columns={columns}

          data={customers}

          loading={loading}

          // SEARCH
          search={search}

          onSearch={handleSearch}

          // PAGINATION
          currentPage={currentPage}

          nextPage={nextPage}

          previousPage={previousPage}

          onPageChange={(page) =>
            fetchCustomers(search, page)
          }

          // HEADER ACTIONS
          actions={
            <div className="flex gap-2">

                <Button
                    onClick={() =>
                    setIsCreateOpen(true)
                    }
                >
                    Add Customer
                </Button>

                <Button>
                    Export
                </Button>

            </div>
          }
        />

        {/* EDIT MODAL */}
        <Modal
          isOpen={isEditOpen}
          onClose={closeModal}
          title="Edit Customer"
        >

          <CustomerForm
            defaultValues={
              selectedCustomer || {}
            }

            onSubmit={
              handleUpdateCustomer
            }
          />

        </Modal>

        <Modal
        isOpen={isCreateOpen}
        onClose={closeModal}
        title="Create Customer"
        >

        <CustomerForm
            onSubmit={(data) => {

            createCustomer(data);

            closeModal();
            }}
        />

        </Modal>

      </div>

    </DashboardLayout>
  );
};

export default Customers;