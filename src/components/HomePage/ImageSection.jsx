import React from "react";
import Quote from "../../assets/Quote.jpg";

const ImageSection = () => {
  return (
    <div className="relative w-full h-[40vh] lg:h-[80vh]">
      {/* Background Image */}
      <img
        src={Quote}
        alt="Prayer"
        className="w-full h-full object-cover shadow-lg"
      />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-gradient-to-t from-black/50 via-black/30 to-transparent">
        <h1 className=" text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-center">
          And We Created You in Pairs
        </h1>
        <p className="text-2xl md:text-4xl lg:text-7xl font-extralight">
          Quran: 78.8
        </p>
      </div>
      {/* SVG Wavy Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            fill="#fff"
            d="M0,288 C360,200 1080,400 1440,288 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ImageSection;
