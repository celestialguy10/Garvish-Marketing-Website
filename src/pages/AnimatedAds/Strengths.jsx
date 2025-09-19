import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidNotepad } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";

const Strengths = () => {
  const divClassName =
    "flex flex-col border-[2px] border-gray-700 p-4 gap-2  rounded-3xl bg-white mx-10 md:mx-0";
  const hClassName = "text-gray-800 text-2xl font-medium text-center";
  const pClassName = "text-left";

  return (
    <div className=" mt-4 w-full  py-10">
      <div className=" max-w-[800px] w-full mx-auto  ">
        <div className="flex flex-col items-center">
          <h2 className="mb-1 mx-auto w-full text-gray-900 text-4xl  font-bold text-center">
            Our Strengths
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className={`${divClassName}`}>
              <div className="flex justify-between items-center">
                <h3 className={`${hClassName}`}>Expert Team</h3>
                <FaPeopleGroup className="h-6 w-6 text-gray-700" />
              </div>

              <p className={`${pClassName}`}>
                Our team of experienced animators and creatives are dedicated to
                producing high-quality work that aligns with your vision.
              </p>
            </div>
            <div className={`${divClassName}`}>
              <div className="flex justify-between items-center">
                <h3 className={`${hClassName}`}>Custom Solutions</h3>
                <FaLightbulb className="h-6 w-6 text-gray-700" />
              </div>
              <p className={`${pClassName}`}>
                Every ad is tailored to your brand’s unique needs and goals.
              </p>
            </div>
            <div className={`${divClassName} md:translate-x-[50%]`}>
              <div className="flex justify-between items-center">
                <h3 className={`${hClassName}`}>Proven Results</h3>{" "}
                <BiSolidNotepad className="h-6 w-6 text-gray-700" />
              </div>
              <p className={`${pClassName}`}>
                We’ve helped countless brands increase their engagement and
                conversions through the power of animated ads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strengths;
