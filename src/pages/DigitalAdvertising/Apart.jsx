import React from "react";
import { motion } from "framer-motion";

const Apart = () => {
  return (
    <div className="overflow-hidden" id="wsa">
      <div className="bg-gray-200 p-5 mx-5 md:p-10 md:mx-10 rounded-3xl shadow-xl mb-4">
        <h2 className="text-center md:ml-40 text-3xl font-md">
          What Sets Us Apart?
        </h2>
        <div className="grid grid-cols-5 h-full">
          <div className="hidden md:block h-[75vh] mx-auto col-span-2">
            <img
              src="/meta-ads.jpg"
              alt="What sets us Apart"
              className="h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col col-span-5 md:col-span-3">
            <motion.p
              className="bg-gray-300 my-8 md:mr-16  p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2">
                Certified Team:{" "}
              </span>
              <span className="text-md text-thin text-gray-800">
                Our team consists of Google-certified campaign managers who
                ensure that all necessary standards are met before launching any
                campaign.
              </span>
            </motion.p>
            <motion.p
              className="bg-gray-300 my-8 md:mr-16 p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2 ">
                Original Ideas:{" "}
              </span>{" "}
              <span className="text-md text-thin text-gray-800">
                By adopting and using the latest tools, we create original and
                creative content for your business campaign, giving your
                business an authentic touch.
              </span>
            </motion.p>
            <motion.p
              className="bg-gray-300 my-8 md:mr-16 p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2">
                Timely Reports:{" "}
              </span>{" "}
              <span className="text-md text-thin text-gray-800">
                We provide you with weekly reports about your campaign and
                incorporate changes if required to make the campaign more
                effective.
              </span>
            </motion.p>
            <div className="hidden h-[40vh] mx-auto col-span-2">
              <img src="/da1.jpg" alt="" className="h-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apart;
