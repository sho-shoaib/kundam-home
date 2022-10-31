import React from "react";
import { useState } from "react";
import { Cobe } from "../components/Cobe";
import glitter2 from "../images/glitter_2.png";

const HomePage = () => {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div className='w-full h-screen flex flex-col justify-center change-margin-home'>
      <div className='absolute top-0 left-0'>
        <img src={glitter2} alt='glitter' />
      </div>
      <div className='px-4 flex items-center justify-between relative change-flex-sphere change-padding-home pl-20'>
        <div className='inline-block flex flex-col gap-5 relative translate-y-10'>
          <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow change-align-home'>
            KUNDAN VALVES
            <br />
            AND FORGING
          </h1>
          <div
            className='h-3 w-44'
            style={{ backgroundColor: "rgba(254,1,0,0.7)" }}
          ></div>
          <div>
            <button
              className='py-4 px-6 text-xl rounded-lg border-2 border-amber-500 text-black transition duration-300 mt-6'
              style={{
                backgroundColor: `${
                  btnHovered
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(245, 158, 11, 0.1)"
                }`,
              }}
              onMouseOver={() => setBtnHovered(true)}
              onMouseOut={() => setBtnHovered(false)}
            >
              Know More
            </button>
          </div>
        </div>
        <div className='translate-y-24'>
          <Cobe />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
