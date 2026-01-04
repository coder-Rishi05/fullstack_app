import { Router } from "express";
import { registerUser } from "../controllers/auth.contoller.js";

const router = Router();

router.post("/user/register", registerUser); // route and controller
// router.post("/user/login/");

export default router;
