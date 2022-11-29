import React from "react";
import navImg from "../images/navbarImg.png";
import { Container } from "@mui/material";

const NavbarHome = () => {
  return (
    <Container maxWidth='xl' className='p-0'>
      <nav
        className='w-full absolute top-0'
        style={{ zIndex: "1000", maxWidth: "1537px" }}
      >
        <div
          className='bg-cover bg-right-top'
          style={{ backgroundImage: `url(${navImg})`, height: "180px" }}
        ></div>
      </nav>
    </Container>
  );
};

export default NavbarHome;
