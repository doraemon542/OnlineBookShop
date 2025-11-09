import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    planName: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, // in days
    features: [{ type: String }],
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
