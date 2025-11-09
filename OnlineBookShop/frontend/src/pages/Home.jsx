import React from "react";
import BookCard from "../components/BookCard";

export default function Home() {
  const featuredBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "1984",
      author: "George Orwell",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4yWihrnwBCaQNXCMF_zSIAPDMidcLtnR3g&s",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover, Read, and Enjoy <br /> Your Favorite Books Anytime 📚
          </h1>
          <p className="text-gray-700 text-lg">
            Join <span className="font-semibold">BookNest</span> and explore thousands of books with one subscription. 
            Read online without downloads — anytime, anywhere.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Explore Library
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80"
            alt="Books"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Featured Books */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredBooks.map((book, index) => (
            <BookCard key={index} book={book} isSubscribed={false} />
          ))}
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Start Reading Today!</h2>
        <p className="mb-6 text-lg">
          Subscribe now and unlock our entire online library.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          View Plans
        </button>
      </section>
    </div>
  );
}
