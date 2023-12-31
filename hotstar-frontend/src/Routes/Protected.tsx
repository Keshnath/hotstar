import React, { useState, useEffect } from "react";
import useIsAuth from "../Hooks/useIsAuth";
import LoginPage from "../pages/PayWall/PayWallPage";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const Protected = (props: ProtectedRoutesProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const flag = useIsAuth();
  useEffect(() => {
    setIsAuth(flag);
  }, [flag]);
  if (isAuth === null) {
    return <div>Loading....</div>;
  } else if (!isAuth) {
    return <LoginPage />;
  } else {
    return <div>{props.children}</div>;
  }
};
export default Protected;
