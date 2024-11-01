import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    //   action: reducer f(n)
    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleSearchView, addGptMovies } = searchSlice.actions;

export default searchSlice.reducer;
