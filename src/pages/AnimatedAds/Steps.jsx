import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="mb-40 md:mb-20 w-full max-w-[1000px] mx-auto">
      <h2 className="text-center text-xl font-[300] text-gray-700 underline underline-offset-2">
        Steps for our ads:
      </h2>
      <div className="hidden  relative mt-32 md:mt-0 md:flex items-center justify-center">
        <div className="absolute md:relative  flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 * 0.7 }}
            className="w-[110px] h-[110px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-md">Grab Attention</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 * 0.7 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative  flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1 * 0.7 }}
            className="w-[130px] h-[130px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-lg">
              Simplify Complexity
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1 * 0.7 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative   flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 2 * 0.7 }}
            className="w-[150px] h-[150px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-lg">Boost Engagement</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 2 * 0.7 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative   flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 3 * 0.7 }}
            className="w-[170px] h-[170px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-xl">Enhance Branding</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 3 * 0.7 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative  flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 4 * 0.7 }}
            className="w-[190px] h-[190px]   flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-xl">
              {" "}
              Increase Your sales
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex  relative mt-32 md:mt-0 md:hidden items-center justify-center">
        <div className="absolute md:relative  flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 * 1.2 }}
            className="w-[110px] h-[110px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-md">Grab Attention</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 * 1.2 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative  flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1 * 1.2 }}
            className="w-[130px] h-[130px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-lg">
              Simplify Complexity
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1 * 1.2 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative   flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 2 * 1.2 }}
            className="w-[150px] h-[150px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-lg">Boost Engagement</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 2 * 1.2 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative   flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 3 * 1.2 }}
            className="w-[170px] h-[170px]  flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-xl">Enhance Branding</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 3 * 1.2 }}
          >
            <FaLongArrowAltRight className="hidden md:block text-gray-800 h-10 w-9" />
          </motion.div>
        </div>
        <div className="absolute md:relative  flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 4 * 1.2 }}
            className="w-[190px] h-[190px]   flex items-center justify-center rounded-full border-2 border-gray-800 bg-white"
          >
            <p className="text-center font-[400] text-xl">
              {" "}
              Increase Your sales
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
