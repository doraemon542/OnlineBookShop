import React, { useState } from "react";
import BookCard from "../components/BookCard";

export default function Library() {
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=500&q=80" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=500&q=80" },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const isSubscribed = false; // ধরো user এখনো subscription নেয়নি

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || book.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        📚 Library
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="History">History</option>
        </select>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} isSubscribed={isSubscribed} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No books found for your search 🔍
        </p>
      )}
    </div>
  );
}
