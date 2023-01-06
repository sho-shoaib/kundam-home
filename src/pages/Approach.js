import React from "react";
import ApproachGrid from "../components/ApproachGrid";
import approachSparkle from "../images/approach-sparkle.png";

const Approach = () => {
  return (
    <div id='approach' className='pt-28 z-20 '>
      <div className='p-10 rounded-xl m-auto text-center transition duration-300 flex flex-col gap-7 relative'>
        <div className='w-full h-full absolute top-0 left-0 p-24 -z-10 opacity-40'>
          <img
            src={approachSparkle}
            alt='more glitter'
            className='w-full h-full object-cover'
          />
        </div>
        <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow title'>
          OUR APPROACH
          <div
            className='w-44 h-2 m-auto mt-4'
            style={{ backgroundColor: "rgba(254,1,0,0.8)" }}
          ></div>
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
