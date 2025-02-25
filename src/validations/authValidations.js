import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "username should be atleast 3 character")
    .max(20, "username should be less than 20 character"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "password should be atleast 6 character"),
  role: z.string().default("user"),
});

export const emailSchema = z.object({
  email: z.string().email("Envalid format"),
  password: z.string().min(6, "password should be atleast 6 digits")
})
