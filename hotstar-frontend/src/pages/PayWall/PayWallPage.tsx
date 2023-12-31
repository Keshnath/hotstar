import { Outlet } from "react-router-dom"
import PayWall from "../../components/PayWall/PayWall"
import React from "react";

const PayWallPage = () => {
    return (
        <>
            <PayWall />
            <Outlet />
        </>

    )
}
export default PayWallPage