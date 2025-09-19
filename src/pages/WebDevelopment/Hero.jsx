import React, { useState } from "react";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative h-[calc(100vh-10rem)] items-center  pt-20 w-auto overflow-hidden ">
      <video
        width="560"
        height="315"
        autoPlay
        muted
        playsInline
        loop
        controls={false}
        style={{ pointerEvents: "none" }}
        className="absolute top-0 left-0 h-full w-full object-cover md:mb-10"
      >
        <source src="/garvish-web-development.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl p-3">
          Create a Website, Amplify Your Business Voice
        </h1>
      </div>
    </div>
  );
};

export default Hero;
