import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trendingVideos: null,
    nowPlayingMovies: null,
    trailerVideo: null,
    popularVideo: null,
    topRatedVideos: null,
    upcomingVideos: null,
  },
  reducers: {
    addTrendingVideos: (state, action) => {
      state.trendingVideos = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addTopRatedVideos: (state, action) => {
      state.topRatedVideos = action.payload;
    },
    addUpcomingVideos: (state, action) => {
      state.upcomingVideos = action.payload;
    },
  },
});

export const {
  addTrendingVideos,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularVideo,
  addTopRatedVideos,
  addUpcomingVideos,
} = moviesSlice.actions;

export default moviesSlice.reducer;
