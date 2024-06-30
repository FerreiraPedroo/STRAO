import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api";

import { PageContainer } from "component/container/PageContainer/styles";
import { PageTitle } from "component/container/PageTitle";


export function ManagementItemCreate() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);

	const [pageLoading, setPageLoading] = useState(true);

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

		// getItems();
	}, []);

	return (
		<PageContainer>

			<PageTitle
				title="Novo Item"
				backUrl={"/management/warehouse/items"}
				subTitle={"Registre um novo item."}
			/>

			{/* <PageAction actionsData={listActions} dataSelected={itemSelected} loading={pageLoading} /> */}

			{/* <PageFilter filtersData={filters} getFiltersSelected={getItems} loading={searchStatus} /> */}

			{/* <PageList
				listData={itemsList}
				columns={listColumns}
				setDataSelected={setItemSelected}
				loading={pageLoading}
			/> */}
		</PageContainer>
	);
}
