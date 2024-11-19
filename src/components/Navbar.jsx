import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    document.body.style.overflowY = isMobileMenuOpen ? "auto" : "hidden"; // Prevent body scroll when mobile menu is open
  };

  return (
    <nav className="font-poppins overflow-x-hidden h-48 bg-white shadow-md py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div
        className={` text-3xl font-bold px-4 text-gold-500 z-50 ${
          isMobileMenuOpen ? "hidden" : "block lg:block"
        }`}
      >
        ShiaMatch.com
      </div>

      {/* Desktop Navigation Links */}
      <div
        className={`${
          isMobileMenuOpen
            ? "hidden"
            : "hidden lg:flex justify-end items-center w-full px-4 md:px-8"
        }`}
      >
        <div className="hidden lg:flex text-lg flex-row mx-10 lg:space-x-6 space-y-4 lg:space-y-0 p-4 lg:p-0">
          {[
            "home",
            "about",

            "add-your-profile",
            "your-comments",
            "success-stories    ",
          ].map((item, index) => (
            <Link
              key={index}
              to={`/${item}`}
              className="text-gray-700 hover:text-gray-900 capitalize"
            >
              {item.replace("-", " ")}
            </Link>
          ))}
        </div>
        <button className="hidden mr-2 lg:block bg-[#9D885E] text-black px-4 py-2 rounded-full hover:bg-[#a18753]">
          Enroll Today!
        </button>
        <CiSearch size={46} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white top-0 h-screen pt-14 px-4 flex flex-col items-start space-y-6 py-8 lg:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-3xl font-bold mb-10">ShiaMatch.com</div>
        <div className="flex px-10 text-xl flex-col space-y-6">
          {[
            "home",
            "about",
            "search-profile",
            "add-your-profile",
            "your-comments",
            "success-stories    ",
          ].map((item, index) => (
            <Link
              key={index}
              to={`/${item}`}
              className="text-gray-700 hover:text-gray-900 capitalize"
              onClick={toggleMobileMenu}
            >
              {item.replace("-", " ")}
            </Link>
          ))}
        </div>
        <CiSearch className="block mx-8 lg:hidden" size={46} />
        <button className="block mx-8 lg:hidden bg-[#9D885E] text-black px-4 py-2 rounded-full hover:bg-[#a18753]">
          Enroll Today!
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="absolute right-4 lg:hidden md:px-10 z-50 flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <IoCloseSharp color="black" size={42} />
          ) : (
            <HiMenuAlt4 color="black" size={42} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
