import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types";



const initialState = {
  syncData: null as any,
};

const carouselSyncSlice = createSlice({
  name: "carouselSync",
  initialState,
  reducers: {
    addCarouselSyncData: (state, action) => {
      state.syncData = action.payload;
    },
  },
});

export default carouselSyncSlice.reducer;
export const carouselSyncSliceActions = carouselSyncSlice.actions;
