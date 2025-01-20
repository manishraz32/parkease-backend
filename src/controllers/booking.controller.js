import User from "../models/user.model.js";
import UserBooking from "../models/userbooking.model.js"
import { ZodError } from "zod";
import ParkingSpace from "../models/parking.model.js";
import { parkingSpaceValidationSchema } from "../validations/parkingValidation.js";
import { formatError, renderEmailEjs } from "../utils/helperFun.js";

// 1. Create a new booking
export const createBooking = async (bookingData) => {
    try {
      const newBooking = new UserBooking(bookingData);
      await newBooking.save();
      return { success: true, data: newBooking };
    } catch (error) {
      return { success: false, error: error.message };
    }
};
  
  // 2. Get all bookings
export const getAllBookings = async () => {
    try {
      const bookings = await UserBooking.find().populate("parkingId bookedBy");
      return { success: true, data: bookings };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // 3. Get a booking by ID
export const getBookingById = async (id) => {
    try {
      const booking = await UserBooking.findById(id).populate("parkingId bookedBy");
      if (!booking) {
        return { success: false, error: "Booking not found" };
      }
      return { success: true, data: booking };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // 4. Update a booking by ID
export const updateBookingById = async (id, updateData) => {
    try {
      const updatedBooking = await UserBooking.findByIdAndUpdate(id, updateData, {
        new: true,
      }).populate("parkingId bookedBy");
      if (!updatedBooking) {
        return { success: false, error: "Booking not found" };
      }
      return { success: true, data: updatedBooking };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  // 5. Delete a booking by ID
export const deleteBookingById = async (id) => {
    try {
      const deletedBooking = await UserBooking.findByIdAndDelete(id);
      if (!deletedBooking) {
        return { success: false, error: "Booking not found" };
      }
      return { success: true, data: deletedBooking };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  