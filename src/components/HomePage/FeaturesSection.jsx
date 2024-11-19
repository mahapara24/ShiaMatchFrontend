import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { FaMicrochip } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  return (
    <div className="bg-[#253551]  flex flex-col h-full justify-center gap-10 items-center text-white py-[10vh] lg:py-[18vh] px-4">
      <h2 className="text-center sm:4xl text-5xl font-normal mb-8">
        What Makes Azwaja Different from Other Matrimonial Services?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-40 mb-8">
        <div className="flex flex-col items-center">
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <VscWorkspaceTrusted size={140} />
          </div>
          <p className="text-center">
            Trusted Staff <br /> Trusted Process <br /> Privacy is our Priority
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <IoIosPeople size={140} />
          </div>

          <p className="text-center">
            Rigorous Vetting Process <br /> To ensure high-quality <br />{" "}
            candidates on the platform
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <FaMicrochip size={140} />
          </div>
          <p className="text-center">
            Powered by AI To generate <br /> the best matches based <br /> on
            more than 40+ variables
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-[#253551] p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
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
          To learn more about Azwaja's features, click here.
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSection;
