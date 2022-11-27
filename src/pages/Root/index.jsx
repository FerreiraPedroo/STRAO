import { useContext } from "react";
import { GlobalContext } from "../../provider/app";

import { Outlet, redirect } from "react-router-dom";
import { NavBar } from "../../component/NavBar";
import { SideBar } from "../../component/SideBar";

import * as S from "./styles.jsx";

export function Root() {
    const { handleContext } = useContext(GlobalContext);
        if (handleContext.verifyTokenPresence) redirect("/");

    return (
        <S.Container>
            <NavBar />
            <S.CenterContainer>
                <SideBar />
                <Outlet />
            </S.CenterContainer>
        </S.Container>
    );
}
