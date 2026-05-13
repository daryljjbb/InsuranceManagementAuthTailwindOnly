import { useState } from "react";

import Button from "../ui/Button";

const PolicyForm = ({
  customerId,
  onSubmit,
}) => {

  const [formData, setFormData] =
    useState({

      customer: customerId,

      policy_number: "",

      policy_type: "",

      premium: "",

      start_date: "",

      end_date: "",

      status: "active",
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

      {/* POLICY NUMBER */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Policy Number
        </label>

        <input
          type="text"
          name="policy_number"
          value={
            formData.policy_number
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />

      </div>

      {/* POLICY TYPE */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Policy Type
        </label>

        <select
          name="policy_type"
          value={
            formData.policy_type
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        >

          <option value="">
            Select Type
          </option>

          <option value="auto">
            Auto
            </option>

            <option value="home">
            Home
            </option>

            <option value="life">
            Life
            </option>

            <option value="health">
            Health
            </option>

        </select>

      </div>

      {/* PREMIUM */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Premium Amount
        </label>

        <input
          type="number"
          name="premium"
          value={
            formData.premium
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />

      </div>

      {/* START DATE */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Start Date
        </label>

        <input
          type="date"
          name="start_date"
          value={
            formData.start_date
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />

      </div>

      {/* END DATE */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          End Date
        </label>

        <input
          type="date"
          name="end_date"
          value={
            formData.end_date
          }
          onChange={handleChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />

      </div>

      {/* STATUS */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        >

          <option value="active">
            Active
          </option>

          <option value="pending">
            Pending
          </option>

          <option value="expired">
            Expired
          </option>

        </select>

      </div>

      {/* SUBMIT */}
      <Button
        type="submit"
        className="w-full"
      >
        Save Policy
      </Button>

    </form>
  );
};

export default PolicyForm;