import React from "react";
import { ASSETS } from "../utils/constant";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-[18%] px-2 md:px-12 bg-gradient-to-r from-black ">
      <div className="w-[100%] pl-5">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8 text-white">{title}</h1>
        <p className="hidden md:block md:text-sm md:max-w-[500px] lg:text-lg mb-5 lg:max-w-[700px] text-white">
          {overview}
        </p>
        <div className="flex gap-5 mb-12">
          <button className="border-0 outline-none px-5 py-2 inline-flex items-center gap-2 text-base font-semibold hover:bg-gray-300 bg-white rounded cursor-pointer shadow text-black">
            <img className="w-4 lg:w-6" src={ASSETS.playIcon} alt="Play Icon" />
            <span className="hidden md:block md:text-sm">Play</span>
          </button>

          <button className="border-0 outline-none px-5 py-2 inline-flex items-center gap-2 text-base font-semibold bg-gray-600 hover:bg-gray-500 text-white rounded cursor-pointer opacity-[70%]">
            <img className="w-4 lg:w-6" src={ASSETS.infoIcon} alt="Info Icon" />
            <span className="hidden md:block md:text-sm">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
