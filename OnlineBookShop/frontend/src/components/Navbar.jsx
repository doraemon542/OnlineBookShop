import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="logo text-2xl font-bold text-blue-600">
        📚 BookNest
      </div>

      {/* Links - desktop */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/library" className="hover:text-blue-600 transition-colors">Library</Link>
        <Link to="/plans" className="hover:text-blue-600 transition-colors">Plans</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          {/* Simple hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
