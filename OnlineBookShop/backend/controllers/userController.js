import bcrypt from "bcryptjs";
import User from "../models/User.js";

// 🔹 Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔹 Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔹 Subscribe
export const subscribe = async (req, res) => {
  try {
    const { userId, planName } = req.body;

    const plans = {
      "Basic Reader": { price: 299, duration: 30, bookLimit: 100 },
      "Premium Reader": { price: 599, duration: 30, bookLimit: 300 },
      "Elite Reader": { price: 999, duration: 30, bookLimit: Infinity },
    };

    const plan = plans[planName];
    if (!plan) return res.status(400).json({ message: "Invalid plan" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + plan.duration);

    user.subscription = {
      planName,
      startDate,
      endDate,
      remainingBooks: plan.bookLimit,
    };

    await user.save();
    res.status(200).json({ message: "Subscription successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
