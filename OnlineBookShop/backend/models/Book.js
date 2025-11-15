import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    isPremium: { type: Boolean, default: false },
    coverImage: { type: String },

    // 🔥 THIS is the important field
    pdfFile: { type: String, required: true }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
