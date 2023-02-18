import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const HumanResources = () => {
	const {pathname} = useLocation();
	const departmentActions = useSelector((state) => state.appData.data.departmentActions[`${pathname}`]);
	console.log(departmentActions);

	return (
		<S.Container>
			{departmentActions.length ? (
				<>
					{Object.values(departmentActions).map(
						(card) => (
							<Card key={card.title} data={card} />
						)
					)}
				</>
			) : (
                <S.NoAction>
				Sem ações.
                </S.NoAction>
			)}
		</S.Container>
	);
};
