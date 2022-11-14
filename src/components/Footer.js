import React from "react";
import blueElem from "../images/blue-elem.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import glitter1 from "../images/glitter_1.png";
import logoKundan from "../images/logo-kundan.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <footer id='contact' className='relative -mt-10'>
      <div
        className='absolute left-0 bottom-0 -z-10'
        style={{ transform: "scaleX(-1)" }}
      >
        <img src={glitter1} alt='glitter' className='w-full h-full' />
      </div>
      <div className='w-full' style={{ height: "550px" }}>
        <img src={blueElem} alt='blueElem' className='w-full h-full' />
      </div>
      <div
        className='absolute bottom-0 right-3 w-4/6 -mr-0.5 flex justify-between p-2'
        style={{ height: "300px" }}
      >
        <div
          className='w-60 flex flex-col p-1'
          style={{ boxSizing: "content-box" }}
        >
          <div className='w-full -ml-6'>
            <img className='w-full h-full' src={logoKundan} alt='logo' />
          </div>
          <div className='px-1 mt-2'>
            <p className='w-full text-justify text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              minima veniam quo commodi
            </p>
          </div>
        </div>
        <div className='text-white'>
          <div className='mb-7'>
            <div className='mb-2'>
              <p className='font-semibold text-lg'>Quick Links:</p>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-6 mb-1'>
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  <p>Home</p>
                </Link>
                <a
                  activeClass='active'
                  onClick={() => navigate("/kundam-home/about")}
                >
                  <p>About</p>
                </a>

                <Link
                  activeClass='active'
                  to='vision-mission'
                  spy={true}
                  smooth={true}
                >
                  <p>Vision/Mission</p>
                </Link>
              </div>
              <div className='flex gap-6'>
                <Link
                  activeClass='active'
                  to='approach'
                  spy={true}
                  smooth={true}
                >
                  <p>Approach</p>
                </Link>

                <Link
                  activeClass='active'
                  to='catalog'
                  spy={true}
                  smooth={true}
                >
                  <p>Catalog</p>
                </Link>

                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                >
                  <p>Contact</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
              <span
                className='border-r-2 p-0 pr-3'
                style={{ borderColor: "#FCBF02" }}
              >
                <LocalPhoneIcon sx={{ color: "#FCBF02" }} />
              </span>
              <p>+91 90290 90100</p>
            </div>
            <div className='flex gap-3 items-center'>
              <span
                className='border-r-2 p-0 pr-3'
                style={{ borderColor: "#FCBF02" }}
              >
                <EmailIcon sx={{ color: "#FCBF02" }} />
              </span>
              <p>sales@kvakundan.com</p>
            </div>
            <div className='flex gap-3 items-center'>
              <span
                className='border-r-2 p-0 pr-3'
                style={{ borderColor: "#FCBF02" }}
              >
                <LanguageIcon sx={{ color: "#FCBF02" }} />
              </span>
              <a href='https://www.kvakundan.com' target='_blank'>
                www.kvakundan.com
              </a>
            </div>
          </div>
        </div>
        <div className='text-white max-w-xs'>
          <p className='text-lg font-semibold mb-2'>Address</p>
          <p>
            A2/304, Jagdamba Commercial Centre, Movie Time Complex, Link Road,
            Malad West, Mumbai400064, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

{
  /* <div className='flex flex-col gap-4 mt-6'>
          {data.map((item) => {
            return (
              <div className='flex items-center gap-4'>
                {item.icon}
                {item.text}
              </div>
            );
          })}
        </div> */
}

export default Footer;
