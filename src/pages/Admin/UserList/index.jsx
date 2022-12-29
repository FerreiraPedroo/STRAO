import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";
import { Notification } from "../../../component/Notification";

import { GlobalContext } from "../../../provider/app";

import { errorHandle } from "../../../services/ErrorHandle/index.jsx";
import { PageList } from "../../../component/PageList/index.jsx";

export const AdminUserList = () => {
	const navigate = useNavigate();

	const { userToken } = useContext(GlobalContext);
	const [userListData] = useState({
		columns: [
			{ title: "status", htmlName: "status", size: 0 },
			{ title: "nome", htmlName: "name", size: 0 },
			{ title: "email", htmlName: "email", size: 0 },
			{ title: "contrato", htmlName: "contract", size: 0 }
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
						state: { email: data.email }
					})
			}
		],
		filters: [
			{
				type: "text",
				htmlName: "user",
				htmlPlaceholder: "Usuário"
			},
			{
				type: "list",
				htmlName: "contract",
				htmlPlaceholder: "Contrato"
			},
			{
				type: "list",
				htmlName: "status",
				htmlPlaceholder: "",
				defaultOption: 0,
				options: ["ativo", "inativo"]
			}
		]
	});

	/**
	 * @param filters - { name: value, name: value } objeto com os filtros que serão usados na requisição.
	 * @returns
	 */
	const getUserList = (filters) => {
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
				errorHandle(error, setNotificationModal, handleContext);
			}
		};
		const data = getData();
		return data;
	};

	return (
		<PageList
			title="Lista de usuários"
			subTitle="administre os usuários do sistema."
			getListDataAPI={getUserList}
			columns={userListData.columns}
			filters={userListData.filters}
			actions={userListData.actions}
		/>
	);
};
