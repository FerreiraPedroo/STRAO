import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";

import { NotificationModal } from "../../../component/NotificationModal";
import { PageFilter } from "../../../component/container/PageFilter";
import { PageList } from "../../../component/container/PageList";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageAction } from "../../../component/container/PageAction";

import * as S from "./styles.jsx";

export const AdminUser = () => {
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
			}
		],
		actions: [
			{
				title: "Excluir",
				typeStyle: "remove",
				show: false,
				action: (data) =>
					setNotification({
						type: "full",
						theme: "confirmation",
						messageTitle: "Excluir usuário",
						message: `Deseja confirmar a exclusão do usuário: ${data.name}`,
						setNotification: setNotification,
						onClick: () => deleteUser(data._id),
						buttonTitle: "Confirmar"
					})
			},
			{
				title: "Editar",
				typeStyle: "edit",
				show: false,
				action: (data) =>{
					navigate("/admin/user/edit", {
						state: { user: data }
					})}
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
					{ name: "Todos", value: "" },
					{ name: "Ativo", value: "active" },
					{ name: "Inativo", value: "inactive" }
				]
			}
		]
	});

	function getUserList(filters) {
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
				const response = await api.get("/admin/users", {
					params: { ...sanitizedFilters }
				});

				setUserList(response.data.data);
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
	}

	async function deleteUser(userId) {
		try {
			const { data } = await api.delete("/admin/user/delete", {
				params: { userId }
			});
			setNotification({
				type: "full",
				theme: "success",
				messageTitle: "Usuário exluído",
				message: `Usuário excluido com sucesso.`,
				setNotification: setNotification,
				onClick: () => setNotification(false),
				buttonTitle: "Fechar"
			});
			setUserList((users) => users.filter((user) => user._id !== userId));
			setUserSelected(null);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				error.response.data.url = removeLoginData();
				setNotification({
					type: "full",
					theme: "fail",
					messageTitle: "Erro",
					message: error.response.data.message,
					setNotification: setNotification,
					onClick: () => setNotification(false),
					buttonTitle: "Fechar"
				});
				setUserList([]);
			}
			if (error.response && error.response.status === 422) {
				console.log(error.response);
				setNotification({
					type: "full",
					theme: "fail",
					messageTitle: "Erro",
					message: `Não foi possivel excluir o usuário.`,
					setNotification: setNotification,
					onClick: () => setNotification(false),
					buttonTitle: "Fechar"
				});
			}
		}
	}

	useEffect(() => {
		getUserList(filtersSelected);
	}, [filtersSelected]);

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					type={notification.type}
					theme={notification.theme}
					message={notification.message}
					messageTitle={notification.messageTitle}
					onClick={notification.onClick}
					setNotification={notification.setNotification}
					buttonTitle={notification.buttonTitle}
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
				dataSelected={userSelected}
				loading={loading}
			/>
		</S.Container>
	);
};
