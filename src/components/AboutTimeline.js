import React from "react";
import useWindowDimensions from "./getWindowDimensions";

const data = [
  {
    position: "right",
    date: "1960's",
    heading: "Lorem",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aut consequuntur officiis.",
  },
  {
    position: "left",
    date: "1960's",
    heading: "Lorem",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aut consequuntur officiis.",
  },
  {
    position: "right",
    date: "1960's",
    heading: "Lorem",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aut consequuntur officiis.",
  },
  {
    position: "left",
    date: "1960's",
    heading: "Lorem",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aut consequuntur officiis.",
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
                <div
                  className='h-24 w-10 rounded-full '
                  style={{ backgroundColor: "#FCBF02" }}
                ></div>
                <span className='sm:text-4xl text-2xl'>{date}</span>
                <div
                  className='border-dashed border-r-4 w-1 h-full '
                  style={{ borderColor: "#FCBF02" }}
                >
                  {" "}
                </div>
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
                <div
                  className='h-24 w-10 rounded-full '
                  style={{ backgroundColor: "#FCBF02" }}
                ></div>
                <span className='text-4xl'>{date}</span>
                <div
                  className='border-dashed border-r-4 w-1 h-full '
                  style={{ borderColor: "#FCBF02" }}
                >
                  {" "}
                </div>
              </div>
              <div className=' col-span-5 h-full flex flex-col  p-4'>
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
                <div
                  className='h-24 w-10 rounded-full '
                  style={{ backgroundColor: "#FCBF02" }}
                ></div>
                <span className='text-4xl'>{date}</span>
                <div
                  className='border-dashed border-r-4 w-1 h-full '
                  style={{ borderColor: "#FCBF02" }}
                >
                  {" "}
                </div>
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
