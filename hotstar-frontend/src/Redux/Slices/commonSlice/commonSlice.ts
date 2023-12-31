import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {  commonServices } from "../../../services/commonServices";
import { IExplore } from "../types";



export const getAll = createAsyncThunk(
    'common',
    async (apiName : string) => {
        const data = await commonServices.getDataService(apiName)        
        return {data : data.data, status : data.status }
    }
)

const initialState : IExplore = {
  data : [[],[]],
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAll.fulfilled, (state, action) => {
        state.data = action.payload.data.message
      });
    },
  });
  export default commonSlice.reducer;
  export const commonSliceActions = commonSlice.actions;