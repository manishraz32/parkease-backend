import User from "../models/user.model.js";
import UserBooking from "../models/userbooking.model.js"
import { ZodError } from "zod";
import ParkingSpace from "../models/parking.model.js";
import { parkingSpaceValidationSchema } from "../validations/parkingValidation.js";
import { formatError, renderEmailEjs } from "../utils/helperFun.js";

// 1. Create a new booking
export const createBooking = async (req, res) => {
  try {
    const newBooking = new UserBooking(req.body);
    await newBooking.save();
    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
  
  // 2. Get all bookings
  export const getAllBookings = async (req, res) => {
    try {
      const bookings = await UserBooking.find().populate("parkingId bookedBy");
      res.status(200).json({ success: true, data: bookings });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
};
  
  // 3. Get a booking by ID
export const getBookingById = async (req, res) => {
    try {
      const booking = await UserBooking.findById(req.params.id).populate("parkingId bookedBy");
      if (!booking) {
        res.status(200).json({ success: false, error: "Booking not found" });
      }
      res.status(200).json({ success: true, data: booking });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  // 4. Update a booking by ID
  export const updateBookingById = async (req, res) => {
    try {
      const updatedBooking = await UserBooking.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("parkingId bookedBy");
      if (!updatedBooking) {
        return res.status(404).json({ success: false, error: "Booking not found" });
      }
      res.status(200).json({ success: true, data: updatedBooking });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
}
  // 5. Delete a booking by ID
  export const deleteBookingById = async (req, res) => {
    try {
      const deletedBooking = await UserBooking.findByIdAndDelete(req.params.id);
      if (!deletedBooking) {
        return res.status(404).json({ success: false, error: "Booking not found" });
      }
      res.status(200).json({ success: true, data: deletedBooking });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
};
  