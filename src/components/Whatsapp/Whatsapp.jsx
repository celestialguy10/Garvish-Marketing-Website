import React from "react";
import { Link } from "react-router-dom";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-[50%] translate-y-[50%] right-2 h-16 w-16  hover:cursor-pointer">
      <a
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaSquareWhatsapp className="h-full w-full rounded-xl bg-white text-[rgb(37,211,102)]" />
      </a>
    </div>
  );
};

export default Whatsapp;
