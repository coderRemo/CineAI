import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TRENDING_VIDEOS } from "../utils/constant";
import { addTrendingVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingVideos = () => {
  const dispatch = useDispatch();
  const trendingVideos = useSelector((store) => store.movies.trendingVideos);

  const getTrendingVideos = async () => {
    const data = await fetch(TRENDING_VIDEOS, API_OPTIONS);
    const json = await data.json();

    dispatch(addTrendingVideos(json?.results));
  };

  useEffect(() => {
    !trendingVideos && getTrendingVideos();
  }, []);
};

export default useTrendingVideos;
