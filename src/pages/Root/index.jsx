import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../component/NavBar";
import { SideBar } from "../../component/SideBar";

import * as S from "./styles.jsx";

const verifyDataApp = ({ appData }) => {
	if (
		appData.userInfo &&
		appData.token &&
		appData.data
	) {
		return true;
	}
	return false
};

export function Root() {
	const navigate = useNavigate();
	const verifyData = useSelector(verifyDataApp);

	useEffect(() => {
		if (!verifyData) navigate("/login");
	}, [verifyData]);

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
