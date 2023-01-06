import React, { useEffect, useState } from "react";
import blueElem from "../images/blue-elem.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import glitter1 from "../images/glitter_1.png";
import logoKundan from "../images/kundan-logo-white.png";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "./getWindowDimensions";

const Footer = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  const [changeFooter, setChangeFooter] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setChangeFooter(true);
    }
  }, [location.pathname]);

  if (width > 1400) {
    return (
      <footer id='contact' className='relative -mt-10 w-full'>
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
          className='absolute top-60 right-3 w-4/6 -mr-0.5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-between p-2'
          style={{ height: "" }}
        >
          <div
            className='w-60 flex flex-col p-1'
            style={{ boxSizing: "content-box" }}
          >
            <div className='w-full -ml-6'>
              <img className='w-full h-full' src={logoKundan} alt='logo' />
            </div>
            <div className='px-1 mt-4'>
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
                  {changeFooter ? (
                    <a href='/'>Home</a>
                  ) : (
                    <Link
                      className='cursor-pointer'
                      activeClass='active'
                      to='home'
                      spy={true}
                      smooth={true}
                    >
                      <p>Home</p>
                    </Link>
                  )}

                  <a
                    className='cursor-pointer'
                    activeClass='active'
                    onClick={() => navigate("/about")}
                  >
                    <p>About</p>
                  </a>
                  {changeFooter ? (
                    <a href='/'>Vision/Mission</a>
                  ) : (
                    <Link
                      className='cursor-pointer'
                      activeClass='active'
                      to='vision-mission'
                      spy={true}
                      smooth={true}
                    >
                      <p>Vision/Mission</p>
                    </Link>
                  )}
                </div>
                <div className='flex gap-6'>
                  {changeFooter ? (
                    <a href='/'>Approach</a>
                  ) : (
                    <Link
                      className='cursor-pointer'
                      activeClass='active'
                      to='approach'
                      spy={true}
                      smooth={true}
                    >
                      <p>Approach</p>
                    </Link>
                  )}

                  {changeFooter ? (
                    <a href='/'>catalogs</a>
                  ) : (
                    <Link
                      className='cursor-pointer'
                      activeClass='active'
                      to='catalogs'
                      spy={true}
                      smooth={true}
                    >
                      <p>catalogss</p>
                    </Link>
                  )}

                  <Link
                    className='cursor-pointer'
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
                  <BsFillTelephoneFill sx={{ color: "#FCBF02" }} />
                </span>
                <p>+91 90290 90100</p>
              </div>
              <div className='flex gap-3 items-center'>
                <span
                  className='border-r-2 p-0 pr-3'
                  style={{ borderColor: "#FCBF02" }}
                >
                  <AiOutlineMail sx={{ color: "#FCBF02" }} />
                </span>
                <p>sales@kvakundan.com</p>
              </div>
              <div className='flex gap-3 items-center'>
                <span
                  className='border-r-2 p-0 pr-3'
                  style={{ borderColor: "#FCBF02" }}
                >
                  <BiWorld sx={{ color: "#FCBF02" }} />
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
  } else if (width > 1000 && width < 1440) {
    return (
      <footer id='contact' className='pt-32 w-full'>
        <div
          className='clipped-footer w-full relative'
          style={{ height: `${width > 1200 ? "400px" : "580px"}` }}
        >
          <div
            className={`grid ${
              width > 1200 ? "grid-cols-3" : "grid-cols-2"
            } left-72 absolute top-32 gap-4 gap-y-10`}
          >
            <div
              className='w-60 flex flex-col p-1'
              style={{ boxSizing: "content-box" }}
            >
              <div className='w-full -ml-6'>
                <img className='w-full h-full' src={logoKundan} alt='logo' />
              </div>
              <div className='px-1 mt-4'>
                <p className='w-full text-justify text-white'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque minima veniam quo commodi
                </p>
              </div>
            </div>
            <div className={`mb-7 text-white`}>
              <div className='mb-2'>
                <p className='font-semibold text-lg'>Quick Links:</p>
              </div>
              <div>
                <div className='flex flex-col gap-1 mb-7'>
                  <div className='flex gap-6 mb-1'>
                    <Link
                      activeClass='active'
                      to='home'
                      spy={true}
                      smooth={true}
                    >
                      <p>Home</p>
                    </Link>
                    <a activeClass='active' onClick={() => navigate("/about")}>
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
                      to='catalogs'
                      spy={true}
                      smooth={true}
                    >
                      <p>catalogs</p>
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
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-3 items-center'>
                    <span
                      className='border-r-2 p-0 pr-3'
                      style={{ borderColor: "#FCBF02" }}
                    >
                      <BsFillTelephoneFill sx={{ color: "#FCBF02" }} />
                    </span>
                    <p>+91 90290 90100</p>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <span
                      className='border-r-2 p-0 pr-3'
                      style={{ borderColor: "#FCBF02" }}
                    >
                      <AiOutlineMail sx={{ color: "#FCBF02" }} />
                    </span>
                    <p>sales@kvakundan.com</p>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <span
                      className='border-r-2 p-0 pr-3'
                      style={{ borderColor: "#FCBF02" }}
                    >
                      <BiWorld sx={{ color: "#FCBF02" }} />
                    </span>
                    <a href='https://www.kvakundan.com' target='_blank'>
                      www.kvakundan.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-white max-w-xs'>
              <p className='text-lg font-semibold mb-2'>Address</p>
              <p>
                A2/304, Jagdamba Commercial Centre, Movie Time Complex, Link
                Road, Malad West, Mumbai400064, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } else {
    return (
      <footer id='contact' className='pt-32 w-full'>
        {" "}
        <div
          className='clipped-footer-phone w-full relative'
          style={{
            height: `${
              width > 900 ? "500px" : width > 600 ? "650px" : "800px"
            }`,
          }}
        >
          <div className='w-full flex justify-center'>
            <div
              className={`grid ${
                width > 900
                  ? "grid-cols-3 top-44 gap-4"
                  : width > 600
                  ? "grid-cols-2 top-44 gap-4"
                  : "grid-cols-1 top-32 gap-6"
              } absolute   p-5 `}
            >
              <div
                className='w-60 flex flex-col p-1'
                style={{ boxSizing: "content-box" }}
              >
                <div className='w-full -ml-6'>
                  <img className='w-full h-full' src={logoKundan} alt='logo' />
                </div>
                <div className='px-1 mt-4'>
                  <p className='w-full text-justify text-white'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque minima veniam quo commodi
                  </p>
                </div>
              </div>
              <div className={`mb-7 text-white`}>
                <div className='mb-2'>
                  <p className='font-semibold text-lg'>Quick Links:</p>
                </div>
                <div>
                  <div className='flex flex-col gap-1 mb-7'>
                    <div className='flex gap-6 mb-1'>
                      <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                      >
                        <p>Home</p>
                      </Link>
                      <a
                        activeClass='active'
                        onClick={() => navigate("/about")}
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
                        to='catalogs'
                        spy={true}
                        smooth={true}
                      >
                        <p>catalogs</p>
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
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                      <span
                        className='border-r-2 p-0 pr-3'
                        style={{ borderColor: "#FCBF02" }}
                      >
                        <BsFillTelephoneFill sx={{ color: "#FCBF02" }} />
                      </span>
                      <p>+91 90290 90100</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                      <span
                        className='border-r-2 p-0 pr-3'
                        style={{ borderColor: "#FCBF02" }}
                      >
                        <AiOutlineMail sx={{ color: "#FCBF02" }} />
                      </span>
                      <p>sales@kvakundan.com</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                      <span
                        className='border-r-2 p-0 pr-3'
                        style={{ borderColor: "#FCBF02" }}
                      >
                        <BiWorld sx={{ color: "#FCBF02" }} />
                      </span>
                      <a href='https://www.kvakundan.com' target='_blank'>
                        www.kvakundan.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-white' style={{ maxWidth: "300px" }}>
                <p className='text-lg font-semibold mb-2'>Address</p>
                <p>
                  A2/304, Jagdamba Commercial Centre, Movie Time Complex, Link
                  Road, Malad West, Mumbai400064, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
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
