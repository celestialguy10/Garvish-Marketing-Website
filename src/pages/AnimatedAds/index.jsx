import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Choose from "./Choose";
import Steps from "./Steps";
import Difference from "./Difference";
import Statement from "./Statement";
import Services from "./Services";
import Strengths from "./Strengths";
import Process from "./Process";

const AnimatedAds = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://garvishmarketing.com/seo" />
      </Helmet>
      <Hero />
      <Introduction />
      <Difference />
      <Steps />
      <Services />
      {/* <Process /> */}
      <Strengths />
      <Statement />
    </>
  );
};

export default AnimatedAds;
