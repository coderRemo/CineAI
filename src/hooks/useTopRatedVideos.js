import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constant";
import { addTopRatedVideos } from "../utils/moviesSlice";

const useTopRatedVideos = () => {
  const dispatch = useDispatch();
  const topRatedVideos = useSelector((store) => store.movies.topRatedVideos);

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();

    dispatch(addTopRatedVideos(json?.results));
  };

  useEffect(() => {
    !topRatedVideos && getTopRatedMovies();
  }, []);
};

export default useTopRatedVideos;
