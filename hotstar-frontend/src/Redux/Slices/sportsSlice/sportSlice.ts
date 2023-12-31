import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ISports } from "../../../types/sportsTypes";
import { commonServices } from "../../../services/commonServices";

const initialState: ISports = {
  sports: [],
  tournaments: [],
  events: [],
};
export const getSports = createAsyncThunk("sports", async (apiName: string) => {
  const data = await commonServices.getDataService(apiName);
  return { data: data.data, status: data.status };
});
export const getTournaments = createAsyncThunk(
  "tournaments",
  async (apiName: string) => {
    const data = await commonServices.getDataService(apiName);
    return { data: data.data, status: data.status };
  }
);
export const getEvents = createAsyncThunk("events", async (apiName: string) => {
  const data = await commonServices.getDataService(apiName);
  return { data: data.data, status: data.status };
});
const sportSlice = createSlice({
  name: "sport",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSports.fulfilled, (state, action) => {
      state.sports = action.payload.data.message;
    });
    builder.addCase(getTournaments.fulfilled, (state, action) => {
      state.tournaments = action.payload.data.message;
    });
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload.data.message;
    });
  },
});
export default sportSlice.reducer;
export const sportsActions = sportSlice.actions;
