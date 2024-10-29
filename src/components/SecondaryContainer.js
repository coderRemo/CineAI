import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-[30rem] relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularVideo} />
        <MovieList title={"Top Rated"} movies={movies.topRatedVideos} />
        <MovieList title={"Upcoming"} movies={movies.upcomingVideos} />
      </div>
    )
  );
};

export default SecondaryContainer;
