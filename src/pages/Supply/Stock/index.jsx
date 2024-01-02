import React, { useState, useContext, useEffect } from "react";
import { api } from "../../../services/api";
import { useSelector } from "react-redux";

import findEmployee from "../../../assets/img/find-employee.svg";

import * as S from "./styles";

import { PageTitle } from "../../../component/container/PageTitle";
import { PageSectionAction } from "../../../component/container/PageSectionAction";
import { PageFilter } from "../../../component/container/PageFilter";
import { PageList } from "../../../component/container/PageList";
import { PageAction } from "../../../component/container/PageAction";
import { useNavigate } from "react-router-dom";

export const SupplyStock = () => {
	const userData = useSelector((state) => state.appData.dataInfo);
	const navigate = useNavigate();

	const [findStatus, setFindStatus] = useState(true);
	const [findStockResponse, setFindStockResponse] = useState([]);
	const [itemSelected, setItemSelected] = useState();

	const [filters] = useState([
		// {
		// 	type: "text",
		// 	htmlName: "name",
		// 	htmlPlaceholder: "Nome",
		// 	showInfo: true,
		// 	defaultOption: 0,
		// 	// options: Object.values(userData.contracts).reduce(
		// 	// 	(acc, cur) => {
		// 	// 		acc.push({ name: cur.name, value: cur._id });
		// 	// 		return acc;
		// 	// 	},
		// 	// 	[{ name: "Todos", value: "" }]
		// 	// )
		// },
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
		// {
		// 	name: "Editar",
		// 	typeStyle: "edit",
		// 	show: true,
		// 	action: (employee) =>
		// 		navigate("/rh/employee/edit", {
		// 			state: { dataId: employee._id }
		// 		})
		// }
	]);

	const getItemSearch = async (filters) => {
		setFindStatus(true);
		try {
			const { data } = await api.get("/supply/stock/items", {
				params: filters
			});

			setFindStockResponse(data.data);
			setFindStatus(false);
		} catch (error) {
			console.log("ERROR: ", error);
			setFindStatus(false);
		}
	};

	return (
		<S.Container>
			<PageTitle title="Estoque" subTitle={"Todos os items do estoque"} />

			<PageSectionAction
				actionsData={listActions}
				dataSelected={itemSelected}
				loading={findStatus}
			/>

			<PageFilter filtersData={filters} getFiltersSelected={getItemSearch} loading={findStatus} />

			<PageList
				listData={findStockResponse}
				columns={listColumns}
				setDataSelected={setItemSelected}
				loading={findStatus}
			/>
		</S.Container>
	);
};
