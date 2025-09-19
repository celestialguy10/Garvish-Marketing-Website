import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import { motion } from "framer-motion";
import Mainform2 from "../MainForm2";

const Statement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-[calc(100vh-8rem)] relative" id="gst">
      {showForm && <Mainform2 setShowForm={setShowForm} />}

      <div className="flex flex-col gap-3 justify-between items-center text-center">
        <motion.h1
          initial={{ y: 20, clipPath: "inset( 100% 0 0 0)" }}
          whileInView={{ y: 0, clipPath: "inset( 0% 0 0 0)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold mt-5 md:mt-10 lg:mt-20 py-1 md:py-2"
        >
          Get Started Today
        </motion.h1>
        <p className="p-10 text-xl text-gray-700 font-semibold">
          Ready to take your digital advertising to the next level? Contact{" "}
          <strong className="font-bold">Garvish Marketing</strong> today to
          learn more about our services and how we can help you achieve your
          marketing goals. Let’s work together to create impactful advertising
          campaigns that drive growth and success for your business.
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
