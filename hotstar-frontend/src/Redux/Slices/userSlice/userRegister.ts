import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

interface Iregister {
  apiName: string;
  userData: any;
}

export const registerUser = createAsyncThunk(
  "user/register",
  async (data: Iregister) => {
    const { apiName, userData } = data;
    const registerData = new FormData();
    for (const key in userData) {
      registerData.append(key, userData[key]);
    }

    const register = await commonServices.registerUserService(
      apiName,
      registerData
    );
    return register;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userRegisterationMsg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userRegisterationMsg = action.payload.data.message;
      console.log(action.payload.data.message);
    });
  },
});

export default userSlice.reducer;
export const userSliceAction = userSlice.actions;
