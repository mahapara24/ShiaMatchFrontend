import React from "react";

const LogoSection = () => {
  return (
    <div className="h-[40vh] font-poppins  lg:h-[60vh] flex flex-col justify-center items-center bg-white relative">
      {/* Logo Name at the center */}
      <h1 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
        ShiaMatch.com <br /> Successful matchmaking
      </h1>

      {/* Logo Image at the bottom */}
      {/* <div className="absolute bottom-10">
        <img src="path-to-your-logo.png" alt="Logo" className="w-32 h-32" />
      </div> */}
    </div>
  );
};

export default LogoSection;
