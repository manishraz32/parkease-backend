import Router from "express";
import authRoutes from "./auth.routes.js";
import parkingRoutes from "./parking.routes.js";
import bookingRoutes from "./booking.routes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/parking", parkingRoutes);
router.use("/api/booking", bookingRoutes);

export default router;
