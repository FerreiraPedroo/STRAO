import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api.js";
import { NotificationModal } from "component/Notification/modal.jsx";

import { PageAction } from "component/container/PageAction/index.jsx";
import { PageCardList } from "component/container/PageCardList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";

import { CreateStockModal } from "./CreateStockModal/index.jsx";

import * as S from "./styles.jsx";

export function SupplyWarehouseStockList() {
	const navigate = useNavigate();

	const [pageLoading, setPageLoading] = useState(true);
	const [notification, setNotification] = useState(null);

	const [itemList, setItemList] = useState(null);

	async function getItemList() {
		setPageLoading(true);

		try {
			const response = await api.get("/supply/warehouse/stock/list");
			const itemList = response.data.data.map((item) => {
				return {
					...item,
					url_path: "/supply/warehouse/stock"
				};
			});
			console.log(itemList)

			setItemList(itemList);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
			});
		}

		setPageLoading(false);
	}

	useEffect(() => {
		getItemList();
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
				title="Lista de estoque"
				subTitle="Selecione um estoque para visualizar."
				backUrl={"/supply"}
				loading={pageLoading}
			/>

			<PageCardList stockListData={itemList} pageLoading={pageLoading} />
		</S.Container>
	);
}