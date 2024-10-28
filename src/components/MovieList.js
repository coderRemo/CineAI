import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // implementing horizontal scrolling (START)
  const cardScroll = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardScroll.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardScroll.current.addEventListener("wheel", handleWheel);
  }, []);
  // horizontal scrolling (END)

  console.log(movies);

  return (
    <div className="mt-12 mb-8">
      <h2 className="mb-2 text-3xl py-6 font-semibold pl-5">{title}</h2>
      <div ref={cardScroll} className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} poster={movie.backdrop_path} movieTitle={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
