import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {commonServices } from "../../../services/commonServices";
import { ITv } from "../types";

export const getTVByGenre = createAsyncThunk(
    "tv",
    async (apiName: string) => {
      const data = await commonServices.getDataService(apiName);
      return data;
    }
  );
  const initialState: ITv = {
    tv : []
  };
  const TVSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getTVByGenre.fulfilled, (state, action) => {
        // console.log(action.payload.data.tvShow)
        state.tv = action.payload.data.tvShow
        
      });
    },
  });
  export default TVSlice.reducer;
export const TVSliceActions = TVSlice.actions;
