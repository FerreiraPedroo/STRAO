import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	changeSectionSelected,
	changeSectionActionSelected
} from "services/store/features/menu/menu";

import { useDispatch, useSelector } from "react-redux";

import { sideBarImgs } from "helper/indexImg";
import * as S from "./styles";

export function SideBar() {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const departmentLocation = location.pathname.split("/")[1];

	const { menuDepartment, menuSectors, menuSectorSelected } = useSelector((state) => {
		const menuDepartment = state.appData.departmentsInfo.departments.find((department) => {
			return department.URLPath === "/" + departmentLocation;
		});

		if (!menuDepartment) {
			return [];
		}

		const menuSectors = state.appData.sectorsInfo.sectors.filter(
			(sector) => sector.departmentID === menuDepartment.ID
		);

		const menuSectorSelected = state.menu.sectionSelected;

		return {
			menuDepartment,
			menuSectors,
			menuSectorSelected
		};
	});

	function selectSection(sector) {
		dispatch(changeSectionSelected(sector.name));
		navigate(sector.URLPath);
	}

	useEffect(() => {
		dispatch(changeSectionActionSelected(""));
		dispatch(changeSectionSelected(""));
	}, []);

	if (location.pathname == "/home") return <></>;

	return (
		<S.Container>
			<S.DepartmentTitle>{menuDepartment.name}</S.DepartmentTitle>
			{menuSectors.map((sec) => (
				<S.SectionContainer
					key={sec.name}
					selected={sec.name === menuSectorSelected}
					onClick={() => selectSection(sec)}
				>
					<S.SectionTop>
						<S.SectionImg src={sideBarImgs[sec.URLMenuImg]} />
						<S.SectionTitle>{sec.name}</S.SectionTitle>
					</S.SectionTop>
				</S.SectionContainer>
			))}
		</S.Container>
	);
}
