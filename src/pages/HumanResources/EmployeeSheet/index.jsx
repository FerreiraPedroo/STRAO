import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PageList } from "../../../component/PageList";
import { PageTitle } from "../../../component/PageTitle";
import { PageFilter } from "../../../component/PageFilter";
import { PageAction } from "../../../component/PageAction";
import { api } from "../../../services/api";

import { monthList } from "../../../helper/defaultDataForm";

import * as S from "./styles";

export const HumanResourcesEmployeeSheet = () => {
	const navigate = useNavigate();
	const dataInfo = useSelector((state) => state.appData.dataInfo);

	const [searchFilter, setSearchFilter] = useState();
	const [searchEmployeeSheet, setSearchEmployeeSheet] = useState([
		{
			employee_id: 12344,
			employee_fullName: "Pedro Henrique de Assis Ferreira",
			contract_id: "12345648",
			contract_name: "Ministério da Econômia",
			status: "Enviado",
			month: "Janeiro",
			year: "2022",
			sheetFile: [],
			documentFile: []
		},
		{
			employee_id: 12344,
			employee_fullName: "Pedro Henrique de Assis Ferreira",
			contract_id: "12345648",
			contract_name: "Ministério da Econômia",
			status: "Enviado",
			month: "Janeiro",
			year: "2022",
			sheetFile: [],
			documentFile: []
		},
		{
			employee_id: 12344,
			employee_fullName: "Pedro Henrique de Assis Ferreira",
			contract_id: "12345648",
			contract_name: "Ministério da Econômia",
			status: "Pendente",
			month: "Janeiro",
			year: "2022",
			sheetFile: [],
			documentFile: []
		},
		{
			employee_id: 12344,
			employee_fullName: "Pedro Henrique de Assis Ferreira",
			contract_id: "12345648",
			contract_name: "Ministério da Econômia",
			status: "Pendente",
			month: "Janeiro",
			year: "2022",
			sheetFile: [],
			documentFile: []
		}
	]);

	const [findStatus, setFindStatus] = useState(true);
	const [findSheetsResponse, setFindSheetsResponse] = useState([]);
	const [sheetSelected, setSheetSelected] = useState(null);

	const [filters] = useState([
		{
			type: "select",
			htmlName: "month",
			htmlPlaceholder: "Mês",
			showInfo: true,
			defaultOption: 0,
			options: Object.values(monthList).reduce(
				(acc, cur) => {
					acc.push({ title: cur.title, value: cur.id });
					return acc;
				},
				[{ title: "Todos", value: "" }]
			)
		},
		{
			type: "select",
			htmlName: "year",
			htmlPlaceholder: "Ano",
			showInfo: true,
			defaultOption: 0,
			options: [
				{ title: "2023", value: "2023" },
				{ title: "2022", value: "2022" },
				{ title: "2021", value: "2021" },
				{ title: "2020", value: "2020" }
			]
		},
		{
			type: "select",
			htmlName: "contract",
			htmlPlaceholder: "Contrato",
			showInfo: true,
			defaultOption: 0,
			options: Object.values(dataInfo.contracts).map((contract) => {
				return { title: contract.title, value: contract._id };
			})
		}
	]);
	const [listColumns] = useState([
		{
			title: "Status",
			htmlName: "status",
			minSize: 160,
			maxSize: 160,
			align: "center"
		},
		{ title: "Ano", htmlName: "year", minSize: 64, maxSize: 64 },
		{ title: "Mês", htmlName: "month", minSize: 96, maxSize: 96 },
		{
			title: "Identificação",
			htmlName: "identification",
			minSize: 140,
			maxSize: 140,
			align: "center"
		},
		{ title: "Nome", htmlName: "fullName", minSize: 256 },
		{
			title: "Folha de ponto",
			htmlName: "sheetFile",
			minSize: 64,
			maxSize: 320
		},
		{
			title: "Documentos",
			htmlName: "documentsFile",
			minSize: 64,
			maxSize: 320
		}
	]);
	const [listActions] = useState([
		{
			title: "Editar",
			typeStyle: "edit",
			show: true,
			action: (employee) =>
				navigate("/rh/employee/sheet/edit", {
					state: { employee }
				})
		}
	]);

	const getSheetSearch = async (filters) => {
		setFindStatus(true);
		try {
			const { data } = await api.get("/rh/sheet/find", {
				params: filters
			});
			// console.log(data);
			setFindSheetsResponse(data);
			setFindStatus(false);
		} catch (error) {
			console.log("ERROR: ", error);
			setFindStatus(false);
		}
	};

	useEffect(() => {}, []);

	return (
		<S.Container>
			<PageTitle title="Folha de Ponto" />

			<PageFilter
				filtersData={filters}
				getFiltersSelected={getSheetSearch}
				loading={findStatus}
			/>

			<PageAction
				actionsData={sheetSelected ? listActions : []}
				dataSelected={sheetSelected}
				loading={findStatus}
			/>

			<PageList
				listData={findSheetsResponse}
				columns={listColumns}
				setDataSelected={setSheetSelected}
				dataSelected={sheetSelected}
				loading={findStatus}
			/>
		</S.Container>
	);
};
