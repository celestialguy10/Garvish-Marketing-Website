import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className="overflow-hidden" id="bga">
      <div className="bg-gray-100 p-5 mx-5 md:p-10 md:mx-10 rounded-3xl shadow-xl mb-10">
        <h2 className="text-center md:ml-32 text-3xl font-md text-gray-950">
          Benefits of Google Ads / Meta Ads Services
        </h2>
        <div className="grid grid-cols-5 h-full">
          <div className="flex flex-col col-span-5 md:col-span-3">
            <motion.p
              className="bg-gray-200 my-4 md:ml-16  p-4 rounded-2xl shadow-md mt-8 text-justify text-gray-900"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2">
                Increased Visibility:{" "}
              </span>
              <span className="text-md text-thin text-gray-800 ">
                For new businesses, it enhances your visibility, and for
                existing businesses, it provides an additional boost to your
                sales.
              </span>
            </motion.p>
            <motion.p
              className="bg-gray-200 my-4 md:ml-16 p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2 text-gray-900">
                Faster Results:{" "}
              </span>{" "}
              <span className="text-md text-thin text-gray-800 ">
                Delivers quicker outcomes compared to other forms of advertising
                in the market.
              </span>
            </motion.p>
            <motion.p
              className="bg-gray-200 my-4 md:ml-16 p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2 text-gray-900">
                Targeted Audience:{" "}
              </span>{" "}
              <span className="text-md text-thin text-gray-800 ">
                Allows you to focus on a potential audience to achieve optimal
                results.
              </span>
            </motion.p>
            <motion.p
              className="bg-gray-200 my-4 md:ml-16 p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2 text-gray-900">
                Competitive Edge:{" "}
              </span>{" "}
              <span className="text-md text-thin text-gray-800 ">
                Your competitors are already leveraging these tools, so don't
                get left behind.
              </span>
            </motion.p>
            <motion.p
              className="bg-gray-200 my-4 md:ml-16 p-4 rounded-2xl shadow-md text-justify"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xl  font-semibold  underline underline-offset-2 mr-2 text-gray-900">
                Cost-Effective:{" "}
              </span>{" "}
              <span className="text-md text-thin text-gray-800 ">
                One of the most budget-friendly means of achieving awareness,
                consideration, conversion, and re-engagement.
              </span>
            </motion.p>
            <div className="md:hidden h-[50vh] mx-auto mt-6 col-span-2">
              <img src="/da1.jpg" alt="" className="h-full rounded-xl" />
            </div>
          </div>
          <div className="hidden md:block h-[85vh] mx-auto mt-4 col-span-2">
            <img
              src="/google-ads.jpg"
              alt="Benefits of Google ads"
              className="h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
