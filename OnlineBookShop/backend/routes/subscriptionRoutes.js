import express from "express";
import {
  getAllSubscriptions,
  subscribeUser,
  checkSubscription,
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.get("/", getAllSubscriptions);
router.post("/subscribe", subscribeUser);
router.get("/check/:userId", checkSubscription);

export default router;
