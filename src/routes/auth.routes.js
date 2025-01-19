import Router from "express";
import {
  handleRegisterRoute,
  handleVerifiyEmailRoute,
  handleLoginRoute,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterRoute);
router.get("/verify-email", handleVerifiyEmailRoute);
router.post("/login", handleLoginRoute);

export default router;
