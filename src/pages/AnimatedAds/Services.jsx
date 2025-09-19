import React from "react";

const Services = () => {
  const divClassName =
    "flex flex-col border-[2px] border-gray-700  gap-2 md:hover:-translate-y-2 md:transition-translate duration-300 rounded-lg bg-white mx-16 md:mx-0";
  const hClassName =
    "text-white text-2xl p-4 font-medium text-center rounded-t-sm w-full h-full bg-gray-700";
  const pClassName = "py-4 text-center";

  return (
    <div className="mt-4 w-full bg-gray-200 py-10">
      <div className=" max-w-[1100px] w-full mx-auto  ">
        <div className="flex flex-col items-center">
          <h2 className="mb-1 mx-auto w-full text-gray-900 text-4xl  font-bold text-center">
            Our Animated Ad Services
          </h2>
          <p className=" text-center text-lg">
            We create animated ads that not only look great but also deliver
            results. Whether you need a quick social media clip or a detailed
            product explainer, our team is here to help.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className={`${divClassName}`}>
              <h3 className={`${hClassName}`}>Explainer Videos</h3>
              <p className={`${pClassName}`}>
                Simplify your product or service with a short, animated
                explainer that tells your story and highlights your unique
                value.
              </p>
            </div>
            <div className={`${divClassName}`}>
              <h3 className={`${hClassName}`}>Social Media Ads</h3>
              <p className={`${pClassName}`}>
                Boost your online presence with quick, eye-catching animated ads
                designed to grab attention on platforms like Instagram,
                Facebook, and TikTok.
              </p>
            </div>
            <div className={`${divClassName}`}>
              <h3 className={`${hClassName}`}>Product Demos</h3>
              <p className={`${pClassName}`}>
                Showcase your product’s features and benefits in action with
                detailed, visually engaging demos that drive conversions.
              </p>
            </div>
            <div className={`${divClassName}`}>
              <h3 className={`${hClassName}`}>Storytelling Ads</h3>
              <p className={`${pClassName}`}>
                Connect with your audience on an emotional level by telling a
                compelling story through animation, leaving a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
