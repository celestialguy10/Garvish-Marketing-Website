import React from "react";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Apart from "./Apart";
import Benefits from "./Benefits";
import Expertise from "./Expertise";
import GetStarted from "./GetStarted";
import { Helmet } from "react-helmet";

const DigitalAdvertising = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://garvishmarketing.com/digital-advertising"
        />
      </Helmet>
      <Hero />
      <Introduction />
      <Expertise />
      <Benefits />
      <Apart />
      <GetStarted />
    </>
  );
};

export default DigitalAdvertising;
