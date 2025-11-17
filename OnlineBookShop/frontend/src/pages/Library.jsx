import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { API_BASE } from "../config/api";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  

  // ✅ Fetch all books from backend
  useEffect(() => {
    fetch(`${API_BASE}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || book.category === category;
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
          <option value="Classic">Classic</option>
          <option value="Fiction">Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="History">History</option>
        </select>
      </div>

      {/* Books Grid */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading books...</p>
      ) : filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
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
