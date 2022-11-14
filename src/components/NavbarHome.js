import React from "react";
import navImg from "../images/navbarImg.png";
import glitter1 from "../images/glitter_1.png";

const NavbarHome = () => {
  return (
    <nav className='w-full absolute top-0' style={{ zIndex: "1000" }}>
      <div
        className='w-full bg-cover bg-right-top'
        style={{ backgroundImage: `url(${navImg})`, height: "180px" }}
      ></div>
    </nav>
  );
};

export default NavbarHome;
