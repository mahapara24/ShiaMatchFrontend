import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflowY = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <nav className="font-poppins overflow-x-hidden h-48 bg-white shadow-md py-4 flex justify-between items-center relative">
      {/* Logo - Conditionally Hidden */}
      <div
        className={`${
          isMobileMenuOpen ? "hidden" : "block"
        } lg:block text-2xl md:text-3xl font-bold mx-4 text-gold-500 z-50`}
      >
        ShiaMatch.com
      </div>

      {/* Navigation Links & Buttons (Only visible on large devices or when menu is closed) */}
      <div
        className={`${
          isMobileMenuOpen
            ? "hidden"
            : "hidden lg:flex justify-end items-center w-full px-4 md:px-8"
        }`}
      >
        <div className="hidden text-lg lg:flex flex-row mx-10 lg:space-x-6 space-y-4 lg:space-y-0 p-4 lg:p-0">
          <Link to="/home" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            Search Profile
          </Link>
          <Link
            to="/how-it-works"
            className="text-gray-700 hover:text-gray-900"
          >
            Add Your Profile
          </Link>
          <Link to="/faqs" className="text-gray-700 hover:text-gray-900">
            Your Comments
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">
            Success Stories
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
        </div>

        {/* Enroll Button (Hidden on small devices) */}
        <button className="hidden lg:block bg-[#a51600] text-white px-4 py-2 rounded-full hover:bg-[#921800]">
          Enroll Today!
        </button>
      </div>

      {/* Mobile Menu Overlay - Only appears on small screens when menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white top-0 h-screen pt-20 px-10 flex flex-col items-start justify-start space-y-20 py-10 lg:hidden">
          {/* Logo inside mobile menu */}
          <div className="text-2xl font-bold mb-8">ShiaMatch.com</div>

          {/* Mobile Menu Links */}
          <div className="flex text-xl flex-col space-y-6">
            <Link
              to="/home"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Search Profile
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Add Your Profile
            </Link>
            <Link
              to="/faqs"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Your Comments
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Success Stories
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
          </div>
          <div className="">
            {" "}
            <button className="block lg:hidden bg-[#a51600] text-white px-4 py-2 rounded-full hover:bg-[#921800]">
              Enroll Today!
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Toggle Button (Only shown on small devices) */}
      <div className="fixed right-4 lg:hidden md:px-10 z-50 flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
