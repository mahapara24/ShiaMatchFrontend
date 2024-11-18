import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[30vh] flex flex-col justify-center items-center bg-[#C1A16A] text-center py-4 px-2 sm:px-6">
      <div className="text-base sm:text-lg text-gray-800 mb-4 space-y-2 sm:space-y-0">
        <nav className="flex flex-wrap space-x-2 justify-center items-center sm:flex-row sm:space-x-4">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
        </nav>
      </div>

      <div className="text-sm sm:text-lg text-black mt-2">
        &copy; Shiamatch.com | Successful matchmaking since 1999
      </div>
    </footer>
  );
};

export default Footer;
