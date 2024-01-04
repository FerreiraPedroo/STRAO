import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";

import { NotificationModal } from "../../../component/Notification/modal.jsx";
import { CreateCenterCostModal } from "./CreateCenterCostModal/index.jsx";
import { DeleteCenterCostModal } from "./DeleteCenterCostModal/index.jsx";
import { EditCenterCostModal } from "./EditCenterCostModal/index.jsx";
import { PageFilter } from "../../../component/container/PageFilter";
import { PageAction } from "../../../component/container/PageAction";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageList } from "../../../component/container/PageList";

import * as S from "./styles.jsx";

export const ManagementCenterCost = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();

	const [modalCreateCenterCost, setModalCreateCenterCost] = useState(false);
	const [modalDeleteCenterCost, setModalDeleteCenterCost] = useState(false);
	const [modalEditCenterCost, setModalEditCenterCost] = useState(false);

	const [centerCostList, setCenterCostList] = useState([]);
	const [filtersSelected, setFiltersSelected] = useState({});
	const [centerCostSelected, setCenterCostSelected] = useState();

	const [pageData] = useState({
		columns: [
			{
				title: "status",
				htmlName: "status",
				size: 0,
				minSize: 96,
				maxSize: 96
			},
			{ title: "nome", htmlName: "name", size: 0, minSize: 120, maxSize: "100%;" },
			{
				title: "categoria",
				htmlName: "category",
				size: 0,
				minSize: 96,
				maxSize: "25%;"
			},
			{
				title: "tipo",
				htmlName: "type",
				size: 0,
				minSize: 96,
				maxSize: "20%;"
			}
		],
		actions: [
			{
				name: "Novo centro de custo",
				typeStyle: "add",
				show: true,
				action: () => setModalCreateCenterCost(true)
			},
			{
				name: "Editar centro de custo",
				typeStyle: "edit",
				show: false,
				action: () => setModalEditCenterCost(true)
			}
			// ,
			// {
			// 	name: "Excluir centro de custo",
			// 	typeStyle: "remove",
			// 	show: false,
			// 	action: () => setModalDeleteCenterCost(true)
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

	async function getCenterCostList(filters) {
		const sanitizedFilters = {};
		for (const [key, value] of Object.entries(filters)) {
			if (value) {
				sanitizedFilters[key] = value;
			} else {
				delete sanitizedFilters[key];
			}
		}

		setCenterCostSelected("");
		setLoading(true);

		try {
			const response = await api.get("/management/centers-cost", {
				params: { ...sanitizedFilters }
			});

			setCenterCostList(response.data.data);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.response.data.message ?? error.response.statusText,
				setNotification: setNotification
			});
		}

		setLoading(false);
	}

	async function updateCenterCostList() {
		getCenterCostList(filtersSelected);
	}

	async function deleteCenterCost(userId) {
		try {
			const { data } = await api.delete(`/management/center-cost/${userId}/delete`);

			setNotification({
				theme: "success",
				message: `Centro de custo excluido com sucesso.`,
				setNotification: setNotification
			});

			setCenterCostList((users) => users.filter((user) => user._id !== userId));
			setCenterCostSelected(null);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				setNotification({
					theme: "fail",
					message: error.response.data.message,
					setNotification: setNotification
				});
			}
			if (error.response && error.response.status === 422) {
				setNotification({
					theme: "fail",
					message: error.response.data.message,
					setNotification: setNotification
				});
			}
		}
	}

	useEffect(() => {
		getCenterCostList(filtersSelected);
	}, [filtersSelected]);

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}
			{modalCreateCenterCost && (
				<CreateCenterCostModal
					closeModal={setModalCreateCenterCost}
					setNotification={setNotification}
					updateCenterCostList={updateCenterCostList}
				/>
			)}

			{modalEditCenterCost && (
				<EditCenterCostModal
					closeModal={setModalEditCenterCost}
					centerCostData={centerCostSelected}
					setNotification={setNotification}
					updateCenterCostList={updateCenterCostList}
				/>
			)}

			{modalDeleteCenterCost && (
				<DeleteCenterCostModal
					closeModal={setModalDeleteCenterCost}
					centerCostData={centerCostSelected}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Lista dos centros de custo"
				subTitle="gerencie os centros de custo que ficarão disponivel."
				backUrl={"/management"}
				loading={loading}
			/>

			<PageAction
				actionsData={pageData.actions}
				dataSelected={centerCostSelected}
				loading={loading}
			/>
			<PageFilter
				filtersData={pageData.filters}
				getFiltersSelected={setFiltersSelected}
				loading={loading}
			/>

			<PageList
				listData={centerCostList}
				columns={pageData.columns}
				setDataSelected={setCenterCostSelected}
				dataSelected={centerCostSelected}
				loading={loading}
			/>
		</S.Container>
	);
};
