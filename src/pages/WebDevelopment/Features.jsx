import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Mainform2 from "../MainForm2";

const Features = () => {
  const divClassName =
    "flex flex-col h-full justify-between  p-4 rounded-xl shadow-2xl bg-gradient-to-b from-slate-200 to-gray-200 hover:scale-105 transition-all duration-100";
  const hClassName = "text-2xl font-semibold pb-4 underline-offset-4 underline";
  const pClassName = "text-gray-700 text-lg text-justify pr-2";
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2  md:gap-8 md:p-8 lg:gap-20 items-center  p-6 m-6 ">
        <div className={`${divClassName}`} id="cws">
          <h2 className={`${hClassName}`}>Customized Website Services</h2>
          <p className={`${pClassName}`}>
            Explore a unique and innovative vision for your business with our
            expert web development team. Enhance your brand's presence in your
            customers' minds with our comprehensive services including:
            <p>&rarr; Frontend Development Services</p>
            <p>&rarr; Backend Development Services</p>
            <p>&rarr; Full-Stack Services</p>
            <p>&rarr; Seamless Website Performance Across Platforms</p>
          </p>
          <div className="p-4">
            <img
              src="/web-development-1.webp"
              className="rounded-xl "
              alt="Customized Website Services"
            />
          </div>
        </div>
        <div className={`${divClassName}`} id="ecs">
          <h2 className={`${hClassName}`}>E-Commerce Solutions</h2>
          <p className={`${pClassName}`}>
            If you have a product and are ready to sell it to the masses without
            the help of big giants, we provide a custom-made e-commerce
            platform. Our services include but are not limited to:
            <p>
              &rarr; Professional-grade website with an inventory management
              system
            </p>
            <p>&rarr; Client database management system</p>
            <p>&rarr; Full-Stack Services</p>
            <p>&rarr; And many more</p>
          </p>
          <div className="p-4">
            <img
              src="/web-development-2.webp"
              alt="E-Commerce Solutions"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className={`${divClassName}`} id="cd">
          <h2 className={`${hClassName}`}>CMS Development</h2>
          <p className={`${pClassName}`}>
            Take full control of your content with our custom Content Management
            Systems (CMS). Whether you prefer WordPress, Joomla, or a bespoke
            CMS, we offer solutions that are easy to manage and scalable for
            future growth. Our CMS gives you complete control over your
            business.
          </p>
          <div className="p-4">
            <img
              src="/web-development-3.webp"
              alt="CMS Development"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className={`${divClassName}`} id="mfd">
          <h2 className={`${hClassName}`}>Mobile-First Design</h2>
          <p className={`${pClassName}`}>
            As of early 2024, with over 1.2 billion internet users in India,
            reaching potential customers through a mobile-friendly website is
            more crucial than ever. We specialize in mobile-first website design
            to help you connect with and grow your audience, ensuring your
            business reaches every mobile user.
          </p>
          <div className="p-4">
            <img
              src="/web-development-4.webp"
              alt="Mobile-First Design"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className={`${divClassName}`} id="osm">
          <h2 className={`${hClassName}`}>Ongoing Support and Maintenance</h2>
          <p className={`${pClassName}`}>
            We don't just stop at the launch of your website; we hold your hand
            till the end and provide you with every support needed to update,
            upkeep, secure, and enhance the visibility of your website. We
            understand and believe in a perpetual relationship and satisfied
            customers.
          </p>
          <div className="p-4">
            <img src="/web-development-5.webp" alt="" className="rounded-xl" />
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
    </div>
  );
};

export default Features;
