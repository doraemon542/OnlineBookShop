import React from "react";

export default function BookCard({ book, isSubscribed }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-56 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-500 mb-3">{book.author}</p>
      
      {isSubscribed ? (
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Read Now 📖
        </button>
      ) : (
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed">
          Subscribe to Read 🔒
        </button>
      )}
    </div>
  );
}
