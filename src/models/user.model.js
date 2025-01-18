import mongoose from "mongoose";

const usserSchema = new mongoose.Schema({
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
    default: null
  },
  address: {
    type: String,
    default: ""
  },
  parkingSpaces:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ParkingSpace",
    default: [],
  },
  bookings: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Booking",
    default: []
  }
}, {timestamps: true});

const User = mongoose.model("user", usserSchema);

export default User;
