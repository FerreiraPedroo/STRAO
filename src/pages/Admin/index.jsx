import React from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// import { Card } from "../../component/Cards/Card/index.jsx";

// import * as S from "./styles.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

export const Admin = () => {
	// const location = useLocation();
	// const departmentLocation = location.pathname.split("/")[1];

	// const menuSectors = useSelector((state) => {
	// 	const department = state.appData.departmentsInfo.find((department) => {
	// 		return department.url_path === "/" + departmentLocation;
	// 	});

	// 	if (!department) {
	// 		return [];
	// 	}

	// 	const sector = state.appData.sectorsInfo.filter(
	// 		(sector) => sector.department_id === department._id
	// 	);

	// 	return sector;
	// });

	return (
		<PageContainer>
			{/* {menuSectors.map((sector) => (
				<S.SectionContainer onClick={() => selectSection(sector)}>
					<Card key={sector.name} data={sector} />
				</S.SectionContainer>
			))} */}

			{/* {!menuSectors.length && <S.NoAction>Sem ações.</S.NoAction>} */}
		</PageContainer>
	);
};
