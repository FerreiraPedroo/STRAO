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

		const sectorNoGroup = state.appData.sectorsInfo.nogroup.filter(
			(sector) => sector.department_id === department._id
		);
		const sectorGroup = Object.entries(state.appData.sectorsInfo.group).reduce(
			(prev, [sectorKey, sectorValue]) => {
				const sectorFilteres = sectorValue.filter((sector) => {
					return sector.department_id === department._id;
				});

				if (sectorFilteres.length) {
					prev[sectorKey] = sectorFilteres;
				}
				return prev;
			},
			{}
		);

		return [sectorNoGroup, sectorGroup];
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
			{menuSectors.map((sector) =>
				sector instanceof Array
					? sector.map((sec, index) => (
							<S.SectionContainer key={sec.name + index} onClick={() => selectSection(sec)}>
								<S.SectionTop selected={sec.name === menuSectorSelected}>
									<S.SectionImg src={sideBarImgs[sec.url_img]} />
									<S.SectionTitle>{sec.name}</S.SectionTitle>
								</S.SectionTop>
							</S.SectionContainer>
					  ))
					: Object.entries(sector).map(([groupKey, group], index) => (
							<S.GroupContainer key={groupKey + index}>
								<S.GroupTitle>{groupKey}</S.GroupTitle>
								{group.map((sec, index) => (
									<S.SectionContainer key={sec.name + index} onClick={() => selectSection(sec)}>
										<S.SectionTop selected={sec.name === menuSectorSelected}>
											<S.SectionImg src={sideBarImgs[sec.url_img]} />
											<S.SectionTitle>{sec.name}</S.SectionTitle>
										</S.SectionTop>
									</S.SectionContainer>
								))}
							</S.GroupContainer>
					  ))
			)}
		</S.Container>
	);
}
