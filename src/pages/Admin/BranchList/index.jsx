import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLoginReset } from "services/store/features/actions/actions.js";

import { api } from "services/api.js";
import { NotificationModal } from "component/Notification/modal.jsx";

import { PageCardList } from "component/container/PageCardList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";

import * as S from "./styles.jsx";

export function AdminBranchList() {
	const dispatch = useDispatch();

	const [pageLoading, setPageLoading] = useState(true);
	const [notification, setNotification] = useState(null);

	const [list, setList] = useState(null);

	useEffect(() => {
		async function getList() {
			setPageLoading(true);

			try {
				const response = await api("/admin/branchs", { method: "GET" });
				if (response.codStatus == 200) {
					const list = response.data.map((item) => {
						return { ...item, url_path: "/admin/branch" };
					});
					
					setList(list);
				} else if (response.codStatus === 401) {
					dispatch(changeLoginReset(true));
				}
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						error.response && error.response.message
							? error.response.statusText
							: error.message,
					setNotification: setNotification
				});
			}

			setPageLoading(false);
		}
		getList();
	}, []);

	return (
		<S.PageContainer>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Filiais"
				backUrl={"/"}
				backPage={false}
				loading={pageLoading}
			/>

			<PageCardList listData={list} pageLoading={pageLoading} />
		</S.PageContainer>
	);
}
