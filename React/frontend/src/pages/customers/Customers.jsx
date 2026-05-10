import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/ui/Card";

import Table from "../../components/ui/Table";

import Loader from "../../components/ui/Loader";

import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

import { useState } from "react";

import CustomerForm from "../../components/forms/CustomerForm";

import useCustomers from "../../hooks/useCustomers";

import SearchInput from "../../components/ui/SearchInput";

import EmptyState from "../../components/ui/EmptyState";

const Customers = () => {

  const {
  customers,
  loading,
  createCustomer,
  deleteCustomer,
  updateCustomer,
  search,
  handleSearch,
} = useCustomers();

  const columns = [
  {
    key: "first_name",
    title: "First Name",
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

  // ACTION COLUMN
  {
    key: "actions",
    title: "Actions",

    render: (customer) => (
      <div className="flex gap-2">

        {/* EDIT BUTTON */}
        <Button
          variant="warning"
          onClick={() => handleEdit(customer)}
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


const [selectedCustomer, setSelectedCustomer] =
  useState(null);

const [isEditOpen, setIsEditOpen] =
  useState(false);

  const handleEdit = (customer) => {

  setSelectedCustomer(customer);

  setIsEditOpen(true);
};


  return (
    <DashboardLayout>

      <div className="space-y-6">

        <Card>

          <h1 className="text-2xl font-bold mb-4">
            Create Customer
          </h1>

          <CustomerForm
            onSubmit={createCustomer}
          />

        </Card>

        <Card>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">

            <h1 className="text-2xl font-bold">
              Customers
            </h1>
            <SearchInput
            value={search}
            onChange={(e) =>
                handleSearch(e.target.value)
            }
            placeholder="Search customers..."
            />
            <Button>
              Export
            </Button>

          </div>

          {loading ? (

            <Loader />

          ) : (

            <div className="space-y-4">

             {
                customers.length > 0 ? (

                    <Table
                    columns={columns}
                    data={customers}
                    />

                ) : (

                    <EmptyState
                    title="No Customers Found"
                    message="Try adjusting your search."
                    />

                )
                }

              <Modal
                isOpen={isEditOpen}
                onClose={() =>
                    setIsEditOpen(false)
                }
                title="Edit Customer"
                >

                <CustomerForm
                    defaultValues={
                    selectedCustomer
                    }

                    onSubmit={(data) => {

                    updateCustomer(
                        selectedCustomer.id,
                        data
                    );

                    setIsEditOpen(false);
                    }}
                />

            </Modal>

            </div>

          )}

        </Card>

      </div>

    </DashboardLayout>
  );
};

export default Customers;