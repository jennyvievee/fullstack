import React from "react";
import LogoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full flex px-10 bg-[#1c1c84] text-white flex-wrap justify-between">
      <div>
        <img className="w-10 h-10" src={LogoImg} alt="logo" />
        <h1 className="font-bold">RivanCyber</h1>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">Page</span>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">Contact Us</span>
        <p>Phone Number: 09202110058</p>
        <p>Email: rivancyber@email.com</p>
      </div>
    </footer>
  );
};

export default Footer;
