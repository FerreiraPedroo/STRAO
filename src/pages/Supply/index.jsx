import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const Supply = () => {
	const { pathname } = useLocation();
	const departmentSector = useSelector(
		(state) => state.appData.dataInfo.departmentSectors[`${pathname}`]
	);
	console.log(departmentSector);
	return (
		<S.Container>
			{departmentSector &&
				departmentSector.map((sector) =>
					Object.values(sector.actions).map((action) => (
						<Card key={action.title} data={action} />
					))
				)}
			{!departmentSector && <S.NoAction>Sem ações.</S.NoAction>}
		</S.Container>
	);
};
