import { useLocation, useNavigate } from "react-router-dom";
import {
	changeSectionSelected,
	changeSectionActionSelected
} from "../../services/store/features/menu/menu";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import { sideBarImgs } from "../../helper/indexImg";
import { useEffect } from "react";

export function SideBar() {
	const location = useLocation();
	const departmentLocation = location.pathname.split("/")[1];

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const menuDepartment = useSelector((state) => {
		return state.appData.departmentsInfo.find(
			(department) => department.url_path === "/" + departmentLocation
		);
	});

	const menuSectors = useSelector((state) => {
		const department = state.appData.departmentsInfo.find((department) => {
			return department.url_path === "/" + departmentLocation;
		});

		if (!department) {
			return [];
		}
		
		const sector = state.appData.sectorsInfo.filter(
			(sector) => sector.department_id === department._id
		);

		return sector;
	});

	const menuSectorSelected = useSelector((state) => state.menu.sectionSelected);
	const menuSectorActionSelected = useSelector((state) => state.menu.sectionActionSelected);

	function selectSection(sector) {
		dispatch(changeSectionSelected(sector.name));
		navigate(sector.url_path);
	}

	function selectSectionAction(actionName) {
		dispatch(changeSectionActionSelected(actionName));
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
						<S.SectionImg src={sideBarImgs[sec.url_img]} />
						<S.SectionTitle>{sec.name}</S.SectionTitle>
					</S.SectionTop>
				</S.SectionContainer>
			))}
		</S.Container>
	);
}
