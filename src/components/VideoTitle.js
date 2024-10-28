import React from "react";
import { ASSETS } from "../utils/constant";
import SecondaryContainer from "./SecondaryContainer";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-[18%] px-12 bg-gradient-to-r from-black ">
      <div className="w-[100%] pl-5">
        <h1 className="text-6xl font-bold mb-8 text-white">{title}</h1>
        <p className="text-lg mb-5 max-w-[700px] text-white">{overview}</p>
        <div className="flex gap-5 mb-12">
          <button className="border-0 outline-none px-5 py-2 inline-flex items-center gap-2 text-base font-semibold hover:bg-gray-300 bg-white rounded cursor-pointer shadow text-black">
            <img className="w-6" src={ASSETS.playIcon} alt="Play Icon" />
            Play
          </button>

          <button className="border-0 outline-none px-5 py-2 inline-flex items-center gap-2 text-base font-semibold bg-gray-600 hover:bg-gray-500 text-white rounded cursor-pointer opacity-[70%]">
            <img className="w-6" src={ASSETS.infoIcon} alt="Info Icon" />
            More Info
          </button>
        </div>
      </div>
      {/* <SecondaryContainer /> */}
    </div>
  );
};

export default VideoTitle;
