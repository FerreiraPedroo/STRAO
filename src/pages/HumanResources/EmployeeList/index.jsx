import React, { useState, useContext, useEffect } from "react";
import { api } from "../../../services/api";
import { useSelector } from "react-redux";

import findEmployee from "../../../assets/img/find-employee.svg";

import * as S from "./styles";

import { PageTitle } from "../../../component/PageTitle";
import { InputSelect } from "../../../component/Input/Select";
import { InputText } from "../../../component/Input/Text";
import { PageFilter } from "../../../component/PageFilter";
import { PageList } from "../../../component/PageList";
import { PageAction } from "../../../component/PageAction";
import { useNavigate } from "react-router-dom";

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

export const HumanResourcesEmployeeList = () => {
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
			options: Object.values(userData.contracts).reduce((acc, cur) => {
				acc.push({ title: cur.title, value: cur._id });
				return acc;
			}, [{ title: "Todos", value: "" }])
		},
		{
			type: "select",
			htmlName: "findBy",
			htmlPlaceholder: "Procurar por",
			showInfo: true,
			defaultOption: 0,
			options: [
				{ title: "Nome", value: "fullName" },
				{ title: "Identificação", value: "identification" }
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
		{ title: "Status", htmlName: "status", minSize: 96, maxSize: 128, align: "center" },
		{ title: "Nome", htmlName: "fullName", minSize: 256, maxSize: 320 },
		{ title: "E-mail", htmlName: "email", size: 0 }
	]);
	const [listActions] = useState([
		{
			title: "Editar",
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
		<S.Container>
			<PageTitle
				title="Todos os funcionários"
			/>

			<PageFilter
				filtersData={filters}
				getFiltersSelected={getEmployeeSearch}
				loading={findStatus}
			/>

			{
				employeeSelected &&
				<PageAction
					actionsData={listActions}
					dataSelected={employeeSelected}
					loading={findStatus}
				/>

			}

			<PageList
				listData={findEmployeeResponse}
				columns={listColumns}
				setDataSelected={setEmployeeSelected}
				loading={findStatus}
			/>
		</S.Container>
	);
};
