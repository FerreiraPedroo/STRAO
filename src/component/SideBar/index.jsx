import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Users } from "phosphor-react";

import * as S from "./styles";

export const SideBar = () => {
	const location = useLocation();
	const departmentLocation = "/" + location.pathname.split("/")[1];

	const navigate = useNavigate();

	const menu = useSelector((state) => state.appData.dataInfo);

	if (location.pathname == "/home") return <></>;

	return (
		<S.Container>
			<S.DepartmentTitle>
				{menu.departments[departmentLocation].title}
			</S.DepartmentTitle>
			{menu.departmentSectors[departmentLocation].map((sector) => (
				<S.SectionContainer key={sector.title}>
					<S.SectionHead>
						<Users size={24} />
						<S.SectionHeadTitle>{sector.title}</S.SectionHeadTitle>
					</S.SectionHead>
					<S.LineSeparation />
					{sector.actions.map((action) => (
						<S.Action
							key={action.title}
							onClick={() => navigate(action.path)}
							selected={location.pathname == action.path}
						>
							<S.ActionTitle>+ {action.title}</S.ActionTitle>
						</S.Action>
					))}
				</S.SectionContainer>
			))}
		</S.Container>
	);
};
