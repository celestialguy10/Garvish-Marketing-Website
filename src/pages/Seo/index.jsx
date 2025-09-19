import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://garvishmarketing.com/seo" />
      </Helmet>
      <Hero />
      <Features />
    </>
  );
};

export default Seo;
