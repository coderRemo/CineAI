import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    //   action: reducer f(n)
    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { toggleSearchView } = searchSlice.actions;

export default searchSlice.reducer;
