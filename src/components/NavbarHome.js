import React from "react";
import navImg from "../images/navbarImg.png";
import { useNavigate } from "react-router-dom";

const NavbarHome = () => {
  const navigate = useNavigate();

  return (
    <div className='p-0 w-full'>
      <nav
        className='w-full absolute top-0'
        style={{ zIndex: "1000", maxWidth: "1920px" }}
      >
        <div
          className='w-full'
          style={{
            maxHeight: "220px",
          }}
        >
          <img
            src={navImg}
            alt='navbar'
            className='w-full h-full object-cover'
          />
        </div>
        <div
          className='absolute right-28 top-6 w-60 h-24 cursor-pointer'
          onClick={() => navigate("/")}
        ></div>
      </nav>
    </div>
  );
};

export default NavbarHome;
