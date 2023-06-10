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
			<S.CenterContainer>
				<NavBar />
				<S.HrLine />
				<SideBar />
			</S.CenterContainer>
			<Outlet />
		</S.Container>
	);
}
