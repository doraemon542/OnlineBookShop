import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// 📘 Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📕 Get single book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(404).json({ message: "Book not found" });
  }
});

export default router;
