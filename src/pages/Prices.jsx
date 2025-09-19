import React, { useState } from "react";
import {
  FaShoppingBag,
  FaHouseUser,
  FaBuilding,
  FaShoppingCart,
  FaLongArrowAltRight,
} from "react-icons/fa";

import { FaCheckCircle } from "react-icons/fa";
import Mainform2 from "./MainForm2";
import { Button } from "@/components/ui/button";

const Prices = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative mb-20 md:mt-40">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <div className="max-w-[1300px] w-full h-full mx-auto flex flex-col justify-center items-center ">
        <h2 className="uppercase text-gray-900 text-5xl font-bold mb-10 text-center ">
          Our Packages
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-4 mx-4 lg:mx-0">
          <div className=" border-[1px] rounded-3xl border-gray-400  flex flex-col justify-between   p-4">
            <div className="flex flex-col ">
              <FaShoppingBag className="mx-auto bg-gray-900 h-16 w-16 rounded-full p-3 text-gray-100 mb-2" />
              <h3 className="mx-auto text-lg text-gray-800 font-semibold uppercase underline underline-offset-4 mb-1 tracking-wide">
                Basic Package
              </h3>
              <h4 className="mx-auto font-bold text-stone-800 text-2xl mb-4">
                Rs 5,000 - 20,000
              </h4>{" "}
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                1 free Domain
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                1 Year free hosting
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                4-6 Proffesional Emails
              </p>
              <p className="text-lg text-gray-800 ">
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                4-6 basic pages
              </p>
              <p className="text-lg text-gray-800">
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                4 keywords for SEO
              </p>
              <p className="flex text-lg text-gray-800">
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Google Analytics Information
              </p>
              <h3 className="ml-2 mt-6 text-lg text-gray-800 font-semibold ">
                Paid Add-ons:
              </h3>
              <p className="text-lg text-gray-800 flex">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Google ads, Meta ads, Animated ads
              </p>
            </div>
            <Button
              className="text-md md:text-lg font-medium hover:bg-gray-900/5 hover:text-green-600 hover:ring-1 hover:ring-green-900 text-center bg-green-600 mt-2"
              size="lg"
              onClick={() => setShowForm(true)}
            >
              Get a Quote
            </Button>
          </div>
          <div className=" border-[1px] rounded-3xl border-gray-400  flex flex-col justify-between   p-4">
            <div className="flex flex-col ">
              <FaHouseUser className="mx-auto bg-gray-900 h-16 w-16 rounded-full p-3 text-gray-100 mb-2" />
              <h3 className="mx-auto text-lg text-gray-800 font-semibold uppercase underline underline-offset-4 mb-1 tracking-wide">
                Small Business Package
              </h3>
              <h4 className="mx-auto font-bold text-stone-800 text-2xl mb-4">
                Rs 25,000 - 1,00,000
              </h4>

              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                1 free Domain
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                1 Year free hosting
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                10-12 Proffesional Emails
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                10-12 basic pages
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                12 keywords for SEO
              </p>
              <p className="text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                (Animated Home Page)
              </p>
              <p className="flex text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Google Analytics Integration
              </p>
              <p className="flex text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Payment Gateway Integration
              </p>
              <p className="flex text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Whatsapp Chat Integration
              </p>
              <p className="flex text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Customer Query Form Integration
              </p>
              <p className="flex text-lg text-gray-800">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Customer Log-in Integration
              </p>
              <h3 className="ml-2 mt-6 text-lg text-gray-800 font-semibold ">
                Paid Add-ons:
              </h3>

              <p className="text-lg text-gray-800 flex">
                {" "}
                <span>
                  <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
                </span>
                Google ads, Meta ads, Animated ads
              </p>
            </div>
            <Button
              className="text-md md:text-lg font-medium hover:bg-gray-900/5 hover:text-green-600 hover:ring-1 hover:ring-green-900 text-center bg-green-600 mt-2"
              size="lg"
              onClick={() => setShowForm(true)}
            >
              Get a Quote
            </Button>
          </div>
          <div className=" border-[1px] rounded-3xl border-gray-400  flex flex-col   p-4">
            <FaBuilding className="mx-auto bg-gray-900 h-16 w-16 rounded-full p-3 text-gray-100 mb-2" />
            <h3 className="mx-auto text-lg text-gray-800 font-semibold uppercase underline underline-offset-4 mb-1 tracking-wide">
              Medium Business Package
            </h3>
            <h4 className="mx-auto font-bold text-stone-800 text-2xl mb-4">
              Rs 80,000 - 1,00,000
            </h4>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              1 free Domain
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              1 Year free hosting
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              10-20 Proffesional Emails
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              10-20 Web Pages
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              20 keywords for SEO
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              (Animated Pages as Required)
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Google Analytics Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Payment Gateway Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Whatsapp Chat Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Customer Query Form Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Customer Log-in Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              4 Animated ads
            </p>
            <h3 className="ml-2 mt-6 text-lg text-gray-800 font-semibold ">
              Paid Add-ons:
            </h3>

            <p className="text-lg text-gray-800 flex">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Google ads, Meta ads, Animated ads
            </p>
            <Button
              className="text-md md:text-lg font-medium hover:bg-gray-900/5 hover:text-green-600 hover:ring-1 hover:ring-green-900 text-center bg-green-600 mt-2"
              size="lg"
              onClick={() => setShowForm(true)}
            >
              Get a Quote
            </Button>
          </div>
          <div className=" border-[1px] rounded-3xl border-gray-400  flex flex-col   p-4">
            <FaShoppingCart className="mx-auto bg-gray-900 h-16 w-16 rounded-full p-3 text-gray-100 mb-2" />
            <h3 className="mx-auto text-lg text-gray-800 font-semibold uppercase underline underline-offset-4 mb-1 tracking-wide">
              E-Commerce Package
            </h3>
            <h4 className="mx-auto font-bold text-stone-800 text-2xl mb-4">
              Rs 1,50,000 - 5,00,000
            </h4>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              1 free Domain
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              1 Year free hosting
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              25+ Proffesional Emails
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              25+ Web Pages
            </p>
            <p className="text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              20+ keywords for SEO
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              (Animated Pages as Required)
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Google Analytics Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              All types of Payment Gateway Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Whatsapp Chat Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Customer Query Form Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Customer Log-in Integration
            </p>
            <p className="flex text-lg text-gray-800">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              20+ Animated ads
            </p>
            <h3 className="ml-2 mt-6 text-lg text-gray-800 font-semibold ">
              Paid Add-ons:
            </h3>

            <p className="text-lg text-gray-800 flex">
              {" "}
              <span>
                <FaCheckCircle className="text-green-500 inline mr-1 rounded-full" />
              </span>
              Google ads, Meta ads, Animated ads
            </p>
            <Button
              className="text-md md:text-lg font-medium hover:bg-gray-900/5 hover:text-green-600 hover:ring-1 hover:ring-green-900 text-center bg-green-600 mt-2"
              size="lg"
              onClick={() => setShowForm(true)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
