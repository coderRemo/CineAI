import React from "react";
import assets from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute">
      <img className="w-56" src={assets} alt="logo" />
    </div>
  );
};

export default Header;
