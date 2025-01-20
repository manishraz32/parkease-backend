import { z } from "zod";

export const userBookingSchema = z.object({
  parkingId: z.string().nonempty("Parking ID is required."),
  bookedBy: z.string().nonempty("BookedBy is required."),
  totalAmount: z.string().nonempty("Total Amount is required."),
  paymentStatus: z.enum(["pendng", "success"]).default("pendng"),
  vehicleType: z
    .enum(["car", "motercycle"])
    .nonempty("Vehicle Type is required."),
  fullname: z.string().nonempty("Fullname is required."),
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email is required."),
  phoneNo: z.string().nonempty("Phone number is required."),
  startDateTime: z.date({
    required_error: "Start date and time is required.",
    invalid_type_error: "Invalid date format for start date and time.",
  }),
  endDateTime: z
    .date({
      invalid_type_error: "Invalid date format for end date and time.",
    })
    .optional(), // Optional field
  duration: z.string().nonempty("Duration is required."),
  address: z.string().nonempty("Address is required."),
});