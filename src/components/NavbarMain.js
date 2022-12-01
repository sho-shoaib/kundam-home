import React from "react";
import { Box, Container } from "@mui/system";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowDimensions from "./getWindowDimensions";
import { Link } from "react-scroll";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import DiscordIcon from "../images/discordIcon.png";
import logo from "../images/logo-kundan.png";
import { useNavigate } from "react-router-dom";

const socials = [
  {
    icon: <AiOutlineInstagram style={{ fontSize: "30px" }} />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <AiFillLinkedin style={{ fontSize: "30px" }} />,
    link: "https://www.linkedin.com/",
  },
];

const NavbarHome = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <>
      {width > 930 && (
        <nav
          className={`z-50 w-full ${width > 800 && "sticky top-0"}`}
          style={{
            backgroundColor: "#FCBF02",
          }}
        >
          <div
            className='w-full py-4 flex justify-between items-center px-4'
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: "Poppins !important",
            }}
          >
            <Link activeClass='active' to='home' spy={true} smooth={true}>
              <div className='w-32 cursor-pointer'>
                <img src={logo} alt='logo' className='h-full w-full' />
              </div>
            </Link>
            <Box className='flex gap-10 child:text-md child:font-medium child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in'>
              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
              >
                <p>Home</p>
              </Link>
              <a
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                onClick={() => navigate("/kundam-home/about")}
              >
                <p>About</p>
              </a>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='vision-mission'
                spy={true}
                smooth={true}
              >
                <p>Vision/Mission</p>
              </Link>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='approach'
                spy={true}
                smooth={true}
              >
                <p>Approach</p>
              </Link>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='catalog'
                spy={true}
                smooth={true}
              >
                <p>Catalog</p>
              </Link>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
              >
                <p>Contact</p>
              </Link>
            </Box>
            <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
              {socials.map((item) => {
                return (
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      )}{" "}
      {width <= 930 && width > 550 && (
        <>
          <nav>
            <Container
              className='flex items-center justify-between py-4 z-50'
              style={{
                backgroundColor: "#FCBF02",
              }}
            >
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                <div className='w-32 cursor-pointer'>
                  <img src={logo} alt='logo' className='h-full w-full' />
                </div>
              </Link>
              <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
                {socials.map((item) => {
                  return (
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </Container>
          </nav>
          <nav className='w-full sticky top-0 z-50'>
            <Box
              className='w-full border-t-2 border-yellow-600 p-2 child:text-md child:font-medium child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in flex gap-5 justify-center py-5 child:text-lg child:font-medium'
              style={{
                backgroundColor: "#FCBF02",
              }}
            >
              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
              >
                <p>Home</p>
              </Link>
              <a
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                onClick={() => navigate("/kundam-home/about")}
              >
                <p>About</p>
              </a>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='vision-mission'
                spy={true}
                smooth={true}
              >
                <p>Vision/Mission</p>
              </Link>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='approach'
                spy={true}
                smooth={true}
              >
                <p>Approach</p>
              </Link>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='catalog'
                spy={true}
                smooth={true}
              >
                <p>Catalog</p>
              </Link>

              <Link
                className='cursor-pointer hover:underline underline-offset-2'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
              >
                <p>Contact</p>
              </Link>
            </Box>
          </nav>
        </>
      )}
      {width <= 550 && (
        <>
          <nav className='z-50 w-full sticky top-0'>
            <Container
              className='flex items-center justify-between py-4 z-40'
              style={{
                backgroundColor: "#FCBF02",
              }}
            >
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                <div className='w-32 cursor-pointer'>
                  <img src={logo} alt='logo' className='h-full w-full' />
                </div>
              </Link>
              <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
                {socials.map((item) => {
                  return (
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      {item.icon}
                    </a>
                  );
                })}
                {isOpen ? (
                  <GrClose style={{ fontSize: "29px" }} onClick={toggle} />
                ) : (
                  <AiOutlineMenu
                    style={{ fontSize: "29px" }}
                    onClick={toggle}
                  />
                )}
              </div>
            </Container>
            <div
              className={`overflow-hidden absolute w-full ${!isOpen && "h-0"}`}
            >
              <Box
                className={`w-full border-t-2 border-yellow-600 p-2 child:text-lg child:font-medium child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in flex flex-col gap-4 justify-center py-3 z-20 transition ${
                  isOpen ? "drop" : "up"
                }`}
                sx={{
                  backgroundColor: "#FCBF02",
                }}
              >
                <Link
                  className='cursor-pointer hover:underline underline-offset-2'
                  activeClass='active'
                  to='home'
                  spy={true}
                  smooth={true}
                  onClick={toggle}
                >
                  <p>Home</p>
                </Link>
                <a
                  className='cursor-pointer hover:underline underline-offset-2'
                  activeClass='active'
                  onClick={() => {
                    toggle();
                    navigate("/kundam-home/about");
                  }}
                >
                  <p>About</p>
                </a>

                <Link
                  className='cursor-pointer hover:underline underline-offset-2'
                  activeClass='active'
                  to='vision-mission'
                  spy={true}
                  smooth={true}
                  onClick={toggle}
                >
                  <p>Vision/Mission</p>
                </Link>

                <Link
                  className='cursor-pointer hover:underline underline-offset-2'
                  activeClass='active'
                  to='approach'
                  spy={true}
                  smooth={true}
                  onClick={toggle}
                >
                  <p>Approach</p>
                </Link>

                <Link
                  className='cursor-pointer hover:underline underline-offset-2'
                  activeClass='active'
                  to='catalog'
                  spy={true}
                  smooth={true}
                  onClick={toggle}
                >
                  <p>Catalog</p>
                </Link>

                <Link
                  className='cursor-pointer hover:underline underline-offset-2'
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  onClick={toggle}
                >
                  <p>Contact</p>
                </Link>
              </Box>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavbarHome;
