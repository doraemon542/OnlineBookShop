import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-5">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">

        {/* Left Section */}
        <div className="md:w-1/2 bg-blue-700 text-white flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch 📬</h2>
          <p className="text-gray-200 mb-6">
            We'd love to hear from you! Whether you have a question about our
            books, pricing, or anything else — our team is ready to answer all
            your questions.
          </p>
          <ul className="space-y-3">
            <li>
              📍 <span className="font-semibold">Address:</span> 123 Library Street, Dhaka, Bangladesh
            </li>
            <li>
              📞 <span className="font-semibold">Phone:</span> +880 123 456 789
            </li>
            <li>
              ✉️ <span className="font-semibold">Email:</span> support@bookverse.com
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6 text-2xl">
            <a href="#" className="hover:text-yellow-300">🌐</a>
            <a href="#" className="hover:text-yellow-300">📘</a>
            <a href="#" className="hover:text-yellow-300">🐦</a>
            <a href="#" className="hover:text-yellow-300">📸</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Send a Message ✉️</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
