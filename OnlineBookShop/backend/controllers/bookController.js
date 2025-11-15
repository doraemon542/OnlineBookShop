import Book from "../models/Book.js";
import User from "../models/User.js";

/* 
  Get all books (without PDF)
*/
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(
      {},
      "title author category coverImage isPremium"
    );
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books", error: err.message });
  }
};

/*
  Get single book (details only)
*/
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).select("-pdfFile");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error fetching book", error: err.message });
  }
};

/*
  📘 READ BOOK PDF (WITH PREMIUM CHECK)
*/


export const readBookPDF = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;

    // 1) Load book
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    // 2) Load user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // ------------------------------------------
    // 🔥 SIMPLE SUBSCRIPTION CHECK (YOUR REQUEST)
    // ------------------------------------------
    const sub = user.subscription;

    const isSubscribed =
      sub &&
      sub.planName &&
      sub.startDate &&
      sub.endDate &&
      new Date(sub.endDate) > new Date(); // not expired

    // 🔥 If book is premium AND subscription missing → Redirect / Block
    if (book.isPremium && !isSubscribed) {
      return res.status(403).json({
        message: "Subscription required",
        redirect: "/plans",
      });
    }
    // ------------------------------------------

    // 3) If PDF missing
    if (!book.pdfFile || !book.pdfFile.trim()) {
      return res.status(400).json({
        message: "Book file missing",
        error: "No pdfFile found in DB",
      });
    }

    // 4) Convert base64 → buffer
    let base64String = book.pdfFile;
    if (base64String.startsWith("data:")) {
      base64String = base64String.split(",")[1];
    }

    const pdfBuffer = Buffer.from(base64String, "base64");

    // 5) Send PDF
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline",
    });

    return res.send(pdfBuffer);
  } catch (err) {
    console.error("❌ Error reading book:", err);
    return res.status(500).json({ message: "Error reading book", error: err });
  }
};
