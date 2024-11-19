import React, { useState, useEffect } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the section is already visible
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="features-section"
      className={`bg-[#253551] font-poppins  flex flex-col h-full justify-center gap-10 items-center text-white py-[10vh] lg:py-[18vh] px-4`}
    >
      <h2
        className={`text-center text-3xl md:text-4xl lg:text-5xl font-light mb-8 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        What Makes ShiaMatch Different from Other Matrimonial Services?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-30 mb-8">
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0 delay-[200ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            <VscWorkspaceTrusted size={140} />
          </div>
          <p className="text-center">
            Trusted Staff <br /> Trusted Process <br /> Privacy is our Priority
          </p>
        </div>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0 delay-[400ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            <IoIosPeople size={140} />
          </div>
          <p className="text-center">
            Rigorous Vetting Process <br /> To ensure high-quality <br />{" "}
            candidates on the platform
          </p>
        </div>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0 delay-[600ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            <FaMicrochip size={140} />
          </div>
          <p className="text-center">
            Powered by AI To generate <br /> the best matches based <br /> on
            more than 40+ variables
          </p>
        </div>
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0 delay-[800ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            <FaPeopleLine size={140} />
          </div>
          <p className="text-center">
            Connecting Candidates <br /> Across US and Canada
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/learn-more"
          className="bg-white text-center lg:text-2xl text-[#253551] py-2 px-8 text-xl lg:py-4 lg:px-10 rounded-full hover:bg-gray-200 transition"
        >
          To learn more about ShiaMatch's features, click here.
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSection;
