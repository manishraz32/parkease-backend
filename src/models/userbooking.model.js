import mongoose from "mongoose";

const userBookingSchema = new mongoose.Schema({
  parkingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingSpace",
    required: true,
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
    default: null,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "success"],
    default: "pending",
  },
  vehicleType: {
    type: String,
    required: true,
    enum: ["car", "motercycle"],
    default: "",
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
  },
  duration: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const UserBooking = mongoose.model("userBooking", userBookingSchema);

export default UserBooking;
