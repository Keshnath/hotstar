import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";
import { Imovies } from "../types";


export const getMoviesByGenre = createAsyncThunk(
  "movies",
  async (apiName : string) => {
    const data = await commonServices.getDataService(apiName);
    return data;
  }
);
const initialState: Imovies = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesByGenre.fulfilled, (state, action) => {
      // console.log(action.payload.data.movies)
      state.movies = action.payload.data.movies;
    });
  },
});
export default movieSlice.reducer;
export const movieSliceActions = movieSlice.actions;
