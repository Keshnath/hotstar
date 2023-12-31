import React from "react";
import MySpace from "../../components/PayWall/MySpace/MySpace";
import useIsAuth from "../../Hooks/useIsAuth";
import { MySpaceLogin } from "../../components/PayWall/MySpace/MySpaceLogin";
const MySpacePage = () => {
  const isLogin = useIsAuth();
  return <>{isLogin ? <MySpace /> : <div className="bg-black"> <MySpaceLogin /></div>}</>;
};
export default MySpacePage;
