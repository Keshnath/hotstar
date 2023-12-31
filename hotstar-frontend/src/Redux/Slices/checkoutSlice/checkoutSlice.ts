import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

export const getCheckoutDetatils = createAsyncThunk(
  "checkout/details",
  async (apiName: string) => {
    const data = await commonServices.getDataService(apiName);
    return data;
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutSessionId : ""
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCheckoutDetatils.fulfilled, (state, action) => {
        state.checkoutSessionId = action.payload.data.checkoutSessionId
    });
  },
});

export default checkoutSlice.reducer;
export const checkoutSliceActions = checkoutSlice.actions;
