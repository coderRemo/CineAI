import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addPopularVideo } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularVideo = useSelector((store) => store.movies.popularVideo);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularVideo(json?.results));
  };

  useEffect(() => {
    !popularVideo && getPopularMovies();
  }, []);
};

export default usePopularMovies;
