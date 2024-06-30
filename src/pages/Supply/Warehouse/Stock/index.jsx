import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { api } from "services/api";
import { NotificationModal } from "component/Notification/modal";

import { PageList } from "component/container/PageList";
import { PageFilter } from "component/container/PageFilter";
import { PageAction } from "component/container/PageAction";
import { PageTitle } from "component/container/PageTitle";
import * as S from "./styles";

export function SupplyWarehouseStock() {
	const navigate = useNavigate();
	const location = useLocation();

	const [notification, setNotification] = useState(null);

	const [pageLoading, setPageLoading] = useState(true);
	const [searchLoading, setSearchLoading] = useState(true);

	const [itemsList, setItemsList] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);

	const [listColumns] = useState([
		{
			title: "ID",
			htmlName: "_id",
			size: 128,
			minSize: 128,
			maxSize: 220,
			align: "center"
		},
		{ title: "nome", htmlName: "name", size: 128, minSize: 128, maxSize: "100%", align: "start" },
		{
			title: "Quantidade",
			htmlName: "amount",
			size: 104,
			minSize: 104,
			maxSize: 104,
			align: "center"
		}
	]);

	// const [listActions] = useState([
	// 	{
	// 		name: "Ultimas movimentações",
	// 		typeStyle: "document",
	// 		show: true,
	// 		action: () => navigate("/supply/item/register")
	// 	},
	// 	// {
	// 	// 	name: "Editar",
	// 	// 	typeStyle: "edit",
	// 	// 	show: true,
	// 	// 	action: (employee) =>
	// 	// 		navigate("/rh/employee/edit", {
	// 	// 			state: { dataId: employee._id }
	// 	// 		})
	// 	// }
	// ]);

	// const [filters] = useState([
	// 	// {
	// 	// 	type: "select",
	// 	// 	htmlName: "contract",
	// 	// 	htmlPlaceholder: "Contrato",
	// 	// 	showInfo: true,
	// 	// 	defaultOption: 0,
	// 	// 	options: Object.values(userData.contractsInfo).reduce(
	// 	// 		(acc, cur) => {
	// 	// 			acc.push({ name: cur.name, value: cur._id });
	// 	// 			return acc;
	// 	// 		},
	// 	// 		[{ name: "Todos", value: "" }]
	// 	// 	)
	// 	// },
	// 	{
	// 		type: "select",
	// 		htmlName: "findBy",
	// 		htmlPlaceholder: "Procurar por",
	// 		showInfo: true,
	// 		defaultOption: 0,
	// 		options: [
	// 			{ name: "Nome", value: "name" },
	// 			{ name: "Identificação", value: "identification" }
	// 		]
	// 	},
	// 	{
	// 		type: "text",
	// 		htmlName: "findText",
	// 		htmlPlaceholder: "Procurar",
	// 		showInfo: true
	// 	}
	// ]);

	useEffect(() => {
		async function getItems() {
			setPageLoading(true);

			try {
				const response = await api.get(`/supply/warehouse/stock/${location.state._id}/items`);
				setItemsList(response.data.data);
				setPageLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ?? "Erro ao obter os dados do estoque.",
					setNotification: setNotification
				});

				setPageLoading(false);
			}
		}
		getItems();
	}, []);

	return (
		<S.Container>
			{/* {notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)} */}

			<PageTitle
				title="Estoque"
				backUrl={"/supply/warehouse/stocks"}
				subTitle={"Todos os items do estoque"}
			/>

			<S.StockContainer theme={"normal"}>
				<S.StockBox>
					<S.StockTitle>Nome:</S.StockTitle>
					<S.StockName>{location.state.name}</S.StockName>
				</S.StockBox>
				{location.state.contract && (
					<S.StockBox>
						<S.StockTitle>Contrato:</S.StockTitle>
						<S.StockName>{location.state.contract.name}</S.StockName>
					</S.StockBox>
				)}
			</S.StockContainer>

			{/* <PageAction actionsData={listActions} dataSelected={null} loading={pageLoading} /> */}

			{/* <PageFilter filtersData={filters} getFiltersSelected={getItems} loading={searchStatus} /> */}

			<PageList
				listData={itemsList}
				columns={listColumns}
				setDataSelected={setItemSelected}
				loading={pageLoading}
			/>
		</S.Container>
	);
}
