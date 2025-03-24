import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "services/api.js";

import { NotificationFull } from "component/Notification/full.jsx";
import { PageFilter } from "component/container/PageFilter/index.jsx";
import { PageList } from "component/container/PageList/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";

import { PageContainer } from "component/container/PageContainer/styles.jsx";

export const AdminUsers = () => {
	const navigate = useNavigate();
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(true);

	const [userList, setUserList] = useState([]);
	const [userSelected, setUserSelected] = useState();
	const [filtersSelected, setFiltersSelected] = useState({});

	const [userPageData] = useState({
		columns: [
			{
				title: "STATUS",
				htmlName: "status",
				size: 0,
				minSize: 120,
				maxSize: 120
			},
			{ title: "NOME", htmlName: "name", size: 0, minSize: 120, maxSize: 700 },
			{
				title: "E-MAIL",
				htmlName: "email",
				size: 0,
				align: "start",
				minSize: 120,
				maxSize: 320
			}
		],
		actions: [
			{
				name: "Novo usuário",
				typeStyle: "add",
				show: true,
				action: () => {
					navigate("/admin/user/register");
				}
			},
			{
				name: "Editar usuário",
				typeStyle: "edit",
				show: false,
				action: (data) => {
					navigate("/admin/user/edit", {
						state: { user: data }
					});
				}
			},
			{
				name: "Excluir usuário",
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
				showInfo: true,
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
				const params = new URLSearchParams(sanitizedFilters);
				const response = await api(`/admin/users?${params}`, { method: "GET" });

				setUserList(response.data);
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
		<PageContainer>
			{notification && (
				<NotificationFull
					type={notification.type}
					theme={notification.theme}
					message={notification.message}
					messageTitle={notification.messageTitle}
					onClick={notification.onClick}
					setNotification={notification.setNotification}
					buttonTitle={notification.buttonTitle}
				/>
			)}
			<PageTitle title="Usuários do sistema" backUrl={"/admin"} loading={loading} />
			<PageActions
				actionsData={userPageData.actions}
				dataSelected={userSelected}
				loading={loading}
			/>
			<PageFilter
				filtersData={userPageData.filters}
				getFiltersSelected={setFiltersSelected}
				loading={loading}
			/>

			<PageList
				listData={userList}
				columns={userPageData.columns}
				setDataSelected={setUserSelected}
				dataSelected={userSelected}
				loading={loading}
			/>
		</PageContainer>
	);
};
