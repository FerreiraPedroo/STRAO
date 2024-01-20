import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "../../component/Cards/Card/index.jsx";

import * as S from "./styles.jsx";

export const Management = () => {
	const { pathname } = useLocation();

	const menuSectors = useSelector((state) => {
		const department = state.appData.departmentsInfo.find((department) => {
			return department.url_path === pathname;
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

	return (
		<S.Container>
			{menuSectors.map((sector) =>
				sector instanceof Array
					? sector.map((sec) => <Card key={sec.name} data={sec} />)
					: Object.entries(sector).map(([groupKey, group]) => (
							<S.GroupContainer key={groupKey}>
								<S.GroupTitle>{groupKey}</S.GroupTitle>
								<S.SectionContainer onClick={() => selectSection(sec)}>
									{group.map((sec) => (
										<Card key={sec.name} data={sec} />
									))}
								</S.SectionContainer>
							</S.GroupContainer>
					  ))
			)}

			{!menuSectors.length && <S.NoAction>Sem ações.</S.NoAction>}
		</S.Container>
	);
};
