import React from "react";
import { Box, Container } from "@mui/system";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowDimensions from "./getWindowDimensions";
import { Link } from "react-scroll";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import DiscordIcon from "../images/discordIcon.png";
import logo from "../images/logo-kundan.png";
import { useNavigate } from "react-router-dom";

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

              <Link activeClass='active' to='approach' spy={true} smooth={true}>
                <p>Approach</p>
              </Link>

              <Link activeClass='active' to='catalog' spy={true} smooth={true}>
                <p>Catalog</p>
              </Link>

              <Link activeClass='active' to='contact' spy={true} smooth={true}>
                <p>Contact</p>
              </Link>
            </Box>
            <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
              <a
                href='https://www.instagram.com/nautzz/'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineInstagram style={{ fontSize: "20px" }} />
              </a>
              <a
                href='https://twitter.com/nautz_'
                target='_blank'
                rel='noreferrer'
              >
                <GrTwitter style={{ fontSize: "20px" }} />
              </a>

              <a
                href='https://discord.gg/nautz'
                target='_blank'
                rel='noreferrer'
              >
                <img src={DiscordIcon} alt='discordIcon' className='w-5' />
              </a>
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
                <a
                  href='https://twitter.com/nautz_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GrTwitter style={{ fontSize: "29px" }} />
                </a>

                <a
                  href='https://www.instagram.com/nautzz/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiOutlineInstagram style={{ fontSize: "29px" }} />
                </a>

                <a
                  href='https://discord.gg/nautz'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={DiscordIcon} alt='discordIcon' className='w-8' />
                </a>
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
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                <p>Home</p>
              </Link>
              <Link activeClass='active' to='about' spy={true} smooth={true}>
                <p>About</p>
              </Link>
              <Link activeClass='active' to='roadmap' spy={true} smooth={true}>
                <p>Roadmap</p>
              </Link>

              <Link activeClass='active' to='team' spy={true} smooth={true}>
                <p>Team</p>
              </Link>

              <Link
                activeClass='active'
                to='utilities'
                spy={true}
                smooth={true}
              >
                <p>Utilities</p>
              </Link>

              <Link activeClass='active' to='faq' spy={true} smooth={true}>
                <p>FAQ</p>
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
                <a
                  href='https://twitter.com/nautz_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GrTwitter style={{ fontSize: "29px" }} />
                </a>

                <a
                  href='https://www.instagram.com/nautzz/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiOutlineInstagram style={{ fontSize: "29px" }} />
                </a>

                <a
                  href='https://discord.gg/nautz'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={DiscordIcon} alt='discordIcon' className='w-8' />
                </a>
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
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    Home
                  </p>
                </Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    About
                  </p>
                </Link>
                <Link
                  activeClass='active'
                  to='roadmap'
                  spy={true}
                  smooth={true}
                >
                  <p className='text-lg' onClick={toggle}>
                    Roadmap
                  </p>
                </Link>

                <Link activeClass='active' to='team' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    Team
                  </p>
                </Link>

                <Link
                  activeClass='active'
                  to='utilities'
                  spy={true}
                  smooth={true}
                >
                  <p className='text-lg' onClick={toggle}>
                    Utilities
                  </p>
                </Link>

                <Link activeClass='active' to='faq' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    FAQ
                  </p>
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
