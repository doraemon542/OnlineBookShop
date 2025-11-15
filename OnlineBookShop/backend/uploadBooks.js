import mongoose from "mongoose";
import fs from "fs";
import Book from "./models/Book.js";

await mongoose.connect("mongodb://127.0.0.1:27017/onlinebookshop");

// PDF loader with Debug logs
function pdfToBase64(path) {
  console.log("🔍 Checking:", path);

  if (!fs.existsSync(path)) {
    console.error("❌ FILE NOT FOUND:", path);
    process.exit(1); // Stop execution
  }

  const file = fs.readFileSync(path);
  console.log("✅ FILE LOADED:", path);

  return `data:application/pdf;base64,${file.toString("base64")}`;
}

// Your folder path (manually adjust)
const base = "C:\\Users\\User\\OneDrive\\Desktop\\dsi\\OnlineBookShop\\backend\\books\\";

// Test files
const alice = base + "alices-adventures-in-wonderland.pdf";
const pride = base + "pride-and-prejudice.pdf";
const gatsby = base + "the-great-gatsby.pdf";

console.log("\n🔎 FINAL PATH CHECK");
console.log("Alice:", alice);
console.log("Pride:", pride);
console.log("Gatsby:", gatsby);

const books = [
  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    category: "Classic Literature",
    isPremium: false,
    coverImage: "https://i.imgur.com/xxxxalice.jpg",
    pdfFile: pdfToBase64(alice),
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance / Classic",
    isPremium: false,
    coverImage: "https://i.imgur.com/xxxxpride.jpg",
    pdfFile: pdfToBase64(pride),
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic Fiction",
    isPremium: false,
    coverImage: "https://i.imgur.com/xxxxgatsby.jpg",
    pdfFile: pdfToBase64(gatsby),
  },
];

await Book.deleteMany();
await Book.insertMany(books);

console.log("\n🎉 Books uploaded with PDFs!");
mongoose.connection.close();
