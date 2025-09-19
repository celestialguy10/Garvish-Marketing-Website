import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./lib/ScrollTop";

import "../src/App.css";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import InactivityTimer from "./lib/InactivityTimer";
import { useState } from "react";

const App = () => {
  return (
    <div className="poppins-light relative">
      <ScrollToTop />
      <Navbar />
      {/* <InactivityTimer /> */}
      <Outlet />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default App;
