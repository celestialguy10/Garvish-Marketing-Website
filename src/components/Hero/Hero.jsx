import React, { useState } from "react";
import { Button } from "../ui/button";

import Mainform2 from "@/pages/MainForm2";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="relative h-[calc(100vh-10rem)] items-center  pt-20 w-auto overflow-hidden ">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
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
        <source src="/Garvish-Homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-4 md:gap-6 pl-4 md:pl-6 flex-col md:text-center justify-center mb-28 h-screen">
        <p className="text-white text-3xl md:text-4xl">
          Empower your business with intelligent, AI-based marketing solutions
        </p>
        <div className="text-left md:text-center">
          <Button
            className="animate-slideInLeft  md:mr-10 text-md md:text-lg font-medium hover:bg-gray-100/5 hover:text-gray-200 hover:ring-1 hover:ring-gray-900"
            size="xl"
            onClick={() => setShowForm(true)}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
