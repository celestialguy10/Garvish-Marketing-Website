import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://garvishmarketing.com/web-development"
        />
      </Helmet>
      <Hero />
      <Features />
    </>
  );
};

export default WebDevelopment;
