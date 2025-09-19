import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Expertise = () => {
  return (
    <div
      className="mb-20 m-3 py-8 bg-gray-200 md:p-8 md:mx-10 rounded-3xl shadow-xl overflow-hidden "
      id="oe"
    >
      <h2 className="text-center text-5xl font-md mb-4">Our Expertise</h2>
      <div className="flex flex-col md:flex-row md:mx-10 gap-8 mb-8 ">
        <div className="flex-col md:border-r-2 md:border-gray-500 ">
          <h2 className="text-center text-2xl font-semibold">Google Ads</h2>
          <p className=" p-4 text-xl flex ">
            <span>
              <FaLongArrowAltRight className="inline mb-1" />
            </span>
            <span>
              <span className="underline underline-offset-4">
                Targeted Advertising:{" "}
              </span>
              <span className="text-justify">
                Connect with potential customers who are actively searching for
                products or services similar to those provided by your company.
              </span>
            </span>
          </p>
          <p className=" p-4 text-xl flex text-justify">
            <span>
              <FaLongArrowAltRight className="inline mb-1" />
            </span>
            <span>
              <span className="underline underline-offset-4">
                Optimized Campaigns:{" "}
              </span>
              Our expert team ensures your ads achieve maximum visibility and
              click-through rates within your defined budget.
            </span>
          </p>
          <p className=" p-4 text-xl flex text-justify">
            <span>
              <FaLongArrowAltRight className="inline mb-1" />
            </span>
            <span>
              <span className="underline underline-offset-4">
                Innovative Ad Content:{" "}
              </span>
              Our creative team produces authentic and genuine promotional
              content, including videos, banners, and text messages, to enhance
              the visibility of your business.
            </span>
          </p>
        </div>
        <div className="flex-col ">
          <h2 className="text-center text-2xl font-semibold">
            Social Media Marketing
          </h2>
          <p className=" p-4 text-xl flex text-justify">
            <span>
              <FaLongArrowAltRight className="inline mb-1" />
            </span>
            <span>
              <span className="underline underline-offset-4">
                Be On Social Platforms:{" "}
              </span>
              Boost your business to the next level by utilizing platforms like
              Facebook, Instagram, LinkedIn, and Twitter to reach and engage
              your target audience.
            </span>
          </p>
          <p className=" p-4 text-xl flex text-justify">
            <span>
              <FaLongArrowAltRight className="inline mb-1" />
            </span>
            <span>
              <span className="underline underline-offset-4">
                Effective Ad Placement:{" "}
              </span>
              Our campaigners strategically place your ads to maximize impact,
              driving engagement and conversions.
            </span>
          </p>
        </div>
        <div className="flex-col"></div>
      </div>
    </div>
  );
};

export default Expertise;
