import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Card } from "../Card/index.jsx";

import * as S from "./styles.jsx";

export const SectorIndex = () => {
	const { pathname } = useLocation();
	const [sectorSelected, setSelectorSelected] = useState()
	
	const departmentSector = useSelector((state) => state.appData.dataInfo.departmentSectors[`/${pathname.split("/")[1]}`]);

	useEffect(() => {
		const listActions = departmentSector.find((sector) => sector.path === `/${pathname.split("/")[2]}`)
		setSelectorSelected(listActions)
	}, [pathname])

	return (
		<S.Container>
			{sectorSelected &&
				sectorSelected.sectorActions.length ? (
				Object.values(sectorSelected.sectorActions).map((sector) => (
					<Card key={sector.title} data={sector} />
				))

			) : (
				<S.NoAction>Sem ações.</S.NoAction>
			)}
		</S.Container>
	);
};
