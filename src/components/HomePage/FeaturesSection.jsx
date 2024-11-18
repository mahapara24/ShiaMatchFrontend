import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-[#253551]  flex flex-col h-fit justify-center gap-10 items-center text-white py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        What Makes Azwaja Different from Other Matrimonial Services?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="bg-white text-blue-900 p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Trusted Staff</h3>
          <p className="text-center">
            Trusted Process <br /> Privacy is our Priority
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-blue-900 p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 00-3.985 3.66L8 8a4 4 0 00-4 4v1a1 1 0 001 1h10a1 1 0 001-1v-1a4 4 0 00-3.985-4h-.015a4 4 0 00-4-3.646z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Rigorous Vetting Process
          </h3>
          <p className="text-center">
            To ensure high-quality candidates on the platform
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-blue-900 p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5h16M4 12h8m-8 7h16"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Powered by AI</h3>
          <p className="text-center">
            To generate the best matches based on more than 40+ variables
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-blue-900 p-4 rounded-full mb-4">
            {/* Add an appropriate SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553 4.553a12.042 12.042 0 01-17.032 0L5 10m8 0a8 8 0 0116 0v1m-8-1a12 12 0 00-8 11.996V21m0 0a8 8 0 0116 0v1m-8 0a12 12 0 01-8-11.996V10m0 0l1.5 1.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Connecting Candidates</h3>
          <p className="text-center">Across US and Canada</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-gray-200 transition">
          To learn more about Azwaja's features, click here.
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;
