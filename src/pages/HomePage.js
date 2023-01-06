import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../images/video/home-vid.mp4";

const HomePage = () => {
  const [btnHovered, setBtnHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      id='home'
      className='w-full h-screen flex flex-col justify-center items-center change-margin-home relative'
    >
      <div
        className='px-4 flex items-center justify-between absolute top-0 right-0 left-0 change-flex-sphere change-padding-home pl-20 z-10 h-full'
        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
      >
        <div className='flex flex-col items-center gap-5 relative mx-auto mt-16'>
          <h1 className='sm:text-8xl text-5xl font-semibold leading-snug text-shadow-home change-align-home title'>
            KUNDAN VALVES
            <br />
            AND FORGING
          </h1>
          <div
            className='h-3 md:w-44 w-32'
            style={{ backgroundColor: "rgba(254,1,0,0.8)" }}
          ></div>
          {/* <div className='mt-2'>
            <button
              className='py-4 px-6 text-lg md:text-xl rounded-lg border-2 border-amber-500  transition duration-300 mt-6 text-neutral-200'
              style={{
                backgroundColor: `${
                  btnHovered
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(245, 158, 11, 0.1)"
                }`,
              }}
              onMouseOver={() => setBtnHovered(true)}
              onMouseOut={() => setBtnHovered(false)}
              onClick={() => navigate("/about")}
            >
              About us
            </button>
          </div> */}
        </div>
        {/* <div className='translate-y-24'>
          <Cobe />
        </div> */}
      </div>

      <div className='absolute top-0 h-screen w-full overflow-hidden'>
        <video autoPlay loop muted className='w-full h-full object-cover'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

{
  /* <button
              className='py-4 px-6 text-lg md:text-xl rounded-lg border-2 border-amber-500  transition duration-300 mt-6 ml-8 text-neutral-200'
              style={{
                backgroundColor: `${
                  btnHovered
                    ? "rgba(245, 158, 11, 0.2)"
                    : "rgba(245, 158, 11, 0.1)"
                }`,
              }}
              onMouseOver={() => setBtnHovered(true)}
              onMouseOut={() => setBtnHovered(false)}
              onClick={() => navigate("/about")}
            >
              Contact
            </button> */
}

export default HomePage;
