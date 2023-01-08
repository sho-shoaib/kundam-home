import { Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import useWindowDimensions from "../components/getWindowDimensions";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AboutTimeline from "../components/AboutTimeline";
import NavbarMain from "../components/NavbarMain";

const AboutPage = () => {
  const [dataText] = useState({
    listItems: [
      "Established in 1978, Kundan is closely held company with strong legacy of 4 decades",
      "Engaged in manufacturing of wide range of fasteners, brass components, turned components,  sheet metal components in stainless steel and various specialized grades",
      "Over 150,000 in house product design capability",
      "Total manufacturing capacity of 7,500 MT p.a. with additional land available for expansion.",
      "Distribution & Marketing offices across major cities in India along with USA & China",
      "Well established presence in International markets with exports to 50+ countries.",
    ],
  });

  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarMain onAbout={true} />

      <Container sx={{ paddingTop: "220px" }}>
        <div className='flex flex-col gap-12'>
          <button
            onClick={() => navigate("/")}
            className='flex items-center justify-center self-start gap-3 text-xl cursor-pointer border-b-2 border-transparent hover:border-red-500 transition duration-300'
          >
            <IoArrowBack /> Back
          </button>
          <h1 className='sm:text-7xl text-6xl font-semibold leading-snug text-shadow change-align-home flex flex-col items-center'>
            ABOUT US
            <div
              className='w-44 h-2 mt-4'
              style={{ backgroundColor: "rgba(254,1,0,0.8)" }}
            ></div>
          </h1>
          <AboutTimeline />
        </div>
      </Container>
    </>
  );
};

{
  /* <div className='flex w-full flex-col'>
          {dataText.listItems.map((item, i) => {
            if (width > 900) {
              return (
                <div
                  key={i}
                  className={`text-center w-1/2 flex ${
                    i % 2 === 0
                      ? "self-start justify-end border-r-4 ml-0.5 pr-8"
                      : "self-end justify-start border-l-4 mr-0.5 pl-8"
                  } ${i === 0 && "pt-4"} ${
                    i === dataText.listItems.length - 1 && "pb-4"
                  }`}
                  style={{ borderColor: "rgba(244,172,0, 0.5)" }}
                >
                  <div
                    style={{
                      borderColor: "#FA9494",
                      backgroundColor: "rgba(244,172,0, 0.1)",
                    }}
                    className={`text-center p-8 rounded-lg border-4 w-10/12`}
                  >
                    <p className='text-lg'>{item}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className={`text-center my-4 flex self-center justify-center border-r-4 border-l-4  ${
                    i === 0 && "pt-4"
                  } ${i === dataText.listItems.length - 1 && "pb-4"}`}
                  style={{
                    borderColor: "rgba(244,172,0, 0.5)",
                    maxWidth: "450px",
                  }}
                >
                  <div
                    style={{
                      borderColor: "#FA9494",
                      backgroundColor: "rgba(244,172,0, 0.1)",
                    }}
                    className={`text-center p-8 rounded-lg border-4 w-10/12`}
                  >
                    <p className='text-lg'>{item}</p>
                  </div>
                </div>
              );
            }
          })}
        </div> */
}

export default AboutPage;
