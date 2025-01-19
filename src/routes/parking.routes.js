import Router from "express";
import {
  handleAddParkingRoute,
  getAllParkingSpace,
  updateParkingById,
  getParkingById,
  deleteParkingById,
} from "../controllers/parking.controller.js";

const router = Router();

router.post("/add-parking", handleAddParkingRoute);
router.get("/get-parkings", getAllParkingSpace);
router.get("/get-parking/:id", getParkingById);
router.put("/update-parking/:id", updateParkingById);
router.delete("/delete-parking/:id", deleteParkingById);
export default router;
