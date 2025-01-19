import Router from "express";
import { handleRegisterRoute, handleVerifiyEmailRoute } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterRoute);
router.get("/verify-email", handleVerifiyEmailRoute);

export default router;
