import React from "react";
import { IMG_URL } from "../utils/constant";

const MovieCard = ({ poster, movieTitle }) => {
  return (
    <div className="relative w-[300px] flex-none pl-5">
      <img className="w-full rounded-md cursor-pointer" src={IMG_URL + poster} alt="" />
      <p className="absolute bottom-2 right-2 font-semibold">{movieTitle}</p>
    </div>
  );
};

export default MovieCard;
