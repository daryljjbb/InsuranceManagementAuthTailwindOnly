import { z } from "zod";

export const customerSchema = z.object({

  first_name:
    z.string()
      .min(2, "First name required"),

  last_name:
    z.string()
      .min(2, "Last name required"),

  email:
    z.string()
      .email("Invalid email"),

  phone_number:
    z.string()
      .min(7, "Phone required"),

  address:
    z.string()
      .min(5, "Address required"),
});