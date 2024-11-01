import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constant";
import { addUpcomingVideos } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingVideos = useSelector((store) => store.movies.upcomingVideos);

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();

    dispatch(addUpcomingVideos(json?.results));
  };

  useEffect(() => {
    !upcomingVideos && getUpcomingMovies();
  });
};

export default useUpcomingMovies;
