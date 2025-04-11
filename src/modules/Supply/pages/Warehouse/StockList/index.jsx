import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api.js";
import { NotificationModal } from "component/Notification/modal.jsx";

import { PageCardList } from "component/container/PageCardList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";

import * as S from "./styles.jsx";
import { useDispatch } from "react-redux";

export function SupplyWarehouseStockList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [pageLoading, setPageLoading] = useState(true);
	const [notification, setNotification] = useState(null);

	const [itemList, setItemList] = useState(null);

	async function getItemList() {
		setPageLoading(true);

		try {
			const response = await api.get("/supply/warehouse/stock/list");

			if (response.data.codStatus == 200) {
				const itemList = response.data.data.map((item) => {
					return { ...item, url_path: "/supply/warehouse/stock" };
				});

				setItemList(itemList);
			} else if (response.data.codStatus === 401) {
				dispatch(changeLoginReset(true));
			}
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

			<PageCardList listData={itemList} pageLoading={pageLoading} />
		</S.Container>
	);
}
