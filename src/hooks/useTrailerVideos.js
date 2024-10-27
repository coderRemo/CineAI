import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useTrailerVideos = (movieId) => {
  const dispatch = useDispatch();

  // Fetch Trailer Videos & updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    const filteredTrailer = json?.results.filter((video) => video.type === "Trailer");
    const trailer = filteredTrailer.length ? filteredTrailer[0] : json.results[0];
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideos;
