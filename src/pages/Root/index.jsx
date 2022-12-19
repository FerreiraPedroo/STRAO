import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../provider/app";

import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../component/NavBar";
import { SideBar } from "../../component/SideBar";

import * as S from "./styles.jsx";

export function Root() {
	const navigate = useNavigate();
	const { verifyTokenPresence } = useContext(GlobalContext);

	useEffect(() => {
		if (!verifyTokenPresence()) navigate("/login");
	}, []);

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
