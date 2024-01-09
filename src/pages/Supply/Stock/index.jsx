import React, { useState, useContext, useEffect } from "react";
import { api } from "../../../services/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NotificationModal } from "../../../component/Notification/modal";
import { PageFilter } from "../../../component/container/PageFilter";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageList } from "../../../component/container/PageList";
import { PageAction } from "../../../component/container/PageAction";

import * as S from "./styles";

export const SupplyStock = () => {
	const navigate = useNavigate();

	const userData = useSelector((state) => state.appData);

	const [notification, setNotification] = useState(null);

	const [searchStatus, setSearchStatus] = useState(true);
	const [stockList, setStockList] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);

	const [filters] = useState([
		// {
		// 	type: "select",
		// 	htmlName: "contract",
		// 	htmlPlaceholder: "Contrato",
		// 	showInfo: true,
		// 	defaultOption: 0,
		// 	options: Object.values(userData.contractsInfo).reduce(
		// 		(acc, cur) => {
		// 			acc.push({ name: cur.name, value: cur._id });
		// 			return acc;
		// 		},
		// 		[{ name: "Todos", value: "" }]
		// 	)
		// },
		{
			type: "select",
			htmlName: "findBy",
			htmlPlaceholder: "Procurar por",
			showInfo: true,
			defaultOption: 0,
			options: [
				{ name: "Nome", value: "name" },
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
			name: "Novo item",
			typeStyle: "add",
			show: true,
			action: () => navigate("/supply/item/register")
		},
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

	const getItemSearch = async (filters) => {
		setSearchStatus(true);

		try {
			const response = await api.get("/supply/warehouse/items", {
				params: filters
			});

			setSearchStockResponse(response.data.data);
			setSearchStatus(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					(error.response && error.response.data.message) ?? "Erro ao obter os dados do estoque.",
				setNotification: setNotification
			});

			setSearchStatus(false);
		}
	};

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle title="Estoque" backUrl={"/supply"} subTitle={"Todos os items do estoque"} />

			<PageAction actionsData={listActions} dataSelected={itemSelected} loading={searchStatus} />

			<PageFilter filtersData={filters} getFiltersSelected={getItemSearch} loading={searchStatus} />

			<PageList
				listData={stockList}
				columns={listColumns}
				setDataSelected={setItemSelected}
				loading={searchStatus}
			/>
		</S.Container>
	);
};
