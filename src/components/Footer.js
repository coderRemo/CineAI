import React from "react";
import { ASSETS } from "../utils/constant";

const Footer = () => {
  return (
    <div className="px-4 sm:px-12 max-w-full mx-auto bg-black">
      <div className="flex gap-5 my-10">
        <img className="w-8 cursor-pointer" src={ASSETS.facebook} alt="" />
        <img className="w-8 cursor-pointer" src={ASSETS.instagram} alt="" />
        <img className="w-8 cursor-pointer" src={ASSETS.twitter} alt="" />
        <img className="w-8 cursor-pointer" src={ASSETS.youtube} alt="" />
      </div>
      <ul className="text-white grid grid-cols-4 auto-cols-auto gap-4 mb-8 list-none">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="text-gray-400 text-xs font-semibold">&copy; 2024 CineAI, Inc.</p>
    </div>
  );
};

export default Footer;
