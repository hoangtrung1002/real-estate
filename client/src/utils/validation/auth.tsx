import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const signInSchema = z.object({
  phone: z
    .string()
    .min(2, {
      message: "Phone number must be at least 2 characters.",
    })
    .regex(phoneRegex, "Invalid Phone number!"),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export const signUpSchema = signInSchema.extend({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .optional(),
  role: z.enum(["USER", "AGENT"], {
    required_error: "You need to select a notification type.",
  }),
});
