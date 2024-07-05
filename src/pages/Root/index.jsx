import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { providerClearAllInfo } from "services/store/features/data/appData";

import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "component/NavBar";
import { SideBar } from "component/SideBar";

import * as S from "./styles.jsx";

function verifyDataApp(state) {
	if (
		!state.appData.uiInfo ||
		!state.appData.dataVersion ||
		!state.appData.departmentsInfo ||
		!state.appData.sectorsInfo ||
		!state.appData.userInfo ||
		!state.appData.token
	) {
		return false;
	}
	return true;
}

export function Root() {
	const result = useSelector(verifyDataApp);

	if (!result) {
		const dispatch = useDispatch();
		dispatch(providerClearAllInfo())

		useSelector(verifyDataApp)
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
