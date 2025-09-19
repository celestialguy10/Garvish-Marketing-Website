import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Mainform2 from "../MainForm2";

const Introduction = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full relative lg:h-[100vh]" id="wda">
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
            Garvish Media Digital Advertising Services
          </motion.h1>
          <p className="text-lg lg:text-xl p-7 lg:p-10 text-gray-500 font-medium text-justify  ">
            "Our creative <strong>digital advertising</strong> services craft
            the perfect digital landscape for your business." We help businesses
            promote themselves through Google Ads and Social Media Marketing
            services, ensuring their company ads are accurately pitched against
            the correct keywords and optimized for the best PPC (Pay-Per-Click)
            value.
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
            src="/banner-image-2.png "
            alt="Social Media Icons"
            className="h-[20rem] md:h-[28rem] lg:h-[33rem] m-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
