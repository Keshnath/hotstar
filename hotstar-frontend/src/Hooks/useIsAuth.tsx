import { useState, useEffect } from "react";
import { commonServices } from "../services/commonServices";

const useIsAuth = () => {
  const [isValid, setIsValid] = useState(false);
  const token = localStorage.getItem("accessToken");

  const verifyToken = async (apiName: string) => {

    if (!token) {
      setIsValid(false);
    } else {
      try {
        const response: any = await commonServices.protectedService(apiName);
        setIsValid(response.data.isValid);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  };

  useEffect(() => {
    verifyToken("/my-space/verify-token");
  }, [token]);

  return isValid;
};
export default useIsAuth;
