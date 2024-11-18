import React from "react";
import heroImage from "../../assets/hero.jpg"; // Adjust the path accordingly

const HeroSection = () => {
  return (
    <div>
      <section
        className="w-full h-[800px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 h-full rounded-md p-8 md:p-16 text-white">
          <h1 className="text-3xl md:text-5xl  pt-32 font-semibold mb-4">
            Successful match making for the Shia Muslim Community Worldwide
          </h1>
          <p className="text-3xl md:text-5xl  font-semibold mb-4">
            Created to help single Muslims find their partner while maintaining
            trust, respect, and virtue
          </p>
          <button className="bg-[#9D885E] hover:bg-[#6d5c39] mt-14 text-black rounded-full py-4 text-2xl font-medium px-14  transition duration-300 ease-in-out">
            Enroll Today!
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
