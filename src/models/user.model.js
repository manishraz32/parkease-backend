import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "user", "parkingOwner"],
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    profilePicture: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: "",
    },
    verifyToken: {
      type: String,
      default: null,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    parkingSpaces: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "ParkingSpace",
      default: [],
    },
    bookings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "UserBooking",
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
