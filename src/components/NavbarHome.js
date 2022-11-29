import React from "react";
import navImg from "../images/navbarImg.png";
import { Container } from "@mui/material";

const NavbarHome = () => {
  return (
    <div className='p-0 w-full'>
      <nav
        className='w-full absolute top-0'
        style={{ zIndex: "1000", maxWidth: "1920px" }}
      >
        <div
          className='bg-cover bg-right-top'
          style={{ backgroundImage: `url(${navImg})`, height: "220px" }}
        ></div>
      </nav>
    </div>
  );
};

export default NavbarHome;
