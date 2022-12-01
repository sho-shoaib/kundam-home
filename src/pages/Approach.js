import React from "react";
import ApproachGrid from "../components/ApproachGrid";
import gliiterGif from "../images/glitter-gif.gif";

const Approach = () => {
  return (
    <div id='approach' className='pt-28 z-20 '>
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "rgba(255,255,255,0.8)",
        }}
        className='p-10 rounded-xl m-auto text-center hover:shadow-lg shadow-md transition duration-300 flex flex-col gap-7 relative'
      >
        <div className='w-full h-full absolute top-0 left-0 p-24 opacity-30'>
          <img src={gliiterGif} alt='more glitter' className='w-full h-full' />
        </div>
        <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow'>
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
