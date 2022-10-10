import React from "react";
import blueElem from "../images/blue-elem.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const data = [
  {
    icon: <LocalPhoneIcon className='text-amber-300' fontSize='large' />,
    text: <p className='text-white text-2xl'> | +91 98762 96577</p>,
  },
  {
    icon: <EmailIcon className='text-amber-300' fontSize='large' />,
    text: <p className='text-white text-2xl'> | madhav.khanna@kvakundan.com</p>,
  },
  {
    icon: <LanguageIcon className='text-amber-300' fontSize='large' />,
    text: (
      <a
        href='https://www.kvakundan.com'
        target='_blank'
        className='text-white text-2xl'
      >
        {" "}
        | www.kvakundan.com
      </a>
    ),
  },
];

const Footer = () => {
  return (
    <footer className='relative -mt-10'>
      <div className='w-full' style={{ height: "550px" }}>
        <img src={blueElem} alt='blueElem' className='w-full h-full' />
      </div>
      <div className='absolute bottom-0 right-3 w-3/5 h-1/2'>
        <h1 className='text-5xl font-bold text-amber-300'>
          KUNDAN VALVES AND FORGINGS
        </h1>
        <div className='flex flex-col gap-4 mt-6'>
          {data.map((item) => {
            return (
              <div className='flex items-center gap-4'>
                {item.icon}
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
