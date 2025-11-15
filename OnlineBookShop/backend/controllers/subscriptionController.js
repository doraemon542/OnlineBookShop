import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

// ✅ Get all available subscription plans
export const getAllSubscriptions = async (req, res) => {
  try {
    const plans = await Subscription.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch plans", error });
  }
};

// ✅ Subscribe a user to a plan
export const subscribeUser = async (req, res) => {
  try {
    const { userId, planName } = req.body;

    const plan = await Subscription.findOne({ planName });
    if (!plan) return res.status(404).json({ message: "Plan not found" });

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + plan.duration);

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.subscription = {
      planName: plan.planName,
      startDate,
      endDate,
      remainingBooks: plan.bookLimit,
    };

    await user.save();

    res.status(200).json({
      message: `Subscribed to ${plan.planName} successfully`,
      subscription: user.subscription,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ message: "Subscription failed", error });
  }
};

// ✅ Check if user subscription is active
export const checkSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    const sub = user.subscription;
    const active =
      sub?.planName && new Date(sub.endDate) > new Date()
        ? true
        : false;

    res.status(200).json({ active, subscription: sub });
  } catch (error) {
    res.status(500).json({ message: "Failed to check subscription", error });
  }
};
