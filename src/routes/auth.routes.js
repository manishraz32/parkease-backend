import Router from "express";
import { handleRegisterRoute } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterRoute);

export default router;
