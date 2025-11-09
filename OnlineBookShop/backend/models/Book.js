import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    coverImage: { type: String },
    description: { type: String },
    category: { type: String },
    isPremium: { type: Boolean, default: false }, // Premium books for subscribed users
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
