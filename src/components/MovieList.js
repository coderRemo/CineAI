import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const MovieList = ({ title, movies }) => {
  // implementing horizontal scrolling (START)
  const cardScroll = useRef();

  const handleNext = (e) => {
    e.preventDefault();
    cardScroll.current.scrollLeft += 300;
  };

  const handlePrev = (e) => {
    e.preventDefault();
    cardScroll.current.scrollLeft -= 300;
  };

  // horizontal scroll using wheel
  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   cardScroll.current.scrollLeft += e.deltaY;
  // };

  // useEffect(() => {
  //   cardScroll.current.addEventListener("wheel", handleWheel);
  // }, []);
  // horizontal scrolling (END)

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-2">{title}</h2>

      <div className="relative">
        <div
          ref={cardScroll}
          className="grid grid-cols-[repeat(auto-fit,235px)] grid-flow-col gap-6 overflow-x-scroll overflow-hidden z-10 relative scroll-smooth transition-all scrollbar-hide"
        >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} movieTitle={movie?.title || movie?.name} />
          ))}
        </div>

        {(movies?.length || 0) > 3 && (
          <div className="absolute hidden md:flex top-0 items-center justify-between w-full h-full">
            <button onClick={handlePrev} className="bg-white p-1 text-black rounded-full -ml-2 z-10">
              <FaAngleLeft />
            </button>
            <button onClick={handleNext} className="bg-white p-1 text-black rounded-full -mr-2 z-10">
              <FaAngleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
