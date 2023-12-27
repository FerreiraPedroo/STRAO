import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const Supply = () => {
	const { pathname } = useLocation();
	console.log(pathname)
	const sectors = useSelector(
		(state) => state.appData.sectorsInfo
	);

	return (
		<S.Container>
			{sectors.length ? (
				<>
					{Object.values(sectors).map((sector) => (
						<Card key={sector.name} data={sector} />
					))}
				</>
			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
