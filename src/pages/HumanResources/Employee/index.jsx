import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "services/api";

import { PageTitle } from "component/container/PageTitle";
import { PageFilter } from "component/container/PageFilter";
import { PageList } from "component/container/PageList";
import { PageActions } from "component/container/PageActions";
import { PageContainer } from "component/container/PageContainer/styles";

// const filters = [
// 	{
// 		type: "text",
// 		htmlName: "user",
// 		htmlPlaceholder: "Usuário"
// 	},
// 	{
// 		type: "select",
// 		htmlName: "contract",
// 		htmlPlaceholder: "Contrato",

// 		defaultOption: 0,
// 		options: [
// 			{ title: "Todos", value: "" },
// 			{ title: "Ativo", value: "active" },
// 			{ title: "Inativo", value: "inactive" }
// 		]
// 	}
// ];

export const HumanResourcesEmployee = () => {
	const userData = useSelector((state) => state.appData.dataInfo);
	const navigate = useNavigate();

	const [findStatus, setFindStatus] = useState(true);
	const [findEmployeeResponse, setFindEmployeeResponse] = useState([]);
	const [employeeSelected, setEmployeeSelected] = useState();

	const [filters] = useState([
		{
			type: "select",
			htmlName: "contract",
			htmlPlaceholder: "Contrato",
			showInfo: true,
			defaultOption: 0,
			options: Object.values(userData.contracts).reduce(
				(acc, cur) => {
					acc.push({ name: cur.name, value: cur._id });
					return acc;
				},
				[{ name: "Todos", value: "" }]
			)
		},
		{
			type: "select",
			htmlName: "findBy",
			htmlPlaceholder: "Procurar por",
			showInfo: true,
			defaultOption: 0,
			options: [
				{ name: "Nome", value: "fullName" },
				{ name: "Identificação", value: "identification" }
			]
		},
		{
			type: "text",
			htmlName: "findText",
			htmlPlaceholder: "Procurar",
			showInfo: true
		}
	]);
	const [listColumns] = useState([
		{
			name: "Status",
			htmlName: "status",
			minSize: 96,
			maxSize: 128,
			align: "center"
		},
		{ name: "Nome", htmlName: "fullName", minSize: 256, maxSize: 320 },
		{ name: "E-mail", htmlName: "email", size: 0 }
	]);
	const [listActions] = useState([
		{
			name: "Editar",
			typeStyle: "edit",
			show: true,
			action: (employee) =>
				navigate("/rh/employee/edit", {
					state: { dataId: employee._id }
				})
		}
	]);

	// const handleFilter = (filterName, filterData) => {
	// 	const filter = { ...searchFilter, [filterName]: filterData };
	// 	setSearchFilter(filter);
	// };

	const getEmployeeSearch = async (filters) => {
		setFindStatus(true);
		try {
			const { data } = await api.get("/rh/employee/find", {
				params: filters
			});

			setFindEmployeeResponse(data.data);
			setFindStatus(false);
		} catch (error) {
			console.log("ERROR: ", error);
			setFindStatus(false);
		}
	};

	return (
		<PageContainer>
			<PageTitle title="Todos os funcionários" />

			<PageFilter
				filtersData={filters}
				getFiltersSelected={getEmployeeSearch}
				loading={findStatus}
			/>

			<PageActions
				actionsData={listActions}
				dataSelected={employeeSelected}
				loading={findStatus}
			/>

			<PageList
				listData={findEmployeeResponse}
				columns={listColumns}
				setDataSelected={setEmployeeSelected}
				loading={findStatus}
			/>
		</PageContainer>
	);
};
