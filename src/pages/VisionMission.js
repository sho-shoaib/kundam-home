import { Container } from "@mui/system";
import React from "react";
import bgApproach from "../images/bg-aproach.png";
import missionGif from "../images/mission.gif";
import visionGif from "../images/vision.gif";
import blogBg from "../images/blob_bg.svg";
import ApproachGrid from "../components/ApproachGrid";

const VisionMission = () => {
  return (
    <>
      <div className='relative mt-24 pb-24 relative '>
        <img
          src={blogBg}
          alt='blob_bg'
          className='absolute opacity-40 h-full'
        />

        <Container style={{ zIndex: "2" }}>
          <div className='flex flex-col gap-10'>
            <div
              style={{
                maxWidth: "800px",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
              className='p-10 rounded-xl hover:shadow-lg shadow-md transition duration-300 z-10'
            >
              <div className='flex items-center justify-start gap-1'>
                <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow mb-5'>
                  VISION
                </h1>
                <div className='w-28 -translate-y-3'>
                  <img src={visionGif} alt='mission-gif' className='w-full' />
                </div>
              </div>
              <p className='text-lg font-semibold text-justify'>
                KUNDAN wants to become the most successful and respected
                fastener manufacturing company in the Global Arena. Being the
                best means providing outstanding quality, service, and value, so
                that we make every customer satisfied in every way
              </p>
            </div>
            <div
              style={{
                maxWidth: "800px",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
              className='p-10 rounded-xl self-end hover:shadow-lg shadow-md transition duration-300 mb-12 z-20'
            >
              <div className='flex items-center justify-end gap-4'>
                <div className='w-28 -translate-y-3'>
                  <img src={missionGif} alt='mission-gif' className='w-full' />
                </div>
                <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow text-right mb-5'>
                  MISSION
                </h1>
              </div>
              <p className='text-lg font-semibold text-justify'>
                KUNDAN wants to sustain profitable growth by providing the best
                customer experience through Quality & Reliability. With our
                success, we want to ensure that our Customers build their
                businesses & Employees build their futures
              </p>
            </div>
            <div
              style={{
                maxWidth: "800px",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
              className='p-10 rounded-xl self-center text-center hover:shadow-lg shadow-md transition duration-300 z-20 flex flex-col gap-7'
            >
              <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow'>
                OUR APPROACH
              </h1>
              <p className='text-lg font-semibold'>
                “KUNDAN wants to become the most successful and respected
                fastener manufacturing company in the Global Arena. Being the
                best means providing outstanding quality, service, and value, so
                that we make every customer satisfied in every way”
              </p>
              <ApproachGrid />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VisionMission;
