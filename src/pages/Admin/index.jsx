import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const Admin = () => {
	const { pathname } = useLocation();
	const departmentSector = useSelector(
		(state) => state.appData.dataInfo.departmentSectors[`${pathname}`]
	);

	return (
		<S.Container>
			{departmentSector.departments ? (
				<>
					{Object.values(departmentSector.departments).map((department) => (
						<Card key={department.title} data={department} />
					))}
				</>
			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
