import React, { useState, useContext, useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { api } from "services/api";
import { NotificationModal } from "component/Notification/modal";

import { PageList } from "component/container/PageList";
import { PageAction } from "component/container/PageAction";
import { PageTitle } from "component/container/PageTitle";
import * as S from "./styles";

export function SupplyWarehouseReceipt() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);

	const [pageLoading, setPageLoading] = useState(true);
	const [searchLoading, setSearchLoading] = useState(true);

	const [itemsList, setItemsList] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);

	const [listColumns] = useState([
		{
			name: "Id",
			htmlName: "_id",
			minSize: 96,
			maxSize: 128,
			align: "center"
		},
		{ name: "Nome", htmlName: "name", size: 256, minSize: 256, maxSize: "auto" },
		{ name: "Quantidade", htmlName: "amount", size: 256, minSize: 128, maxSize: 128, align: "center" }
		// { name: "E-mail", htmlName: "email", size: 0 }
	]);
	
	const [listActions] = useState([
		{
			name: "Novo recebimento",
			typeStyle: "add",
			show: true,
			action: () => navigate("/supply/warehouse/receipt/receive")
		},
	]);

	useEffect(() => {
		async function getItems() {
			setPageLoading(true);

			try {
				const response = await api.get(`/supply/warehouse/receipts`);

				setItemsList(response.data.data);
				setPageLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ?? "Erro ao obter os dados dos recebimentos.",
					setNotification: setNotification
				});

				setPageLoading(false);
			}
		}
		getItems();
	}, []);

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Recebimento"
				backUrl={"/supply"}
				subTitle={"Registre o recebimento de materiais selecionando o estoque e a origem do material."}
			/>

			<PageAction actionsData={listActions} dataSelected={null} loading={pageLoading} />

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
