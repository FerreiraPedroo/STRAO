import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "services/api.js";

import { NotificationModal } from "component/Notification/modal.jsx";

import { PageCardList } from "component/container/PageCardList/index.jsx";
import { PageAction } from "component/container/PageAction/index.jsx";
import { PageTitle } from "component/container/PageTitle";


import { PageContainer } from "component/container/PageContainer/styles.jsx";

export const SupplyManagementStock = () => {
	const navigate = useNavigate();

	const [pageLoading, setPageLoading] = useState(true);
	const [notification, setNotification] = useState(null);

	const [stockList, setStockList] = useState(null);

	const [listActions] = useState([
		{
			name: "Novo estoque",
			typeStyle: "add",
			show: true,
			action: () => navigate("/management/warehouse/stock/new")
		}
	]);

	async function getStockList() {
		setPageLoading(true);

		try {
			const response = await api.get("/management/warehouse/stock");
			const stockList = response.data.data.map((stock) => {
				return {
					...stock,
					url_path: `/management/warehouse/stock/edit`
				};
			});
			setStockList(stockList);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message
						? error.response.statusText
						: error.message,
				setNotification: setNotification
			});
		}

		setPageLoading(false);
	}

	useEffect(() => {
		getStockList();
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
				title="Lista de estoque"
				subTitle="gerencie os estoques da companhia, cada estoque pertence a filial."
				backUrl={"/management"}
				loading={pageLoading}
			/>

			<PageAction actionsData={listActions} />

			<PageCardList listData={stockList} pageLoading={pageLoading} />
		</PageContainer>
	);
};
