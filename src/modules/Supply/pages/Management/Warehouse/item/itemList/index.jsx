import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api";

import { NotificationModal } from "component/Notification/modal";

import { PageContainer } from "component/container/PageContainer/styles";
import { PageActions } from "component/container/PageActions";
import { PageTitle } from "component/container/PageTitle";
import { PageList } from "component/container/PageList";
import { PageFilter } from "component/container/PageFilter";


export function SupplyManagementItems() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);
	const [pageLoading, setPageLoading] = useState(true);

	const [itemsList, setItemsList] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);

	const [pageData] = useState({
		columns: [
			{
				title: "STATUS",
				htmlName: "status",
				size: 96,
				minSize: 96,
				maxSize: 96,
				align: "center"
			},
			{
				title: "CODE",
				htmlName: "code",
				minSize: 112,
				maxSize: 112,
				align: "start"
			},
			{
				title: "NOME",
				htmlName: "name",
				size: 256,
				minSize: 256,
				maxSize: "auto"
			},
			{
				title: "CATEGORIA",
				htmlName: "item_category",
				size: 256,
				minSize: 128,
				maxSize: 208
			}
		],
		actions: [
			{
				name: "Novo Item",
				typeStyle: "add",
				show: true,
				action: () => navigate("/management/warehouse/item/new")
			},
			{
				name: "Edit Item",
				typeStyle: "edit",
				show: false,
				action: (materialData) =>
					navigate(`/management/warehouse/item/edit`, { state: materialData })
			}
		]
	});

	useEffect(() => {
		async function getItems() {
			setPageLoading(true);

			try {
				const response = await api(`/management/supply/warehouse/items`, { method: "GET" });
				setItemsList(response.data);
				setPageLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						error.response && error.response.data.message
							? error.response.statusText
							: error.message,
					setNotification: setNotification
				});
				setPageLoading(false);
			}
		}

		getItems();
	}, []);

	return (
		<PageContainer>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}
			<PageTitle title="Itens" />

			<PageActions
				actionsData={pageData.actions}
				dataSelected={itemSelected}
				loading={pageLoading}
			/>

			{/* <PageFilter filtersData={filters} getFiltersSelected={getItems} loading={searchStatus} /> */}

			<PageList
				listData={itemsList}
				columns={pageData.columns}
				setDataSelected={setItemSelected}
				dataSelected={itemSelected}
				loading={pageLoading}
			/>
		</PageContainer>
	);
}
