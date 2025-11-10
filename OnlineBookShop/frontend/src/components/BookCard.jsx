import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book, user }) {
  const navigate = useNavigate();

  const handleReadClick = () => {
    if (!user) {
      // user not logged in
      navigate("/login");
    } else if (!user.subscription) {
      // user logged in but not subscribed
      navigate("/plans");
    } else {
      // user logged in and subscribed
      navigate(`/read/${book._id}`); // example: open book reader page
    }
  };

  const isSubscribed = !!(user && user.subscription);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 p-5">
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{book.title}</h3>
      <p className="text-gray-500 text-sm mb-4 italic">by {book.author}</p>

      <button
        onClick={handleReadClick}
        className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
          isSubscribed
            ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            : "bg-gray-300 text-gray-700 hover:scale-105"
        }`}
      >
        {isSubscribed ? "Read Now 📖" : "Subscribe to Read 🔒"}
      </button>
    </div>
  );
}
