import mongoose from "mongoose";

const parkingSpaceSchema = new mongoose.Schema({
  parkingName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    default: "",
  },
  state: {
    type: String,
    required: true,
    default: "",
  },
  city: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  openType: {
    type: String,
    required: true,
  },
  totalSpaces: {
    type: String,
    default: 0,
  },
  acceptedVehicleType: {
    type: [String],
    enum: ["motercycle", "car"],
    default: [],
  },
  price: {
    motorcyclePrice: {
      type: Number,
      required: true,
      default: 0,
    },
    carPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  description: {
    type: String,
    default: 0,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: "",
  },
  currentBookings: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "UserBooking",
    default: [],
  },
});

const ParkingSpace = mongoose.model("parking", parkingSpaceSchema);

export default ParkingSpace;
