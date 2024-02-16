import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api";

import { NotificationModal } from "component/Notification/modal";

import { PageContainer } from "component/container/PageContainer/styles";
import { PageAction } from "component/container/PageAction";
import { PageTitle } from "component/container/PageTitle";
import { PageList } from "component/container/PageList";
import { PageFilter } from "component/container/PageFilter";

export function ManagementItem() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);

	const [pageLoading, setPageLoading] = useState(true);
	const [searchLoading, setSearchLoading] = useState(false);

	const [itemsList, setItemsList] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);

	const [listColumns] = useState([
		{
			title: "Status",
			htmlName: "status",
			size: 96,
			minSize: 96,
			maxSize: 96,
			align: "center"
		},
		{
			title: "Id",
			htmlName: "_id",
			minSize: 128,
			maxSize: 128,
			align: "center"
		},
		{
			title: "Nome",
			htmlName: "name",
			size: 256,
			minSize: 256,
			maxSize: "auto"
		},
		{
			title: "Categoria",
			htmlName: "category",
			size: 256,
			minSize: 128,
			maxSize: 208
		}
	]);
	const [listActions] = useState([
		{
			name: "Novo material",
			typeStyle: "add",
			show: true,
			action: () => navigate("/management/warehouse/item/register")
		},
		{
			name: "Edit material",
			typeStyle: "edit",
			show: false,
			action: (materialData) => navigate(`/management/warehouse/item/edit`, { state: materialData })
		}
	]);

	useEffect(() => {
		async function getItems() {
			setPageLoading(true);

			try {
				const response = await api.get(`/management/warehouse/items`);

				setItemsList(response.data.data);
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

			<PageTitle
				title="Material"
				backUrl={"/management"}
				subTitle={"Registre e edite materiais utitizados no almoxarifado."}
			/>

			<PageAction actionsData={listActions} dataSelected={itemSelected} loading={pageLoading} />

			{/* <PageFilter filtersData={filters} getFiltersSelected={getItems} loading={searchStatus} /> */}

			<PageList
				listData={itemsList}
				columns={listColumns}
				setDataSelected={setItemSelected}
				loading={pageLoading}
			/>
		</PageContainer>
	);
}
