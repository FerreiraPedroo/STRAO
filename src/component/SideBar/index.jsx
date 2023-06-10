import { useLocation, useNavigate } from "react-router-dom";
import { changeSectionSelected, changeSectionActionSelected } from '../../services/store/features/menu/menu'
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import { sideBarImgs } from "../../helper/indexImg";
import { useEffect, useState } from "react";

export function SideBar() {
	const location = useLocation();
	const departmentLocation = "/" + location.pathname.split("/")[1];

	const navigate = useNavigate();
	const dispatch = useDispatch()

	const menuDepartment = useSelector((state) => state.appData.dataInfo.departments[departmentLocation]);
	const menuSectors = useSelector((state) => state.appData.dataInfo.departmentSectors[departmentLocation]);
	const menuSectorSelected = useSelector((state) => state.menu.sectionSelected);
	const menuSectorActionSelected = useSelector((state) => state.menu.sectionActionSelected);

	function selectSection(sector) {
		dispatch(changeSectionSelected(sector.title));
		navigate(departmentLocation + sector.path);
	}

	function selectSectionAction(actionTitle) {
		dispatch(changeSectionActionSelected(actionTitle));
	}

	useEffect(() => {
		dispatch(changeSectionActionSelected(""));
		dispatch(changeSectionSelected(""));
	}, [])

	if (location.pathname == "/home") return <></>;

	return (
		<S.Container>
			<S.DepartmentTitle>
				{menuDepartment.title}
			</S.DepartmentTitle>
			<S.HrLine />
			{menuSectors.map((sector) => (
				<S.SectionContainer key={sector.title}
					onClick={() => selectSection(sector)}
					hasActions={sector.sectorActions.length}
				>
					<S.SectionTop selected={sector.title === menuSectorSelected}>
						<S.SectionImg src={sideBarImgs[sector.img]} />
						<S.SectionTitle>{sector.title}</S.SectionTitle>
						{/* {
							sector.sectorActions.length ? <S.ArrowDown selected={sector.title !== menuSectorSelected} /> : ''
						} */}
					</S.SectionTop>

					{/* {menuSectorSelected === sector.title && (
						sector.sectorActions.map((action) => (
							<S.Action
								key={action.title}
								selected={action.title === menuSectorActionSelected}
								onClick={() => {
									selectSectionAction(action.title)
									navigate(departmentLocation + sector.path + action.path)
								}}
							>
								<S.ActionImg src={sideBarImgs[action.img]} />
								<S.ActionTitle>{action.title}</S.ActionTitle>
							</S.Action>
						))
					)} */}
				</S.SectionContainer>
			))
			}
		</S.Container >
	);
};
