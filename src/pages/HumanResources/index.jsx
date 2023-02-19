import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const HumanResources = () => {
	const { pathname } = useLocation();
	const departmentSector = useSelector(
		(state) => state.appData.data.departmentSector[`${pathname}`]
	);

	return (
		<S.Container>
			{departmentSector.length ? (
				<>
					{departmentSector.map((card) => (
						<Card key={card.title} data={card} />
					))}
				</>
			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
