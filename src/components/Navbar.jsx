import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="font-poppins overflow-x-hidden h-48 bg-white shadow-md py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className=" text-xl md:text-3xl font-bold mx-4 text-gold-500">
        ShiaMatch.com
      </div>

      {/* Navigation Links & Buttons */}
      <div className="container mx-auto flex justify-end items-center px-4 md:px-8">
        {/* Links - shown as column on mobile */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 transition-all duration-300 ease-in-out   md:relative top-0 left-0 md:top-auto fixed md:left-auto w-full bg-white md:bg-transparent  md:w-auto`}
        >
          <div className="flex flex-col md:flex-row  mx-10 md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
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
        </div>

        {/* Enroll Button (Hidden on mobile) */}
        <button className="hidden md:block bg-[#a51600] text-white px-4 py-2 rounded-full hover:bg-[#921800]">
          Enroll Today!
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {/* Conditional Rendering of Hamburger and Close Icons */}
            {isMobileMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
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
                className="w-6 h-6"
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
      </div>
    </nav>
  );
};

export default Navbar;
