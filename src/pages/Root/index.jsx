import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { providerClearAllInfo } from "services/store/features/data/appData";

import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "component/NavBar";
import { SideBar } from "component/SideBar";

import * as S from "./styles.jsx";

function verifyDataApp(state) {
	if (
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
	console.log("Verificação do usuario /root/index")

	if (!result) {
		const dispatch = useDispatch();
		dispatch(providerClearAllInfo());

		return <Navigate to="/" replace={true} />;
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
