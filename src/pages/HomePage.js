import React from "react";
import { Cobe } from "../components/Cobe";
import glitter2 from "../images/glitter_2.png";

const HomePage = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center change-margin-home'>
      <div className='absolute top-0 left-0'>
        <img src={glitter2} alt='glitter' />
      </div>
      <div className='px-4 flex items-center justify-between relative change-flex-sphere change-padding-home pl-20'>
        <div className='inline-block flex flex-col gap-5 relative'>
          <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow change-align-home'>
            KUNDAN VALVES
            <br />
            AND FORGING
          </h1>
          <div
            className='h-3 w-44'
            style={{ backgroundColor: "rgba(254,1,0,0.8)" }}
          ></div>
        </div>
        <div className='translate-y-24'>
          <Cobe />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
