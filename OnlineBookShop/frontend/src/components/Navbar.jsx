import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-600 tracking-wide">
        📚 BookNest
      </div>

      {/* Links desktop */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/library" className="hover:text-blue-600 transition">Library</Link>
        <Link to="/plans" className="hover:text-blue-600 transition">Plans</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>

      {/* Right Side (User Section / Login Button) */}
      <div className="hidden md:flex items-center space-x-4">

        {user ? (
          <>
            {/* User Badge */}
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium text-gray-800">
                Hi, {user.name.split(" ")[0]}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-md font-medium hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
