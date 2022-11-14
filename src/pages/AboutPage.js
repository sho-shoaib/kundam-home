import { Container } from "@mui/material";
import React from "react";
import { useState } from "react";

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

  return (
    <Container sx={{ paddingTop: "180px" }}>
      <div className='flex flex-col gap-12'>
        <h1 className='sm:text-7xl text-5xl font-semibold leading-snug text-shadow change-align-home'>
          ABOUT US
        </h1>
        <div className='flex flex-col'>
          {dataText.listItems.map((item, i) => {
            return (
              <div
                key={i}
                className={`text-center w-1/2 flex self-${
                  i % 2 === 0
                    ? "start justify-end border-r-4 ml-0.5 pr-8"
                    : "end justify-start border-l-4 mr-0.5 pl-8"
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
          })}
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
