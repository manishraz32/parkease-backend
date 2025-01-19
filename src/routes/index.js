import Router from "express";
import authRoutes from "./auth.routes.js";
import parkingRoutes from "./parking.routes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/parking", parkingRoutes)

export default router;
