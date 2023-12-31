import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";
import { ItopTen } from "../types";

export const getTopTen = createAsyncThunk(
  "carousel/topTen",
  async (apiName: string) => {
    const topTen = await commonServices.getDataService(apiName);
    return topTen;
  }
);

const initialState: ItopTen = {
  topTenOfToday: [],
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTopTen.fulfilled, (state, action) => {
      state.topTenOfToday = action.payload.data.topTen;
    });
  },
});

export default carouselSlice.reducer;
export const homeCarouselSliceActions = carouselSlice.actions;
