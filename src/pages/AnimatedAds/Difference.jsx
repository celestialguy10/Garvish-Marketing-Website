import { Separator } from "@/components/ui/separator";
import React from "react";

const Difference = () => {
  return (
    <div className="w-full mb-32  max-w-[1100px] mx-auto">
      <div className="flex flex-col h-full">
        <h2 className="mb-5 mx-auto w-full text-gray-900 text-4xl  font-bold text-center">
          Video Ads vs HTML5 Ads
        </h2>
        <div className="flex flex-col md:flex-row w-full mx-auto text-center h-full border-2 border-gray-200 rounded-2xl p-4  transition-shadow duration-300 hover:shadow-md">
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl italic text-gray-900 font-[400] underline underline-offset-[3px] text-center p-2">
              Video Ads
            </h2>
            <p className="text-justify text-lg p-2 px-4">
              Video ads are typically short, engaging videos that can be used
              across various platforms such as social media, YouTube, and
              streaming services. These ads are designed to capture attention
              quickly and deliver your message in a visually compelling way.
            </p>
          </div>
          <Separator className="mx-auto h-full " orientation="vertical" />
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl italic text-gray-900 font-[400] underline underline-offset-[3px] text-center p-2">
              HTML5 Ads
            </h2>
            <p className="text-justify text-lg p-2 px-4">
              HTML5 ads are interactive, animated ads that run directly in web
              browsers. These ads are built using HTML5, CSS, and JavaScript,
              allowing them to be lightweight, interactive, and responsive to
              different screen sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
