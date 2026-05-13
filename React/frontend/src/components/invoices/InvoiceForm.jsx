import { useState } from "react";

import Button from "../ui/Button";

const InvoiceForm = ({
  policyId,
  onSubmit,
}) => {

  const [formData, setFormData] =
    useState({
      policy: policyId,
      invoice_number: "",
      amount: "",
      due_date: "",
      status: "pending",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        type="text"
        name="invoice_number"
        placeholder="Invoice Number"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="number"
        name="amount"
        placeholder="Invoice Amount"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="date"
        name="due_date"
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <Button type="submit">
        Create Invoice
      </Button>

    </form>
  );
};

export default InvoiceForm;