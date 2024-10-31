import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedVideos from "../hooks/useTopRatedVideos";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import AiSearchPage from "./AiSearchPage";

const Browse = () => {
  const aiSearch = useSelector((store) => store.search.showSearch);

  // Custom Hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedVideos();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {aiSearch ? (
        <AiSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Browse;
