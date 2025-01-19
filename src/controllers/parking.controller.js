import User from "../models/user.model.js";
import ParkingSpace from "../models/parking.model.js";

export const handleAddParkingRoute = async (req, res) => {
  try {
    const parkingSpace = new ParkingSpace(req.body);
    const savedParkingSpace = await parkingSpace.save();
    res.status(201).json({
      success: true,
      message: "Parking space created successfully",
      data: savedParkingSpace,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create parking space",
      error: error.message,
    });
  }
};

export const getAllParkingSpace = async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.find()
      .populate("ownerId")
      .populate("currentBookings");
    res.status(200).json({
      success: true,
      message: "Parking spaces retrieved successfully",
      data: parkingSpaces,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch parking spaces",
      error: error.message,
    });
  }
};

export const getParkingById = async (req, res) => {
  const { id } = req.params;
  try {
    const parkingSpace = await ParkingSpace.findById(id)
      .populate("ownerId")
      .populate("currentBookings");
    if (!parkingSpace) {
      return res.status(404).json({
        success: false,
        message: "Parking space not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Parking space retrieved successfully",
      data: parkingSpace,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch parking space",
      error: error.message,
    });
  }
};

export const updateParkingById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedParkingSpace = await ParkingSpace.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedParkingSpace) {
      return res.status(404).json({
        success: false,
        message: "Parking space not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Parking space updated successfully",
      data: updatedParkingSpace,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update parking space",
      error: error.message,
    });
  }
};

export const deleteParkingById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedParkingSpace = await ParkingSpace.findByIdAndDelete(id);
    if (!deletedParkingSpace) {
      return res.status(404).json({
        success: false,
        message: "Parking space not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Parking space deleted successfully",
      data: deletedParkingSpace,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete parking space",
      error: error.message,
    });
  }
};
