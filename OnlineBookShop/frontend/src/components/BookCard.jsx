import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const navigate = useNavigate();

  const handleReadClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    // 1️⃣ User not logged in
    if (!user) {
      alert("Please log in to read this book!");
      return navigate("/login");
    }

    // 2️⃣ Extract planName safely
    const planName = user.subscription?.planName || null;

    // 3️⃣ If NO subscription → block
    if (!planName) {
      alert("You need a subscription to read books.");
      return navigate("/plans");
    }

    // 4️⃣ User has a subscription → allow reading
    const pdfUrl = `http://localhost:8070/api/books/read/${book._id}?userId=${user._id}`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-all">
      <img
        src={book.coverImage || "https://via.placeholder.com/300x400?text=No+Cover"}
        alt={book.title}
        className="w-full h-56 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-500 mb-3">{book.author}</p>

      <button
        onClick={handleReadClick}
        className="px-4 py-2 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700"
      >
        Read
      </button>
    </div>
  );
}
