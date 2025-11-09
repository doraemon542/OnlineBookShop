import express from "express";
import Subscription from "../models/Subscription.js";

const router = express.Router();

// get all subscriptions
router.get("/", async (req, res) => {
  try {
    const subs = await Subscription.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add new subscription
router.post("/", async (req, res) => {
  const { planName, price, duration, features } = req.body;
  try {
    const newSub = new Subscription({ planName, price, duration, features });
    await newSub.save();
    res.status(201).json(newSub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
