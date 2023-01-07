import React from "react";
import useWindowDimensions from "./getWindowDimensions";
import circle from "../images/circle.png";
import goldenLine from "../images/golden-line.png";

const data = [
  {
    position: "right",
    date: "1978",
    heading: "Lorem",
    body: "Established in 1978, Kundan is closely held company with strong legacy of 4 decades.",
  },
  {
    position: "left",
    date: "1985",
    heading: "Lorem",
    body: "Engaged in manufacturing of wide range of fasteners, brass components, turned components, sheet metal components in stainless steel and various specialized grades.",
    big: true,
  },
  {
    position: "right",
    date: "1990",
    heading: "Lorem",
    body: "Over 150,000 in house product design capability.",
  },
  {
    position: "left",
    date: "2000",
    heading: "Lorem",
    body: "Total manufacturing capacity of 7,500 MT p.a. with additional land available for expansion.",
  },
  {
    position: "right",
    date: "2010",
    heading: "Lorem",
    body: "Distribution & Marketing offices across major cities in India along with USA & China.",
  },
  {
    position: "left",
    date: "2019",
    heading: "Lorem",
    body: "Well established presence in International markets with exports to 50+ countries.",
  },
];

const AboutTimeline = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className='flex flex-col gap-0 w-full'>
      {data.map((item, i) => {
        const { position, date, heading, body } = item;

        if (width <= 1220) {
          return (
            <div
              key={i}
              className='mx-auto grid grid-cols-12 gap-8 justify-center'
            >
              <div className='sm:col-span-6 col-span-4 h-full flex flex-col items-center gap-4 p-4'>
                <div className='h-10 w-10 rounded-full'>
                  <img
                    src={circle}
                    className='w-full h-full object-cover'
                    alt=''
                  />
                </div>
                <span className='sm:text-4xl text-2xl'>{date}</span>
                {/* <div
                  className='w-10 h-full overflow-hidden'
                  style={{ borderColor: "#FCBF02" }}
                >
                  <img
                    src={goldenLine}
                    alt='line'
                    className='w-full h-full object-fill'
                    style={{ transform: "scale(6)" }}
                  />
                </div> */}
                <div
                  className='w-0 h-full border-r-4 border-dashed'
                  style={{ borderColor: "#FCBF02" }}
                ></div>
              </div>
              <div className='sm:col-span-6 col-span-8 h-full flex flex-col items-start p-4'>
                <div
                  className='sm:w-80 sm:-translate-x-2 w-full left-point p-4 '
                  style={{ backgroundColor: "#CC0000" }}
                >
                  <p className='sm:text-2xl text-xl text-center text-white'>
                    {heading}
                  </p>
                </div>
                <div className='sm:w-72 sm:translate-x-0 -translate-x-4 w-11/12 ml-6 mt-6 mb-4'>
                  <p>{body}</p>
                </div>
              </div>
            </div>
          );
        }

        if (position === "right") {
          return (
            <div key={i} className='grid grid-cols-12 gap-8 justify-center'>
              <div className=' col-span-5 h-full p-4'></div>
              <div className=' col-span-2 h-full flex flex-col items-center gap-4 p-4'>
                <div className='h-11 w-11 rounded-full mb-1'>
                  <img
                    src={circle}
                    className='w-full h-full object-cover'
                    alt=''
                  />
                </div>
                <span className='text-4xl'>{date}</span>
                {/* <div
                  className='w-10 h-full overflow-hidden'
                  style={{ borderColor: "#FCBF02" }}
                >
                  <img
                    src={goldenLine}
                    alt='line'
                    className='w-full h-full object-fill'
                    style={{ transform: "scale(6)" }}
                  />
                </div> */}
                <div
                  className='w-0 h-full border-r-4 border-dashed'
                  style={{ borderColor: "#FCBF02" }}
                ></div>
              </div>
              <div className=' col-span-5 h-full flex flex-col p-4'>
                <div
                  className='w-7/12 left-point p-4 '
                  style={{ backgroundColor: "#CC0000" }}
                >
                  <p className='text-2xl text-center text-white'>{heading}</p>
                </div>
                <div className='w-7/12 ml-6 mt-6 mb-4'>
                  <p>{body}</p>
                </div>
              </div>
            </div>
          );
        } else if (position === "left") {
          return (
            <div key={i} className='grid grid-cols-12 gap-8 justify-center'>
              <div className=' col-span-5 h-full flex flex-col items-end p-4'>
                <div
                  className='w-7/12 right-point p-4 '
                  style={{ backgroundColor: "#CC0000" }}
                >
                  <p className='text-2xl text-center text-white'>{heading}</p>
                </div>
                <div className='w-7/12 ml-6 mt-6 mb-4'>
                  <p>{body}</p>
                </div>
              </div>
              <div className=' col-span-2 h-full flex flex-col items-center gap-4 p-4'>
                <div className='h-11 w-11 rounded-full mb-1'>
                  <img
                    src={circle}
                    className='w-full  h-full object-cover'
                    alt=''
                  />
                </div>
                <span className='text-4xl'>{date}</span>
                {/* <div
                  className='w-10 h-full overflow-hidden'
                  style={{ borderColor: "#FCBF02" }}
                >
                  <img
                    src={goldenLine}
                    alt='line'
                    className='w-full h-full object-fill'
                    style={{ transform: "scale(6)" }}
                  />
                </div> */}
                <div
                  className='w-0 h-full border-r-4 border-dashed'
                  style={{ borderColor: "#FCBF02" }}
                ></div>
              </div>
              <div className=' col-span-5 h-full p-4'></div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AboutTimeline;
