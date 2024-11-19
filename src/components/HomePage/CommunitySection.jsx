import React from "react";
import Rings from "../../assets/Rings.jpg";
import HoldingHandRings from "../../assets/HoldingHandRings.jpg";

const CommunitySection = () => {
  return (
    <section className="font-poppins  py-16 bg-white text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 px-10 md:px-24 font-medium mb-28">
        Now serving communities across the USA and Canada!
      </h2>
      <div className="flex flex-col sm:flex-row gap-8  sm:gap-10 justify-between  mx-8 sm:mx-10">
        {/* Image 1 */}
        <div className="flex-1">
          <img
            src={HoldingHandRings}
            alt="Couple holding hands"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* Image 2 */}
        <div className="flex-1 sm:mt-32">
          <img
            src={Rings}
            alt="Wedding rings in hand"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
