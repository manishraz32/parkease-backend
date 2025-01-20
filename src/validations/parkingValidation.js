import { z } from "zod";

export const parkingSpaceValidationSchema = z.object({
  parkingName: z.string().trim().min(1, "Parking name is required"),
  address: z.string().trim().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  openType: z.string().min(1, "Open type is required"),
  totalSpaces: z.string().optional().default("0"),
  acceptedVehicleType: z
    .array(z.enum(["motercycle", "car"]))
    .optional()
    .default([]),
  price: z.object({
    motorcyclePrice: z
      .number()
      .min(0, "Motorcycle price must be a positive number")
      .default(0),
    carPrice: z
      .number()
      .min(0, "Car price must be a positive number")
      .default(0),
  }),
  description: z.string().optional().default("0"),
  ownerId: z.string().optional(),
  currentBookings: z.array(z.string()).optional().default([]),
});
