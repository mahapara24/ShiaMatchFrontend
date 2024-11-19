import React from "react";

function AboutShiaMatch() {
  return (
    <section className="font-Merienda   pb-10 bg-[#BFA371]  text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-black px-10 md:px-24 font-medium mb-6 lg:mb-16">
        About ShiaMatch.com{" "}
      </h2>
      <div className="flex text-black font-Merienda flex-col sm:flex-row gap-8  sm:gap-10 justify-between  mx-8 sm:mx-10">
        {/* Image 1 */}
        <div className="flex-1">
          <p className="text-lg lg:text-3xl font-light">
            <span className="font-bold"> What is ShiaMatch?</span> ShiaMatch is
            an online tool to help you find other Shia Muslims who are looking
            for a suitable match. The main purpose of Shiamatch is to expand
            your network of prospective matches, complimenting your search
            through traditional means. Finding a person on Shiamatch is just the
            first step towards choosing a marriage partner.
          </p>
        </div>

        <div className="flex-1 sm:mt-32">
          <p className="text-lg lg:text-3xl font-light">
            <span className="font-bold"> How does it work?</span> To contact
            other members on Shiamatch, YOU MUST FIRST create an online profile.
            An online profile contains basic information about you. To request
            someone's contact information, you can login and send them a request
            through Shiamatch. If they like your profile, they will accept your
            request and both parties will automatically receive each other's
            email address. From that point on, you may contact each other
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutShiaMatch;
