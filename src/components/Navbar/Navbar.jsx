import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useNavigate } from "react-router-dom";
import Mainform2 from "@/pages/MainForm2";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const toggleButton = () => {
    setShowModal((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setShowModal(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setShowModal(false);
    }
  };
  window.addEventListener("resize", handleResize);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 100; // Adjust this value as needed, 5rem = 80px
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const linkClassname =
    "block w-[10rem] py-2 cursor-pointer pl-2 text-lg font-weight-500  transition-all hover:bg-accent hover:text-gray-950 hover:underline hover:underline-offset-4 focus:bg-accent focus:text-accent-foreground poppins-regular ";
  const linkClassnamedigi =
    "block w-[15rem] py-2 cursor-pointer pl-2 text-lg font-weight-500  transition-colors hover:bg-accent hover:text-gray-950 hover:underline hover:underline-offset-4 focus:bg-accent focus:text-accent-foreground poppins-regular";
  const linkClassnamedigi2 =
    "block w-[18rem] py-2 cursor-pointer pl-2 text-lg font-weight-500  transition-colors hover:bg-accent hover:text-gray-950 hover:underline hover:underline-offset-4 focus:bg-accent focus:text-accent-foreground poppins-regular";

  return (
    <div className="relative">
      {showForm && <Mainform2 setShowForm={setShowForm} />}
      <nav className=" bg-white top-0 w-full z-10 h-[5.3rem] shadow-md opacity-95  fixed">
        <div
          className={`flex ${
            showModal ? "h-screen" : "h-full"
          } flex-row justify-between items-center  relative`}
        >
          {!showModal && (
            <button
              className="text-black md:hidden  ml-5 transition-all duration-300 focus:outline-none"
              onClick={toggleButton}
            >
              <svg
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          )}
          {showModal && (
            <button
              className="text-black focus:outline-none ml-5 transition-all duration-300 absolute top-7"
              onClick={toggleButton}
            >
              <svg
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
          {showModal && <MobileNavbar onClose={closeMobileMenu} />}
          {!showModal && (
            <Link to="/">
              <div>
                <img
                  src="/logo.png"
                  alt="Garvish Marketing Logo"
                  className="h-[4rem] md:h-[5rem] pl-1 "
                />
              </div>
            </Link>
          )}

          <div
            className="
        hidden md:flex flex-row gap-1 
        "
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `h-full pt-4 ${isActive ? "text-blue-400" : ""}`
                      }
                    >
                      Home
                    </NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu className="z-50">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      className={({ isActive }) =>
                        `h-full pt-4 ${isActive ? "text-blue-400" : ""}`
                      }
                      to="/seo"
                    >
                      SEO
                    </NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <a
                      className={`${linkClassname}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/seo");
                        setTimeout(() => {
                          handleScrollToSection("audit");
                        }, 100);
                      }}
                    >
                      SEO Audits
                    </a>
                    <a
                      className={`${linkClassname}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/seo");
                        setTimeout(() => {
                          handleScrollToSection("Key");
                        }, 100);
                      }}
                    >
                      Keywords Search
                    </a>

                    <a
                      className={`${linkClassname}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/seo");
                        setTimeout(() => {
                          handleScrollToSection("Off");
                        }, 100);
                      }}
                    >
                      Offpage SEO
                    </a>
                    <a
                      className={`${linkClassname}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/seo");
                        setTimeout(() => {
                          handleScrollToSection("On");
                        }, 100);
                      }}
                    >
                      Onpage SEO
                    </a>
                    <a
                      className={`${linkClassname}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/seo");
                        setTimeout(() => {
                          handleScrollToSection("tech");
                        }, 100);
                      }}
                    >
                      Technical SEO
                    </a>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu className="z-40">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      className={({ isActive }) =>
                        `h-full pt-4 ${isActive ? "text-blue-400" : ""}`
                      }
                      to="web-development"
                    >
                      Web Development
                    </NavLink>{" "}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-40">
                    <a
                      className={`${linkClassnamedigi}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/web-development");
                        setTimeout(() => {
                          handleScrollToSection("cws");
                        }, 100);
                      }}
                    >
                      Customized Website Services
                    </a>
                    <a
                      className={`${linkClassnamedigi}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/web-development");
                        setTimeout(() => {
                          handleScrollToSection("ecs");
                        }, 100);
                      }}
                    >
                      E-Commerce Solutions
                    </a>
                    <a
                      className={`${linkClassnamedigi}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/web-development");
                        setTimeout(() => {
                          handleScrollToSection("cd");
                        }, 100);
                      }}
                    >
                      CMS Development
                    </a>
                    <a
                      className={`${linkClassnamedigi}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/web-development");
                        setTimeout(() => {
                          handleScrollToSection("mfd");
                        }, 100);
                      }}
                    >
                      Mobile-First Design
                    </a>
                    <a
                      className={`${linkClassnamedigi}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/web-development");
                        setTimeout(() => {
                          handleScrollToSection("osm");
                        }, 100);
                      }}
                    >
                      Ongoing Support and Maintenance
                    </a>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu className="z-30">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      className={({ isActive }) =>
                        `h-full pt-4 ${isActive ? "text-blue-400" : ""}`
                      }
                      to="/digital-advertising"
                    >
                      Digital Advertising
                    </NavLink>{" "}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-30">
                    <a
                      className={`${linkClassnamedigi2}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/digital-advertising");
                        setTimeout(() => {
                          handleScrollToSection("wda");
                        }, 100);
                      }}
                    >
                      What is Digital Advertising?
                    </a>
                    <a
                      className={`${linkClassnamedigi2}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/digital-advertising");
                        setTimeout(() => {
                          handleScrollToSection("oe");
                        }, 100);
                      }}
                    >
                      Our Expertise
                    </a>
                    <a
                      className={`${linkClassnamedigi2}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/digital-advertising");
                        setTimeout(() => {
                          handleScrollToSection("bga");
                        }, 100);
                      }}
                    >
                      Benefits of Google Ads
                    </a>
                    <a
                      className={`${linkClassnamedigi2}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/digital-advertising");
                        setTimeout(() => {
                          handleScrollToSection("wsa");
                        }, 100);
                      }}
                    >
                      What Sets Us Apart?
                    </a>
                    <a
                      className={`${linkClassnamedigi2}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/digital-advertising");
                        setTimeout(() => {
                          handleScrollToSection("gst");
                        }, 100);
                      }}
                    >
                      Get Started today
                    </a>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavLink
                      className={({ isActive }) =>
                        `h-full pt-4 ${isActive ? "text-blue-400" : ""}`
                      }
                      to="/animated-ads"
                    >
                      Animated Ads
                    </NavLink>{" "}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {!showModal && (
            <div className="flex flex-row">
              <Button
                className="md:hidden animate-slideInLeft mr-2 md:mr-4 text-md md:text-lg font-medium hover:bg-gray-100 hover:text-gray-900 hover:ring-1 hover:ring-gray-900"
                size="xl"
                onClick={() => setShowForm(true)}
              >
                Get a Quote
              </Button>

              <Link to="/login">
                <Button
                  className="animate-slideInLeft hidden md:block mr-5 md:mr-5 text-lg font-medium bg-gray-200"
                  variant="outline"
                  size="xl"
                >
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
