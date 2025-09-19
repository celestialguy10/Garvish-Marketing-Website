import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Mainform2 from "../MainForm2";

const Introduction = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="relative w-full mb-20" id="wda">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex flex-col flex-1 justify-between m-5 rounded-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-800 text-5xl sm:pt-10 sm:pl-10 font-bold text-center lg:text-left"
          >
            Animated Ads: Captivate, Engage, and Convert
          </motion.h1>
          <p className="text-lg lg:text-xl p-7 lg:p-10 text-gray-500 font-medium text-justify  ">
            In an era where attention spans are short, animated ads are a
            game-changer. They’re not just ads—they’re stories that captivate
            your audience, turning complex messages into visually engaging
            experiences. With animation, you can bring your brand to life,
            making it more relatable, memorable, and effective.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Button
              className="mr-10 text-lg font-medium mt-1  hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 w-40 ml-10 mb-3"
              size="xl"
              onClick={() => setShowForm(true)}
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="flex-1  
        "
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/animated-ads6.png "
            alt="Social Media Icons"
            className="h-[15rem]  md:h-[15rem] lg:h-[20rem] "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
