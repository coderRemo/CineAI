import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const AiMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.search);
  if (!movieNames) return null;

  return (
    <div>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default AiMovieSuggestions;
