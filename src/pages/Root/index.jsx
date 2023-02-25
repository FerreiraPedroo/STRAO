import React from "react";
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "../../component/NavBar";
import { SideBar } from "../../component/SideBar";

import * as S from "./styles.jsx";

const verifyDataApp = (state) => {
	if (
		!state.appData.userInfo ||
		!state.appData.token ||
		!state.appData.dataInfo
	) {
		return false;
	}
	return true;
};

export function Root() {
	const result = useSelector(verifyDataApp);

	if (!result) {
		return <Navigate to="/login" replace={true} />;
	}

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
