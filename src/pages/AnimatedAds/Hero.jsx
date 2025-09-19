import React from "react";

const Hero = () => {
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
        <source src="/animatedvid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
