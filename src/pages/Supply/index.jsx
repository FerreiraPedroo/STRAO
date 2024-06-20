import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "component/Cards/Card";

import * as S from "./styles.jsx";

export const Supply = () => {
	const { pathname } = useLocation();
	const departmentLocation = location.pathname.split("/")[1];
	
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

	return (
		<S.Container>
			{menuSectors.map((sector) => <Card key={sector.name} data={sector} />)}

			{!menuSectors.length && <S.NoAction>Sem ações.</S.NoAction>}
		</S.Container>
	);
};
