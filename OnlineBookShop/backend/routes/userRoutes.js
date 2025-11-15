import express from "express";
import { signup, login, subscribe } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/subscribe", subscribe);

export default router;
