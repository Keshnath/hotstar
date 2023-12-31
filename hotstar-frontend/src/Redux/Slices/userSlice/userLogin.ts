import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

interface ILogin {
  apiName: string;
  userData: { email: string; password: string };
}

export const userLogin = createAsyncThunk(
  "user/login",
  async (data: ILogin) => {
    debugger;
    const { apiName, userData } = data;
    // const user:string = JSON.stringify(userData)
    // console.log(user);

    const login = await commonServices.loginUserService(apiName, userData);
    return login;
  }
);

const userLoginSlice = createSlice({
  name: "userSlice",
  initialState: {
    userLoginMsg: "",
    accessToken: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userLoginMsg = action.payload.data.msg;
      state.accessToken = action.payload.data.accessToken;
      localStorage.setItem("accessToken", action.payload.data.accessToken);
    });
  },
});

export default userLoginSlice.reducer;
export const userSliceAction = userLoginSlice.actions;
