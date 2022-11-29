import { Container } from "@mui/system";
import React from "react";
import useWindowDimensions from "../components/getWindowDimensions";
import blogBg from "../images/blob_bg.svg";
import handshake from "../images/handshake.png";

const VisionMission = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div id='vision-mission' className='relative pt-20 relative '>
        <img
          src={blogBg}
          alt='blob_bg'
          className='absolute opacity-40 h-full'
        />

        <Container style={{ zIndex: "2" }}>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col lg:flex-row items-center gap-0 lg:gap-10 w-full z-20'>
              <div className='w-full md:w-8/12 lg:w-1/2'>
                <img
                  src={handshake}
                  alt='handshake'
                  className='w-full h-full'
                />
              </div>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-1/2 rounded-xl p-4'>
                <div className='p-2'>
                  <div className='flex items-center justify-start gap-1 add-before relative'>
                    <h1 className='sm:text-6xl text-4xl font-semibold leading-snug text-shadow mb-5 '>
                      VISION
                    </h1>
                  </div>
                  <p className='text-lg para text-justify text-brown'>
                    KUNDAN wants to become the most successful and respected
                    fastener manufacturing company in the Global Arena. Being
                    the best means providing outstanding quality, service, and
                    value, so that we make every customer satisfied in every way
                  </p>
                </div>
                <div className='p-2'>
                  <div className='flex items-center justify-start gap-1 add-before relative'>
                    <h1 className='sm:text-6xl text-4xl font-semibold leading-snug text-shadow mb-5 '>
                      MISSION
                    </h1>
                  </div>
                  <p className='text-lg para text-justify text-brown'>
                    KUNDAN wants to sustain profitable growth by providing the
                    best customer experience through Quality & Reliability. With
                    our success, we want to ensure that our “Customers build
                    their businesses” & “Employees build their futures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VisionMission;
