import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-slate-900 p-8 overflow-hidden">
      <div className="flex flex-col sm:grid sm:grid-cols-3 md:grid-cols-4  ">
        <div className="mt-40 hidden md:block">
          <img src="/logo.png" className="h-12 rounded-md " alt="" />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mt-10 sm:mt-20">
          <h2 className="text-slate-100 text-xl md:text-4xl font-light">
            Links
          </h2>
          <Link className="text-gray-400 hover:underline text-xl" to="/">
            Home
          </Link>
          <Link className="text-gray-400 text-xl hover:underline" to="/about">
            About us
          </Link>
          <p className="text-gray-400 text-xl hover:underline">Blogs</p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mt-10 sm:mt-20">
          <h2 className="text-slate-100 text-xl md:text-4xl font-light ">
            Product
          </h2>
          <Link
            className="text-gray-400 text-xl hover:underline"
            to="https://forms.gle/8VwFUdsyKk8oQ5Zu8"
          >
            Schedule a call
          </Link>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 mt-10 sm:mt-20 overflow-hidden">
          <h2 className="text-slate-100 text-xl md:text-4xl font-light">
            Contact Us!
          </h2>
          <a
            className="text-gray-400  hover:underline flex flex-row items-center gap-1 text-xl  break-words"
            href="mailto:garvishmarketing@gmail.com"
          >
            <MdEmail />
            <span className="break-all">Email</span>
          </a>
          <a
            className="text-gray-400  hover:underline flex flex-row items-center gap-1 text-xl  break-words"
            href="mailto:garvishmarketing@gmail.com"
          >
            <FaSquareXTwitter />
            <span className="break-all">X (Twitter)</span>
          </a>
          <a
            className="text-gray-400  hover:underline flex flex-row items-center gap-1 text-xl  break-words"
            href="https://www.linkedin.com/company/garvish-marketing-pvt-ltd/"
          >
            <FaLinkedin />
            <span className="break-all">Linkedin</span>
          </a>
          <a
            className="text-gray-400  hover:underline flex flex-row items-center gap-1 text-xl  break-words"
            href="https://www.instagram.com/garvishmarketing/s"
          >
            <FaInstagramSquare />
            <span className="break-all">Instagram</span>
          </a>
        </div>
      </div>
      <div class="mx-auto w-full max-w-screen-lg h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-10"></div>
      <p className="  bottom-20 text-center mt-6 text-gray-50 text-xl ">
        Copyright 2024 Garvish Marketing™ All Rights Reserved
      </p>
      <div className="mt-2 flex flex-col md:flex-row items-center justify-center md:gap-4">
        <Link to="/privacy-policy" className="text-gray-400">
          Privacy Policy
        </Link>
        <Link to="/terms-and-conditions" className="text-gray-400">
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
