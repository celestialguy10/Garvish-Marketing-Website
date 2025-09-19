import Hero from "@/components/Hero/Hero";
import React, { useEffect, useState } from "react";
import Introduction from "../Introduction";
import Offer from "../Offer";
import Reasons from "../Reasons";
import Statement from "../Statement";
import { Helmet } from "react-helmet";
import Prices from "../Prices";
import Mainform2 from "../MainForm2";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative">
      {showForm && <Mainform2 setShowForm={setShowForm} />}{" "}
      <Helmet>
        <link rel="canonical" href="https://www.yoursite.com/your-page-url" />
      </Helmet>
      <Hero />
      <Introduction />
      <Offer />
      <Reasons />
      <Statement />
      <Prices />
    </div>
  );
};

export default Home;
