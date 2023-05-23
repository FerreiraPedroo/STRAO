import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as S from "./styles";
import { imgs } from "../../helper/indexImg";
import { useState } from "react";

export const SideBar = () => {
	const location = useLocation();
	const departmentLocation = "/" + location.pathname.split("/")[1];

	const navigate = useNavigate();

	const menuDepartment = useSelector((state) => state.appData.dataInfo.departments[departmentLocation]);
	const menuSectors = useSelector((state) => state.appData.dataInfo.departmentSectors[departmentLocation]);

	const [sectorSelect, setSectorSelect] = useState("");
	const [sectorActionSelect, setSectorActionSelect] = useState("");

	if (location.pathname == "/home") return <></>;

	return (
		<S.Container>
			<S.DepartmentTitle>
				{menuDepartment.title}
			</S.DepartmentTitle>
			{menuSectors.map((sector) => (
				<S.SectionContainer key={sector.title}
					selected={sector.title === sectorSelect}
					onMouseEnter={() => setSectorSelect(sector.title)}
					onMouseLeave={() => setSectorSelect("")}
				>
					<S.SectionImg src={imgs[sector.img]} />
					<S.SectionTitle>{sector.title}</S.SectionTitle>
					<S.ArrowDown selected={sector.title === sectorSelect} />
					{sectorSelect === sector.title && (
						sector.sectorActions.map((action) => (
							<S.Action
								key={action.title}
								onClick={() => {
									navigate(departmentLocation + sector.path + action.path)
									setSectorSelect("")
								}}
							>
								<S.ActionImg key={imgs[sector.img]} />
								<S.ActionTitle>{action.title}</S.ActionTitle>
							</S.Action>
						))
					)}
				</S.SectionContainer>
			))
			}
		</S.Container >
	);
};
