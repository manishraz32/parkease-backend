import Router from "express";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} from "../controllers/booking.controller.js";

const router = Router();

router.post("/add-booking", createBooking);
router.get("/get-bookings", getAllBookings);
router.get("/get-booking/:id", getBookingById);
router.put("/update-booking/:id", updateBookingById);
router.delete("/delete-booking/:id", deleteBookingById);

export default router;
