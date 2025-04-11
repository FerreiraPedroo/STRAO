import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "services/api";

import { NotificationModal } from "component/Notification/modal";

import { PageContainer } from "component/container/PageContainer/styles";
import { PageActions } from "component/container/PageActions";
import { PageTitle } from "component/container/PageTitle";
import { PageList } from "component/container/PageList";

export function SupplySupplierList() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);
	const [pageLoading, setPageLoading] = useState(true);

	const [supplierList, setSupplierList] = useState([]);
	const [supplierSelected, setSupplierSelected] = useState(null);

	const [pageData] = useState({
		columns: [
			{
				title: "STATUS",
				htmlName: "status",
				size: 96,
				minSize: 96,
				maxSize: 96,
				align: "center"
			},
			{
				title: "CODE",
				htmlName: "code",
				minSize: 112,
				maxSize: 112,
				align: "start"
			},
			{
				title: "NOME",
				htmlName: "name",
				size: 256,
				minSize: 256,
				maxSize: "auto"
			},
			{
				title: "CNPJ",
				htmlName: "CNPJ",
				size: 192,
				minSize: 192,
				maxSize: 208
			}
		],
		actions: [
			{
				name: "Novo fornecedor",
				typeStyle: "add",
				show: true,
				action: () => navigate("/supply/supplier/new")
			},
			{
				name: "Edit Item",
				typeStyle: "edit",
				show: false,
				action: (supplierData) =>
					navigate(`/supply/supplier/edit`, { state: supplierData })
			}
		]
	});

	useEffect(() => {
		async function getSupplierList() {
			setPageLoading(true);

			try {
				const response = await api.get(`/supply/suppliers`);

				setSupplierList(response.data.data);
				setPageLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						error.response && error.response.data.message
							? error.response.statusText
							: error.message,
					setNotification: setNotification
				});
				setPageLoading(false);
			}
		}

		getSupplierList();
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

			<PageTitle
				title="Lista de fornecedores"
				subTitle={"Fornecedores cadastrados no sistema."}
			/>

			<PageActions actionsData={pageData.actions} dataSelected={supplierSelected} loading={pageLoading} />

			{/* <PageFilter filtersData={filters} getFiltersSelected={getItems} loading={searchStatus} /> */}

			<PageList
				listData={supplierList}
				columns={pageData.columns}
				setDataSelected={setSupplierSelected}
				loading={pageLoading}
			/>
		</PageContainer>
	);
}
