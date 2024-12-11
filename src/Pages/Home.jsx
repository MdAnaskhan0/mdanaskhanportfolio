import React from "react";
import HeroImage from "../assets/Images/Hero_Section.jpg";
import TextAnimation from "../Components/TextAnimation";

const Home = () => {
  return (
    <>
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat relative font-yujiMai"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {/* Overlay (Optional) */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 py-16 md:py-32 lg:py-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            MD ANAS KHAN
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-6">
            <TextAnimation />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
