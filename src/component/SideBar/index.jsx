import { useCallback, useEffect, useMemo } from "react";
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

	const menuDepartment = useSelector((state) => {
		return state.appData.departmentsInfo.departments.find((department) => {
			return department.URLPath === "/" + departmentLocation;
		});
	});

	const menuSectors = useSelector((state) => {
		const department = state.appData.departmentsInfo.departments.find((department) => {
			return department.URLPath === "/" + departmentLocation;
		});

		if (!department) {
			return {};
		}

		const sector = state.appData.sectorsInfo.sectors.filter(
			(sector) => sector.departmentID === department.ID
		);

		return sector;
	});

	const menuSectorSelected = useSelector((state) => state.menu.sectionSelected);

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
			<S.HrLine />
			{menuSectors.map((sec) => (
				<S.SectionContainer key={sec.name} onClick={() => selectSection(sec)}>
					<S.SectionTop selected={sec.name === menuSectorSelected}>
						<S.SectionImg src={sideBarImgs[sec.URLMenuImg]} />
						<S.SectionTitle>{sec.name}</S.SectionTitle>
					</S.SectionTop>
				</S.SectionContainer>
			))}
		</S.Container>
	);
}
