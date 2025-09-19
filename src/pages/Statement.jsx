import { Button } from "@/components/ui/button";
import React, { useState } from "react";
Button;

import { motion } from "framer-motion";
import Mainform2 from "./MainForm2";

const Statement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative mb-10">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="flex flex-col gap-3 justify-between items-center text-center md:pt-14">
        <motion.h1
          initial={{ y: 20, clipPath: "inset( 100% 0 0 0)" }}
          whileInView={{ y: 0, clipPath: "inset( 0% 0 0 0)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-bold  md:mt-10 lg:mt-20 py-1 md:py-2"
        >
          Your Problem Statement Our Challenge
        </motion.h1>
        <p className="p-10 text-2xl text-gray-700 font-semibold">
          Contact Us for Free Consultation and We Ensure You Will Not go Empty
          Handed
        </p>
        <motion.div
          initial={{ y: 40, clipPath: "inset( 0 0 100% 0)" }}
          whileInView={{ y: -2, clipPath: "inset( 0 0 0% 0)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            className="mb-10 hover:bg-slate-50 hover:text-gray-950 hover:border-gray-950 border-2 lg:text-3xl lg:h-24 rounded-xl text-xl h-16"
            onClick={() => setShowForm(true)}
          >
            Get a Quote
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Statement;
