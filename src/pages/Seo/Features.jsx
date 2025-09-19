import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Mainform2 from "../MainForm2";
const Features = () => {
  const hClassName =
    "text-xl md:text-2xl font-semibold pb-2 md:lg-3 lg:pb-5 p-1 text-purple-800 transition-all duration-300 text-left md:text-left";
  const pClassName = "text-gray-600 text-md md:text-lg text-justify pr-2 pb-3";
  const divClassName =
    "flex flex-col justify-center  bg-white shadow-xl lg:h-52 mt-10 md:pl-4 rounded-2xl border-purple-200 border-2 transition-all duration-300 p-4";
  const divClassName2 =
    "flex flex-col justify-center bg-white shadow-xl lg:h-72 mt-10 md:pl-4 rounded-2xl border-purple-200 border-2 transition-all duration-300 p-4";
  const divClassName3 =
    "flex flex-col justify-center bg-white shadow-xl lg:h-100  mt-10 md:pl-4 rounded-2xl border-purple-200 border-2 transition-all duration-300 p-4";

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 ">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="flex flex-col gap-5 p-10">
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="w-[80vw]  hidden lg:block ">
            <img src="/seo-1.webp" alt="What We Offer" className="rounded-xl" />
          </div>
          <motion.div
            className={`${divClassName}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:hidden ">
              <img
                src="/seo-1.webp"
                alt="What We Offer"
                className="rounded-xl"
              />
            </div>
            <h2 className={`${hClassName}`}>What We Offer</h2>
            <p className={`${pClassName}`}>
              Whether you’re aiming to fill specific gaps or need comprehensive
              SEO solutions, our customizable services can help. Discover our
              tailored plans designed to capture organic search traffic and
              convert it into revenue.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-row gap-5" id="audit">
          <motion.div
            className={`${divClassName2}
          
           `}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:hidden ">
              <img
                src="/seo-2.webp"
                alt="Comprehensive SEO Audit"
                className="rounded-xl"
              />
            </div>
            <h2 className={`${hClassName} `}>Comprehensive SEO Audit</h2>
            <p className={`${pClassName} `}>
              Our dedicated account manager will thoroughly analyze your website
              using the latest technological tools. We will focus on:
              <p>&rarr; Competitor Analysis</p>
              <p>&rarr; Target Audience and Keywords</p>
              <p>&rarr; Google Crawlability</p>
              <p>&rarr; Traffic Analysis</p>
              <p>&rarr; Additional Insights</p>
            </p>
          </motion.div>
          <div className="hidden lg:block">
            <img
              src="/seo-2.webp"
              alt="Comprehensive SEO Audit"
              className="w-[70vw] rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center" id="Key">
          <div className="w-[80vw] hidden lg:block">
            <img
              src="/seo-3.webp"
              alt="In-Depth Keyword Research"
              className="rounded-xl"
            />
          </div>
          <motion.div
            className={`${divClassName3}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:hidden ">
              <img
                src="/seo-3.webp"
                alt="In-Depth Keyword Research"
                className="rounded-xl"
              />
            </div>
            <h2 className={`${hClassName}`}>In-Depth Keyword Research</h2>
            <p className={`${pClassName}`}>
              Our expert account manager will conduct a thorough analysis of
              your website and products to perform comprehensive keyword
              research tailored for your business. This includes:
              <p>&rarr; Website and Product Analysis</p>
              <p>&rarr; Competitive Comparison</p>
              <p>&rarr; Strategic Planning</p>
            </p>
          </motion.div>
        </div>
        <div
          className="flex flex-row gap-5 justify-center items-center"
          id="Off"
        >
          <motion.div
            className={`${divClassName3}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:hidden ">
              <img
                src="/seo-4.webp"
                alt="Off-Page SEO Services"
                className="rounded-xl"
              />
            </div>
            <h2 className={`${hClassName}`}>Off-Page SEO Services</h2>
            <p className={`${pClassName}`}>
              Boost your website’s visibility and authority with our
              comprehensive Off-Page SEO services. Our experts will ensure that
              the standard marketing practices are used to optimize the page
              content for maximum visibility.
              <p>&rarr; Unique and Engaging Content</p>
              <p>&rarr; Link Building</p>
              <p>&rarr; Social Media</p>
              <p>&rarr; Brand Mentions and More</p>
            </p>
          </motion.div>
          <div className="hidden lg:block pt-10">
            <img
              src="/seo-4.webp"
              alt="Off-Page SEO Services"
              className="w-[70vw]  rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5" id="On">
          <div className="w-[80vw] p-6 hidden lg:block">
            <img
              src="/seo-5.webp"
              alt="On-Page SEO Services"
              className="rounded-xl"
            />
          </div>
          <motion.div
            className={`${divClassName3}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:hidden ">
              <img
                src="/seo-5.webp"
                alt="On-Page SEO Services"
                className="rounded-xl"
              />
            </div>
            <h2 className={`${hClassName}`}>On-Page SEO Services</h2>
            <p className={`${pClassName}`}>
              Our experts meticulously analyze the source code of your website
              to gain comprehensive insights. This enables us to create a
              detailed checklist to optimize your webpages effectively.
              <p>&rarr; Title Tag Optimization</p>
              <p>&rarr; Head Tags Optimization</p>
              <p>&rarr; Meta Keywords Analysis and Implementation</p>
              <p>&rarr; Anchor Text Optimization and More</p>
            </p>
          </motion.div>
        </div>
        <div className="flex flex-row gap-5" id="tech">
          <motion.div
            className={`${divClassName3}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:hidden ">
              <img
                src="/seo-6.webp"
                alt="Technical SEO Services"
                className="rounded-xl"
              />
            </div>
            <h2 className={`${hClassName}`}>Technical SEO Services</h2>
            <p className={`${pClassName}`}>
              Just as important as On-Page and Off-Page SEO, Technical SEO is
              crucial for improving your website's ranking and quality. Our
              Technical SEO experts ensure your website is user-friendly and
              well-organized.
              <p>&rarr; Uploading of Sitemap.XML and Sitemap.HTML</p>
              <p>&rarr; Induction of Robots.txt file</p>
              <p>&rarr; Reduction of Page Load Time</p>
              <p>&rarr; Canonical Tags</p>
            </p>
          </motion.div>
          <div className="hidden lg:block p-10">
            <img
              src="/seo-6.webp"
              alt="Technical SEO Services"
              className="w-[70vw] rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="text-center md:text-left">
        <Button
          className="text-lg font-medium hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 md:ml-10 mb-10"
          size="xl"
          onClick={() => setShowForm(true)}
        >
          Get a Quote
        </Button>
      </div>
    </div>
  );
};

export default Features;
