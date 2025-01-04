import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api.js";
import { NotificationModal } from "component/Notification/modal.jsx";

import { PageAction } from "component/container/PageAction/index.jsx";
import { PageCardList } from "component/container/PageCardList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";

import { CreateStockModal } from "./CreateStockModal/index.jsx";

import * as S from "./styles.jsx";
import { useDispatch } from "react-redux";

export function AdminCompanyList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [pageLoading, setPageLoading] = useState(true);
	const [notification, setNotification] = useState(null);

	const [list, setList] = useState(null);

	
	useEffect(() => {
		async function getList() {
			setPageLoading(true);
	
			try {
				const response = await api.get("/admin/companies");
				if (response.data.codStatus == 200) {
					const list = response.data.data.map((item) => {
						return { ...item, url_path: "/admin/company" };
					});
	
					setList(list);
				} else if (response.data.codStatus === 401) {
					dispatch(changeLoginReseted(true));
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
		getList();
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
				title="Lista das companhias"
				subTitle="Selecione uma companhia para visualizar."
				backUrl={"/"}
				backPage={false}
				loading={pageLoading}
			/>

			<PageCardList listData={list} pageLoading={pageLoading} />
		</S.Container>
	);
}
