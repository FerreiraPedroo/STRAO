import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import * as S from "./styles";
import { Users } from "phosphor-react";

export const SideBar = () => {
	const location = useLocation();
	const menuActions = useSelector((state) => state.appData.data);

	console.log(`${location.pathname}`);
	console.log(menuActions.departments[location.pathname]);

	if (location.pathname == "/home") return <></>;

	return (
		<S.Container>
			<S.DepartmentTitle>
				{menuActions.departments[`${location.pathname}`].title}
			</S.DepartmentTitle>
			{menuActions.departmentActions[`${location.pathname}`].map((action) => (
				<S.MenuAction>
					<Users size={24} />
					<S.MenuActionTilte>
						{action.title}
					</S.MenuActionTilte>
				</S.MenuAction>
			))}
		</S.Container>
	);
};
