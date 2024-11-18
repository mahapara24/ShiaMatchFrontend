import React from "react";
import goldleaves from "../../assets/goldleaves.png";

const MatchSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Sign up for ShiaMatch",
      description: "Begin your matrimonial journey here!",
    },
    {
      number: "2",
      title: "Complete Bio",
      description:
        "Bio includes a questionnaire that’s used by our AI to pair you to your best match",
    },
    {
      number: "3",
      title: "Candidate Review",
      description:
        "ShiaMatch staff contact community references to ensure candidate is a fit for the platform",
    },
    {
      number: "4",
      title: "Matching Begins!",
      description:
        "You will be contacted after the AI Algorithm compiles candidate information and suggests the best match",
    },
  ];

  return (
    <div className="bg-white pb-12 mt-2  relative flex flex-col lg:flex-row justify-center items-center space-y- lg:space-y-0 ">
      {/* Decorative Image for Left Side */}
      <img
        src={goldleaves}
        alt="Left Decoration"
        className="hidden lg:block h-16  mt-[60px] w-16 md:h-32 md:w-32 lg:h-52 lg:w-52 "
      />

      {/* Main Content */}
      <div className=" w-full flex flex-col items-center ">
        <h2 className="text-3xl flex-nowrap  text-gray-900  lg:text-5xl flex justify-center items-center font-bold text-center mb-8 lg:mb-12">
          <img
            src={goldleaves}
            alt="Left Decoration"
            className="lg:hidden h-24 w-24 md:h-32 md:w-32 lg:h-72 lg:w-72"
          />{" "}
          Find Your Match in 4 Easy Steps{" "}
          <img
            src={goldleaves}
            alt="Left Decoration"
            className="lg:hidden scale-x-[-1] h-24 w-24 md:h-32 md:w-32 lg:h-72 lg:w-72"
          />
        </h2>
        <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-nowrap md:w-full max-w-xs  py-4 px-1"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#C1A16A] text-white text-4xl flex-nowrap font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                {step.title}
              </h3>
              <p className="text-center text-lg text-gray-700 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Image for Right Side */}
      <img
        src={goldleaves}
        alt="Right Decoration"
        className="hidden lg:block h-16 mt-[600px] w-16 md:h-32 md:w-32 lg:h-52 lg:w-52 transform scale-x-[-1]"
      />
    </div>
  );
};

export default MatchSteps;
