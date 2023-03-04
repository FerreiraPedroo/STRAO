import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";

import { NotificationModal } from "../../../component/NotificationModal";
import { PageFilter } from "../../../component/PageFilter/index";
import { PageList } from "../../../component/PageList/index";
import { PageTitle } from "../../../component/PageTitle/index";

import * as S from "./styles";
import { PageAction } from "../../../component/PageAction/index.jsx";

export const AdminUserList = () => {
	const navigate = useNavigate();
	const [notification, setNotification] = useState();

	const [loading, setLoading] = useState(true);

	const [userList, setUserList] = useState([]);
	const [userSelected, setUserSelected] = useState();
	const [filtersSelected, setFiltersSelected] = useState({});
	const [userPageData] = useState({
		columns: [
			{
				title: "status",
				htmlName: "status",
				size: 0,
				minSize: 120,
				maxSize: 120
			},
			{ title: "nome", htmlName: "name", size: 0, minSize: 120, maxSize: 700 },
			{
				title: "email",
				htmlName: "email",
				size: 0,
				minSize: 120,
				maxSize: 320
			},
			{
				title: "contrato",
				htmlName: "contract",
				size: 0,
				minSize: 120,
				maxSize: "50%"
			}
		],
		actions: [
			{
				title: "Excluir",
				typeStyle: "remove",
				show: true,
				action: () => {}
			},
			{
				title: "Editar",
				typeStyle: "edit",
				show: true,
				action: (data) =>
					navigate("/admin/user/edit", {
						state: { userId: data._id }
					})
			}
		],
		filters: [
			{
				type: "text",
				htmlName: "name",
				htmlPlaceholder: "Nome"
			},
			{
				type: "select",
				htmlName: "status",
				htmlPlaceholder: "Status",
				defaultOption: 0,
				options: [
					{ title: "Todos", value: "" },
					{ title: "Ativo", value: "active" },
					{ title: "Inativo", value: "inactive" }
				]
			}
		]
	});

	const getUserList = (filters) => {
		const sanitizedFilters = {};
		for (const [key, value] of Object.entries(filters)) {
			if (value) {
				sanitizedFilters[key] = value;
			} else {
				delete sanitizedFilters[key];
			}
		}

		const getData = async function () {
			setLoading(true);
			setUserSelected("");
			try {
				const { data } = await api.get("/admin/user/list", {
					params: { ...sanitizedFilters }
				});

				setUserList(data);
			} catch (error) {
				if (error.response && error.response.status === 401) {
					error.response.data.url = removeLoginData();
					setNotification(error.response.data);
				}

				setUserList([]);
			}
			setLoading(false);
		};
		getData();
	};

	useEffect(() => {
		getUserList(filtersSelected);
	}, [filtersSelected]);

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					type={"full"}
					msg={notification.message}
					onClick={() =>
						notification.codStatus == 401 && navigate(notification.url)
					}
				/>
			)}
			<PageTitle
				title="Lista de usuários do sistema"
				subTitle="administre o acesso ao sistema"
				loading={loading}
			/>
			<PageFilter
				filtersData={userPageData.filters}
				getFiltersSelected={setFiltersSelected}
				loading={loading}
			/>
			<PageAction
				actionsData={userPageData.actions}
				dataSelected={userSelected}
				loading={loading}
			/>
			<PageList
				listData={userList}
				columns={userPageData.columns}
				setDataSelected={setUserSelected}
				loading={loading}
			/>

		</S.Container>
	);
};
