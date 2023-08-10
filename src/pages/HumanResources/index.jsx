import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const HumanResources = () => {
	const { pathname } = useLocation();
	const departmentSector = useSelector(
		(state) => state.appData.dataInfo.departmentSectors[`${pathname}`]
	);
	console.log(departmentSector)
	return (
		<S.Container>
			{departmentSector.length ? (
				<>
					{departmentSector.map((card) => (
						<Card key={card.name} data={card} />
					))}
				</>
			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
