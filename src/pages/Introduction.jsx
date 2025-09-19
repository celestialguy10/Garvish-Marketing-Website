import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Mainform2 from "./MainForm2";
import { useState } from "react";

const Introduction = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative w-full ">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex flex-col flex-1 justify-between m-5 rounded-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-800 text-5xl sm:pt-10 sm:pl-10 font-bold text-center lg:text-left"
          >
            Garvish Marketing
          </motion.h1>
          <p className="text-lg lg:text-xl p-7 lg:p-10 text-gray-500 font-medium text-justify  ">
            At Garvish Marketing, we pride ourselves on delivering reliable and
            budget-friendly{" "}
            <strong className="font-medium">digital marketing services</strong>.
            Our approach involves thorough research of client goals and
            inclusive consultation at every campaign stage. In today's
            competitive landscape, where new brands constantly emerge with
            technological advancements, it's crucial for both new and existing
            companies to choose an effective marketing agency. We ensure our
            clients' voices reach their target customers effectively. Our
            campaigners analyze client businesses, identify customer pain
            points, and work to enhance customer experience across all
            touchpoints. By leveraging digital marketing, we help businesses
            connect with their audiences meaningfully and impactfully.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Button
              className="mr-10 text-lg font-medium mt-2  hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 w-40 ml-10 mb-3"
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/banner-image-2.png "
            alt="Social media icons"
            className="h-[20rem] md:h-[28rem] lg:h-[33rem] m-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
