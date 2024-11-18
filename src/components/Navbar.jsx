import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="font-poppins bg-white  py-4 h-60 flex justify-between items-center">
      <div className="text-3xl font-bold flex mx-4 justify-start text-gold-500">
        ShiaMatch.com
      </div>

      <div className="container mx-auto flex justify-end space-x-6 items-center px-4 md:px-8">
        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "flex flex-col space-y-4" : "md:flex space-x-6"
          } md:block md:flex-row space-y-4 md:space-y-0 items-center`}
        >
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

        {/* Enroll Button */}
        <button className="hidden md:block bg-[#a51600] text-white px-4 py-2 rounded-full hover:bg-[#921800]">
          Enroll Today!
        </button>

        {/* Mobile Menu Toggle (Hidden on desktop) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
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
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
