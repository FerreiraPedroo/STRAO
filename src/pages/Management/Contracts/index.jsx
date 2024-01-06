import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";

import { NotificationModal } from "../../../component/Notification/modal.jsx";
import { CreateContractModal } from "./CreateContractModal/index.jsx";
import { DeleteContractModal } from "./DeleteContractModal/index.jsx";
import { PageFilter } from "../../../component/container/PageFilter";
import { PageAction } from "../../../component/container/PageAction";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageList } from "../../../component/container/PageList";

import * as S from "./styles.jsx";

export const ManagementContract = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();

	const [modalCreateContract, setModalCreateContract] = useState(false);
	const [modalDeleteContract, setModalDeleteContract] = useState(false);

	const [contractList, setContractList] = useState([]);
	const [filtersSelected, setFiltersSelected] = useState({});
	const [contractSelected, setContractSelected] = useState();

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
				title: "Data de inicio",
				htmlName: "start_date",
				size: 0,
				minSize: 96,
				maxSize: 128
			},
			{
				title: "Data de término",
				htmlName: "end_date",
				size: 0,
				minSize: 96,
				maxSize: 160
			}
		],
		actions: [
			{
				name: "Novo contrato",
				typeStyle: "add",
				show: true,
				action: () => setModalCreateContract(true)
			},
			{
				name: "Editar contrato",
				typeStyle: "edit",
				show: false,
				action: (state) => navigate("/management/contract/edit", { state })
			}
			// ,
			// {
			// 	name: "Excluir centro de custo",
			// 	typeStyle: "remove",
			// 	show: false,
			// 	action: () => setModalDeleteContract(true)
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

	async function getContractList(filters) {
		const sanitizedFilters = {};
		for (const [key, value] of Object.entries(filters)) {
			if (value) {
				sanitizedFilters[key] = value;
			} else {
				delete sanitizedFilters[key];
			}
		}

		setContractSelected("");
		setLoading(true);

		try {
			const response = await api.get("/management/contracts", {
				params: { ...sanitizedFilters }
			});

			const contractsList = response.data.data.map((contract) => {
				return {
					...contract,
					start_date: contract.start_date && new Date(contract.start_date).toLocaleDateString(),
					end_date: contract.end_date && new Date(contract.end_date).toLocaleDateString()
				};
			});

			setContractList(contractsList);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.response.data.message ?? error.response.statusText,
				setNotification: setNotification
			});
		}

		setLoading(false);
	}

	async function updateContractList() {
		getContractList(filtersSelected);
	}

	async function deleteContract(userId) {
		// try {
		// 	const { data } = await api.delete(`/management/contract/${contractId}/delete`);

		// 	setNotification({
		// 		theme: "success",
		// 		message: `Contrato excluido com sucesso.`,
		// 		setNotification: setNotification
		// 	});

		// 	setContractList((users) => users.filter((user) => user._id !== userId));
		// 	setContractSelected(null);
		// } catch (error) {
		// 	if (error.response && error.response.status === 401) {
		// 		setNotification({
		// 			theme: "fail",
		// 			message: error.response.data.message,
		// 			setNotification: setNotification
		// 		});
		// 	}
		// 	if (error.response && error.response.status === 422) {
		// 		setNotification({
		// 			theme: "fail",
		// 			message: error.response.data.message,
		// 			setNotification: setNotification
		// 		});
		// 	}
		// }
	}

	useEffect(() => {
		getContractList(filtersSelected);
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
			{modalCreateContract && (
				<CreateContractModal
					closeModal={setModalCreateContract}
					setNotification={setNotification}
					updateContractList={updateContractList}
				/>
			)}

			{modalDeleteContract && (
				<DeleteContractModal
					closeModal={setModalDeleteContract}
					contractData={contractSelected}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Lista dos contratos"
				subTitle="gerencie os contratos."
				backUrl={"/management"}
				loading={loading}
			/>

			<PageAction
				actionsData={pageData.actions}
				dataSelected={contractSelected}
				loading={loading}
			/>
			<PageFilter
				filtersData={pageData.filters}
				getFiltersSelected={setFiltersSelected}
				loading={loading}
			/>

			<PageList
				listData={contractList}
				columns={pageData.columns}
				setDataSelected={setContractSelected}
				dataSelected={contractSelected}
				loading={loading}
			/>
		</S.Container>
	);
};
