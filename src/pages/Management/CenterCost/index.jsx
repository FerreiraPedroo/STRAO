import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "services/api.js";

import { NotificationModal } from "component/Notification/modal.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";
import { PageTitle } from "component/container/PageTitle";
import { PageList } from "component/container/PageList";

import { PageContainer } from "component/container/PageContainer/styles.jsx";

import { CreateCenterCostModal } from "./CreateCenterCostModal/index.jsx";
import { DeleteCenterCostModal } from "./DeleteCenterCostModal/index.jsx";
import { EditCenterCostModal } from "./EditCenterCostModal/index.jsx";

export const ManagementCenterCost = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();

	const [modalCreateCenterCost, setModalCreateCenterCost] = useState(false);
	const [modalDeleteCenterCost, setModalDeleteCenterCost] = useState(false);
	const [modalEditCenterCost, setModalEditCenterCost] = useState(false);

	const [centerCostList, setCenterCostList] = useState([]);
	const [filtersSelected, setFiltersSelected] = useState({});
	const [centerCostSelected, setCenterCostSelected] = useState("");

	const [pageData] = useState({
		columns: [
			{
				title: "STATUS",
				htmlName: "status",
				size: 0,
				minSize: 80,
				maxSize: 80
			},
			{
				title: "CODE",
				htmlName: "code",
				size: 0,
				minSize: 96,
				maxSize: 96
			},
			{ title: "NOME", htmlName: "name", size: 0, minSize: 120, maxSize: "100%;" }
		],
		actions: [
			{
				name: "Novo",
				typeStyle: "add",
				show: true,
				action: () => setModalCreateCenterCost(true)
			},
			{
				name: "Editar",
				typeStyle: "edit",
				show: false,
				action: () => setModalEditCenterCost(true)
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

	console.log({centerCostSelected});
	async function getCenterCostList(filters) {
		// SANITIZA O FILTRO PARA VALORES VAZIOS
		const sanitizedFilters = {};
		for (const [key, value] of Object.entries(filters)) {
			if (value) {
				sanitizedFilters[key] = value;
			} else {
				delete sanitizedFilters[key];
			}
		}

		setLoading(true);
		
		try {
			const params = new URLSearchParams(sanitizedFilters);
			const response = await api(`/management/centers-cost?${params.toString()}`, {
				method: "GET",
				params: { ...sanitizedFilters }
			});
			
			if (response.codStatus != 200) {
				throw response;
			}
			
			setCenterCostList(response.data);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.message,
				setNotification: setNotification
			});
		}
		
		setCenterCostSelected("");
		setLoading(false);
	}

	useEffect(() => {
		getCenterCostList(filtersSelected);
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

			{modalCreateCenterCost && (
				<CreateCenterCostModal
					closeModal={setModalCreateCenterCost}
					setNotification={setNotification}
					updateCenterCostList={() => getCenterCostList(filtersSelected)}
				/>
			)}

			{modalEditCenterCost && (
				<EditCenterCostModal
					closeModal={setModalEditCenterCost}
					centerCostData={centerCostSelected}
					setNotification={setNotification}
					updateCenterCostList={() => getCenterCostList(filtersSelected)}
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
				title="Centros de custo"
				backUrl={"/management"}
				loading={loading}
				backPage={false}
			/>

			<PageActions
				actionsData={pageData.actions}
				dataSelected={centerCostSelected}
				loading={loading}
			/>

			{/* <PageFilter
				filtersData={pageData.filters}
				getFiltersSelected={setFiltersSelected}
				loading={loading}
			/> */}

			<PageList
				listData={centerCostList}
				columns={pageData.columns}
				setDataSelected={setCenterCostSelected}
				dataSelected={centerCostSelected}
				loading={loading}
			/>
		</PageContainer>
	);
};
