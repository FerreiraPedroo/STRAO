import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "../../component/Cards/Card/index.jsx";

import * as S from "./styles.jsx";

export const Supply = () => {
	const { pathname } = useLocation();

	const menuSectors = useSelector((state) => {
		const department = state.appData.departmentsInfo.find((department) => {
			return department.url_path === pathname;
		});

		if (!department) {
			return [];
		}

		return state.appData.sectorsInfo.filter((sector) => sector.department_id === department._id);
	});

	return (
		<S.Container>
			{menuSectors.length ? (
				<>
					{Object.values(menuSectors).map((sector) => (
						<Card key={sector.name} data={sector} />
					))}
				</>
			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
