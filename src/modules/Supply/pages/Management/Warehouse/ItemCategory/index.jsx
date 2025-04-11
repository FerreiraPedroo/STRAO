import React, { useState, useEffect } from "react";
import { api } from "services/api.js";

import { NotificationModal } from "component/Notification/modal.jsx";
// import { PageFilter } from "component/container/PageFilter";
import { PageActions } from "component/container/PageActions/index.jsx";
import { PageTitle } from "component/container/PageTitle";
import { PageList } from "component/container/PageList";

import { PageContainer } from "component/container/PageContainer/styles.jsx";

import { CreateItemModal } from "./CreateItemModal/index.jsx";
import { DeleteItemModal } from "./DeleteItemModal/index.jsx";
import { EditItemModal } from "./EditItemModal/index.jsx";

export const ManagementItemCategory = () => {

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();

	const [modalCreate, setModalCreate] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);

	const [itemList, setItemList] = useState([]);
	const [filtersSelected, setFiltersSelected] = useState({});
	const [itemSelected, setItemSelected] = useState(null);

	const [pageData] = useState({
		columns: [
			{
				title: "STATUS",
				htmlName: "status",
				size: 0,
				minSize: 96,
				maxSize: 96,
				align: "center"
			},
			{
				title: "CODE",
				htmlName: "code",
				size: 0,
				minSize: 96,
				maxSize: "20%;"
			},
			{ title: "NOME", htmlName: "name", size: 0, minSize: 120, maxSize: "100%;" }
		],
		actions: [
			{
				name: "Novo",
				typeStyle: "add",
				show: true,
				action: () => setModalCreate(true)
			},
			// {
			// 	name: "Editar",
			// 	typeStyle: "edit",
			// 	show: false,
			// 	action: () => setModalEdit(true)
			// }
			// {
			// 	name: "Desativar categoria",
			// 	typeStyle: "hidden",
			// 	show: false,
			// 	action: () => setModalDelete(true)
			// }
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

	async function getItemList(filters) {
		// SANITIZA O FILTRO PARA VALORES VAZIOS
		const sanitizedFilters = {};
		if (filters instanceof Object) {
			for (const [key, value] of Object.entries(filters)) {
				if (value) {
					sanitizedFilters[key] = value;
				} else {
					delete sanitizedFilters[key];
				}
			}
		}

		setItemSelected("");
		setLoading(true);

		const params = new URLSearchParams(sanitizedFilters);
		try {
			const response = await api(`/management/supply/item-categories${params}`, { method: "GET" });
			setItemList(response.data);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response.data && error.response.data.message
						? error.response.statusText
						: error.message,
				setNotification: setNotification
			});
		}

		setLoading(false);
	}

	async function deleteItem() {
		try {
			const params = new URLSearchParams({ center_cost_id: itemSelected });
			const { data } = await api(`/management/center-cost/change-status${params}`, {
				method: "DELETE"
			});

			setNotification({
				theme: "success",
				message: `Centro de custo excluido com sucesso.`,
				setNotification: setNotification
			});

			setItemSelected(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response.data && error.response.data.message
						? error.response.statusText
						: error.message,
				setNotification: setNotification
			});
		}
	}

	useEffect(() => {
		getItemList(filtersSelected);
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

			{modalCreate && (
				<CreateItemModal
					closeModal={setModalCreate}
					setNotification={setNotification}
					updateItemList={getItemList}
				/>
			)}

			{modalEdit && (
				<EditItemModal
					closeModal={setModalEdit}
					itemData={itemSelected}
					setNotification={setNotification}
					updateItemList={() => getItemList(filtersSelected)}
				/>
			)}

			{modalDelete && (
				<DeleteItemModal
					closeModal={setModalDelete}
					itemData={itemSelected}
					setNotification={setNotification}
				/>
			)}

			<PageTitle title="Lista das categoria de item"/>

			<PageActions actionsData={pageData.actions} dataSelected={itemSelected} loading={loading} />

			{/* <PageFilter
				filtersData={pageData.filters}
				getFiltersSelected={setFiltersSelected}
				loading={loading}
			/> */}

			<PageList
				listData={itemList}
				columns={pageData.columns}
				setDataSelected={setItemSelected}
				dataSelected={itemSelected}
				loading={loading}
			/>
		</PageContainer>
	);
};
