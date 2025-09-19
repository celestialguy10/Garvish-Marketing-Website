import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileNavbar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);

    onClose();
  };

  return (
    <div className="w-full h-[100vh] bg-white opacity-100 relative top-20 text-center transition-all duration-300">
      <div className="flex flex-col gap-10 justify-center items-center">
        <Button
          variant="link"
          className="text-2xl font-medium"
          onClick={() => {
            handleNavigation("/");
          }}
        >
          {/* <Link to="/">Home</Link> */}
          Home
        </Button>
        <Button
          variant="link"
          className="text-2xl font-medium"
          onClick={() => {
            handleNavigation("/seo");
          }}
        >
          {/* <Link to="/seo">SEO</Link> */}
          SEO
        </Button>
        <Button
          variant="link"
          className="text-2xl font-medium"
          onClick={() => {
            handleNavigation("/web-development");
          }}
        >
          {/* <Link to="/web-development">Web Development</Link> */}
          Web Development
        </Button>
        <Button
          variant="link"
          className="text-2xl font-medium"
          onClick={() => {
            handleNavigation("/digital-advertising");
          }}
        >
          {/* <Link to="/digital-advertising">Digital Advertising</Link> */}
          Digital Advertising
        </Button>
        {/* <Button
          variant="link"
          className="text-2xl font-medium"
          onClick={() => {
            handleNavigation("/influencer-marketing");
          }}
        >
          Influencer Marketing
        </Button> */}
        <Button variant="link" className="text-2xl font-medium">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavbar;
