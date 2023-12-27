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

	const menuDepartment = useSelector((state) => {
		return state.appData.departmentsInfo.find((department) => department.url_path === departmentLocation)
	});

	const menuSectors = useSelector((state) => {
		const department = state.appData.departmentsInfo.find((department) => {
			return department.url_path === departmentLocation
		})

		if (!department) {
			return []
		}

		return state.appData.sectorsInfo.filter((sector) => sector.department_id === department._id)
	});

	const menuSectorSelected = useSelector((state) => state.menu.sectionSelected);
	const menuSectorActionSelected = useSelector((state) => state.menu.sectionActionSelected);
	console.log({ menuSectorSelected, menuSectorActionSelected })
	
	function selectSection(sector) {
		console.log(sector.name)
		dispatch(changeSectionSelected(sector.name));
		navigate(departmentLocation + sector.url_path);
	}

	function selectSectionAction(actionName) {
		dispatch(changeSectionActionSelected(actionName));
	}

	useEffect(() => {
		dispatch(changeSectionActionSelected(""));
		dispatch(changeSectionSelected(""));
	}, [])

	if (location.pathname == "/home") return <></>;

	return (
		<S.Container>
			<S.DepartmentTitle>
				{menuDepartment.name}
			</S.DepartmentTitle>
			<S.HrLine />
			{menuSectors.map((sector) => (
				<S.SectionContainer key={sector.name}
					onClick={() => selectSection(sector)}
					hasActions={sector.sector_actions.length}
				>
					<S.SectionTop selected={sector.name === menuSectorSelected}>
						<S.SectionImg src={sideBarImgs[sector.url_img]} />
						<S.SectionTitle>{sector.name}</S.SectionTitle>
						{
							sector.sector_actions.length ? <S.ArrowDown selected={sector.name !== menuSectorSelected} /> : ''
						}
					</S.SectionTop>

					{menuSectorSelected === sector.name && (
						sector.sector_actions.map((action) => (
							<S.Action
								key={action.name}
								selected={action.name === menuSectorActionSelected}
								onClick={() => {
									selectSectionAction(action.name)
									navigate(departmentLocation + sector.url_path + action.url_path)
								}}
							>
								<S.ActionImg src={sideBarImgs[action.url_img]} />
								<S.ActionTitle>{action.name}</S.ActionTitle>
							</S.Action>
						))
					)}
				</S.SectionContainer>
			))
			}
		</S.Container >
	);
};
