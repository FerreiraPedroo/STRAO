import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";

import { NotificationModal } from "../../../component/NotificationModal";
import { GlobalContext } from "../../../provider/app";
import { PageList } from "../../../component/PageList/index.jsx";
import { PageTitle } from "../../../component/PageTitle/index.jsx";

import * as S from "./styles";

export const AdminUserList = () => {
	const navigate = useNavigate();
	const { userToken } = useContext(GlobalContext);
	const [notification, setNotification] = useState();
	const [userListData] = useState({
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
				title: "Remover",
				typeStyle: "remove",
				action: () => {}
			},
			{
				title: "Editar",
				typeStyle: "edit",
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
				type: "list",
				htmlName: "status",
				htmlPlaceholder: "",
				defaultOption: 1,
				options: [
					{ title: "ativo", value: "active" },
					{ title: "inativo", value: "inactive" }
				]
			}
		]
	});

	const getUserList = (filters) => {
		// filters - { name: value, name: value } objeto com os filtros que serão usados na requisição.
		const getData = async function () {
			try {
				const { data } = await api({
					url: "/admin/user/list",
					method: "GET",
					headers: { "x-access-token": userToken },
					params: { ...filters },
					withCredentials: true
				});
				return data;
			} catch (error) {
				if (!error.response.status && !error.response.data) {
					error.response.data = { message: error.message };
				}
				setNotification(error.response.data);
				return [];
			}
		};
		const data = getData();
		return data;
	};

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					type={"full"}
					msg={notification.message}
					onClick={() => navigate(-1)}
				/>
			)}
			<PageTitle
				title="Lista de usuários do sistema"
				subTitle="administre o acesso ao sistema"
			/>
			<PageList
				getListDataAPI={getUserList}
				columns={userListData.columns}
				filters={userListData.filters}
				actions={userListData.actions}
			/>
		</S.Container>
	);
};
