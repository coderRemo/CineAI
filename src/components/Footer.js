import React from "react";
import { ASSETS } from "../utils/constant";

const Footer = () => {
  return (
    <div className="px-4 sm:px-12 max-w-[1000px] mx-auto bg-black pt-5 bottom-0 w-full">
      <div className="flex gap-5 my-10">
        <img className="w-8 cursor-pointer" src={ASSETS.facebook} alt="" />
        <img className="w-8 cursor-pointer" src={ASSETS.instagram} alt="" />
        <img className="w-8 cursor-pointer" src={ASSETS.twitter} alt="" />
        <img className="w-8 cursor-pointer" src={ASSETS.youtube} alt="" />
      </div>
      <ul className="text-white grid grid-cols-2 md:grid-cols-4 auto-cols-auto gap-4 mb-8 list-none transition-transform">
        <li className="cursor-pointer hover:text-gray-400">FAQ</li>
        <li className="cursor-pointer hover:text-gray-400">Help Centre</li>
        <li className="cursor-pointer hover:text-gray-400">Account</li>
        <li className="cursor-pointer hover:text-gray-400">Media Centre</li>
        <li className="cursor-pointer hover:text-gray-400">Investor Relations</li>
        <li className="cursor-pointer hover:text-gray-400">Jobs</li>
        <li className="cursor-pointer hover:text-gray-400">Ways to Watch</li>
        <li className="cursor-pointer hover:text-gray-400">Terms of Use</li>
        <li className="cursor-pointer hover:text-gray-400">Privacy</li>
        <li className="cursor-pointer hover:text-gray-400">Cookie Preferences</li>
        <li className="cursor-pointer hover:text-gray-400">Legal Notices</li>
        <li className="cursor-pointer hover:text-gray-400">Contact Us</li>
      </ul>
      <p className="text-gray-400 text-xs font-semibold mb-20">&copy; 2024 CineAI, Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;
