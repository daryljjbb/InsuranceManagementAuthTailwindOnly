import { useState } from "react";

import Button from "../ui/Button";

const ClaimForm = ({
  onSubmit,
  initialData = {},
}) => {

  const [formData, setFormData] =
    useState({

      claim_amount:
        initialData.claim_amount || "",

      description:
        initialData.description || "",

      incident_date:
        initialData.incident_date || "",

      status:
        initialData.status || "pending",
    });

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      {/* CLAIM AMOUNT */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Claim Amount
        </label>

        <input
          type="number"

          step="0.01"

          name="claim_amount"

          value={
            formData.claim_amount
          }

          onChange={handleChange}

          required

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

      </div>

      {/* INCIDENT DATE */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Incident Date
        </label>

        <input
          type="date"

          name="incident_date"

          value={
            formData.incident_date
          }

          onChange={handleChange}

          required

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
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

          value={
            formData.status
          }

          onChange={handleChange}

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        >

          <option value="pending">
            Pending
          </option>

          <option value="approved">
            Approved
          </option>

          <option value="rejected">
            Rejected
          </option>

        </select>

      </div>

      {/* DESCRIPTION */}
      <div>

        <label
          className="
            block
            mb-1
            font-medium
          "
        >
          Description
        </label>

        <textarea
          name="description"

          value={
            formData.description
          }

          onChange={handleChange}

          rows="4"

          required

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

      </div>

      {/* SUBMIT BUTTON */}
      <div className="pt-2">

        <Button
          type="submit"
          className="w-full"
        >
          Save Claim
        </Button>

      </div>

    </form>
  );
};

export default ClaimForm;