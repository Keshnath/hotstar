import { BASE_URL } from "./api";
import axios from "axios";

const getDataService = async (apiName: string) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    const data = await axios.get(BASE_URL + apiName);
    return data;
  } else {
    const data = await axios.get(BASE_URL + apiName, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  }
};

const registerUserService = async (apiName: string, data: object) => {
  const register = await axios.post(BASE_URL + apiName, data);
  return register;
};

const loginUserService = async (apiName: string, data: object) => {
  debugger;
  const login = await axios.post(BASE_URL + apiName, data);
  return login;
};

const protectedService = async (apiName: string) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
  const protectedService = await axios.get(BASE_URL + apiName, {
    headers,
  });
  return protectedService;
};

// const getTVShowService = async (apiName: string) => {
//   const TVData = await axios.get(BASE_URL + apiName);
//   return TVData;
// };

export const commonServices = {
  getDataService,
  registerUserService,
  loginUserService,
  protectedService,
  // getTVShowService,
};
