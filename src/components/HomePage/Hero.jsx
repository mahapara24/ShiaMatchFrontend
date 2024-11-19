import React from "react";
import heroImage from "../../assets/hero.jpg"; // Adjust the path accordingly
import CustomButton from "../CustomButton";

const HeroSection = () => {
  return (
    <div className="relative">
      <section
        className="w-full h-[800px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="font-poppins  bg-black bg-opacity-50 h-full rounded-md p-8 md:p-16 text-white">
          <h1 className="text-3xl  md:text-5xl pt-32 font-semibold mb-4">
            Successful match making for the Shia Muslim Community Worldwide
          </h1>
          <p className="text-3xl md:text-5xl font-semibold mb-4">
            Created to help single Muslims find their partner while maintaining
            trust, respect, and virtue
          </p>

          <CustomButton
            color="bg-[#9D885E]"
            customStyles="hover:bg-[#6d5c39] mt-14 text-black rounded-full transition duration-300 ease-in-out 
               py-3 px-8 text-lg font-medium 
               md:py-4 md:px-12 md:text-xl 
               lg:py-4 lg:px-14 lg:text-2xl"
          >
            Enroll Today!
          </CustomButton>
        </div>

        {/* SVG for circle-like bottom curve */}
      </section>
      <div className="absolute bottom-0 w-full overflow-hidden outline-none  border-none leading-none">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto outline-none border-none bottom-0"
        >
          <path
            fill="#fff" // Adjust to desired color
            d="M0,224C480,160,960,160,1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
