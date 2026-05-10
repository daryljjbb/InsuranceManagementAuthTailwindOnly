import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  customerSchema,
} from "../../validations/customerSchema";

import Input from "../ui/Input";

import Button from "../ui/Button";

const CustomerForm = ({
  onSubmit,
  defaultValues = {},
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({

    resolver:
      zodResolver(customerSchema),

    defaultValues: {
      first_name:
        defaultValues.first_name || "",

      last_name:
        defaultValues.last_name || "",

      email:
        defaultValues.email || "",

      phone_number:
        defaultValues.phone_number || "",

      address:
        defaultValues.address || "",
    },
  });

  const submitForm = (data) => {

    onSubmit(data);

    reset();
  };

  return (
    <form
      onSubmit={
        handleSubmit(submitForm)
      }
      className="space-y-4"
    >

      {/* FIRST NAME */}
      <div>

        <Input
          label="First Name"
          {...register("first_name")}
        />

        {errors.first_name && (
          <p className="text-red-500 text-sm">
            {
              errors.first_name.message
            }
          </p>
        )}

      </div>

      {/* LAST NAME */}
      <div>

        <Input
          label="Last Name"
          {...register("last_name")}
        />

        {errors.last_name && (
          <p className="text-red-500 text-sm">
            {
              errors.last_name.message
            }
          </p>
        )}

      </div>

      {/* EMAIL */}
      <div>

        <Input
          label="Email"
          type="email"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-red-500 text-sm">
            {
              errors.email.message
            }
          </p>
        )}

      </div>

      {/* PHONE */}
      <div>

        <Input
          label="Phone Number"
          {...register("phone_number")}
        />

        {errors.phone_number && (
          <p className="text-red-500 text-sm">
            {
              errors.phone_number.message
            }
          </p>
        )}

      </div>

      {/* ADDRESS */}
      <div>

        <Input
          label="Address"
          {...register("address")}
        />

        {errors.address && (
          <p className="text-red-500 text-sm">
            {
              errors.address.message
            }
          </p>
        )}

      </div>

      <Button type="submit">
        Save Customer
      </Button>

    </form>
  );
};

export default CustomerForm;