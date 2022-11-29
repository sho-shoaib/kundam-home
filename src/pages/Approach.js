import React from "react";
import ApproachGrid from "../components/ApproachGrid";
import bgApproach from "../images/bg-aproach.png";
import missionGif from "../images/mission.gif";
import visionGif from "../images/vision.gif";

const Approach = () => {
  return (
    <div id='approach' className='pt-28 z-20'>
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "rgba(255,255,255,0.8)",
        }}
        className='p-10 rounded-xl m-auto text-center hover:shadow-lg shadow-md transition duration-300 flex flex-col gap-7'
      >
        <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow'>
          OUR APPROACH
        </h1>
        <p className='text-xl para font-semibold'>
          “KUNDAN wants to become the most successful and respected fastener
          manufacturing company in the Global Arena. Being the best means
          providing outstanding quality, service, and value, so that we make
          every customer satisfied in every way”
        </p>
        <ApproachGrid />
      </div>
    </div>
  );
};

export default Approach;