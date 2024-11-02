import React from "react";
import { IMG_URL } from "../utils/constant";

const MovieCard = ({ poster, movieTitle }) => {
  return (
    <div className="relative w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded cursor-pointer">
      <img src={IMG_URL + poster} alt="" />
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full max-w-[230px] bg-black/60 p-2">
        <p className="text-ellipsis line-clamp-1 text-lg font-semibold">{movieTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
