import express from "express";
import {
  getAllBooks,
  getBookById,
  readBookPDF
} from "../controllers/bookController.js";

const router = express.Router();

// PDF Route (premium protected)
router.get("/read/:id", readBookPDF);

// all books
router.get("/", getAllBooks);

// single book
router.get("/:id", getBookById);

export default router;
