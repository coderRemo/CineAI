import React from "react";
import assets from "../assets/logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50">
      <img className="w-32 md:w-40 lg:w-56" src={assets} alt="logo" />
    </div>
  );
};

export default Header;
