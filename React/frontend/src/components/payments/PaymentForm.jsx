import { useState } from "react";

import Button from "../ui/Button";

const PaymentForm = ({
  onSubmit,
}) => {

  const [formData,
    setFormData] =
      useState({

        amount: "",

        payment_method:
          "card",

        reference_number:
          "",
      });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
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

      {/* AMOUNT */}
      <div>

        <label
          className="
            block
            mb-1
            text-sm
            font-medium
          "
        >
          Amount
        </label>

        <input
          type="number"
          step="0.01"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="
            w-full
            border
            rounded-xl
            p-3
          "
          required
        />

      </div>

      {/* PAYMENT METHOD */}
      <div>

        <label
          className="
            block
            mb-1
            text-sm
            font-medium
          "
        >
          Payment Method
        </label>

        <select
          name="payment_method"
          value={
            formData.payment_method
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-xl
            p-3
          "
        >

          <option value="card">
            Card
          </option>

          <option value="cash">
            Cash
          </option>

          <option value="bank">
            Bank Transfer
          </option>

        </select>

      </div>

      {/* REFERENCE */}
      <div>

        <label
          className="
            block
            mb-1
            text-sm
            font-medium
          "
        >
          Reference Number
        </label>

        <input
          type="text"
          name="reference_number"
          value={
            formData.reference_number
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-xl
            p-3
          "
        />

      </div>

      <Button type="submit">

        Submit Payment

      </Button>

    </form>
  );
};

export default PaymentForm;