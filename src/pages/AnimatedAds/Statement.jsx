import { Button } from "@/components/ui/button";
import React, { useState } from "react";
Button;
import { motion } from "framer-motion";
import Mainform2 from "../MainForm2";

const Statement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative mb-20 mt-10 md:mb-32">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="flex flex-col gap-2 justify-between items-center text-center">
        <motion.h1
          initial={{ y: 20, clipPath: "inset( 100% 0 0 0)" }}
          whileInView={{ y: 0, clipPath: "inset( 0% 0 0 0)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold mt-5 md:mt-10 lg:mt-16 py-1 md:py-2"
        >
          Let’s Create Something Amazing
        </motion.h1>
        <p className="px-5 mb-5 text-xl text-gray-700 font-semibold">
          Contact us today to elevate your brand and drive real results.
        </p>
        <motion.div
          initial={{ y: 40, clipPath: "inset( 0 0 100% 0)" }}
          whileInView={{ y: -2, clipPath: "inset( 0 0 0% 0)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            className="hover:bg-slate-50 hover:text-gray-950 hover:border-gray-950 border-2 lg:text-3xl lg:h-24 rounded-xl text-xl h-16"
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
