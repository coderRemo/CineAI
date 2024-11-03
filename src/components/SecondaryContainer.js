import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-[5rem] lg:mt-[-9rem] xl:mt-[-20rem] relative pl-3 md:pl-10">
        <MovieList title={"Trending Shows"} movies={movies.trendingVideos} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular TV Shows"} movies={movies.popularVideo} />
        <MovieList title={"Top Rated"} movies={movies.topRatedVideos} />
        <MovieList title={"Upcoming"} movies={movies.upcomingVideos} />
      </div>
    )
  );
};

export default SecondaryContainer;
