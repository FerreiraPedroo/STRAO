import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const Admin = () => {
	const appData = useSelector((state) => state.appData.dataInfo)

	return (
		<S.Container>
			{appData.departments ? (
				<>
					{Object.values(appData.departments).map(
						(department) => (
							<Card key={department.title} data={department} />
						)
					)}
				</>
			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
