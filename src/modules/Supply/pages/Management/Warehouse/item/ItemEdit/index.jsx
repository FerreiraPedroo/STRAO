import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "services/api.js";

import { NotificationModal } from "component/Notification/modal.jsx";

import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

import { Tabs } from "component/Tabs/tabs.jsx";
import { TabItemData } from "./TabItemData/index.jsx";
import { ManagementReferenceSupplier } from "./TabItemReferenceSupplier/index.jsx";


export function SupplyManagementItemEdit() {
	const navigate = useNavigate();
	const location = useLocation();

	const [notification, setNotification] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	// DADOS ORIGINAL DO ITEM
	const [dataInfo, setDataInfo] = useState({});
	// SERVE PARA SALVAR OS DADOS QUE FORAM ALTERADOS MAS NÃO SALVOS
	const [dataInfoChanged, setDataInfoChanged] = useState({});

	const [tabSelected, setTabSelected] = useState("Dados");
	const [tabChanged, setTabChanged] = useState({});
	const [tabButtons, setTabButtons] = useState([
		{ name: "Dados", dataChanged: false },
		{ name: "Referências", dataChanged: false }
	]);

	useEffect(() => {
		async function loadInitialData() {
			setIsLoading(true);

			try {
				const responseItem = await api(`/management/supply/warehouse/item/${location.state._id}`, {
					method: "GET"
				});
				const responseItemCategories = await api(`/management/supply/item-categories`, {
					method: "GET"
				});

				responseItem.data.itemCategories = responseItemCategories.data;

				setDataInfo(responseItem.data);
				setIsLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ?? "Erro ao obter os dados do item.",
					setNotification: setNotification
				});
			}
		}

		loadInitialData();
	}, []);

	return (
		<PageContainer>
			{notification && (
				<NotificationModal message={notification.message} setNotification={setNotification} />
			)}

			<PageTitle title="Editando Item" />

			<Tabs
				tabChanged={tabChanged}
				tabButtons={tabButtons}
				tabSelected={tabSelected}
				tabSelectButton={setTabSelected}
				isSaving={isSaving}
			/>

			{isLoading ? (
				<>"Carregando os dados" </>
			) : (
				<>
					{tabSelected == "Dados" ? (
						<TabItemData
							dataInfo={dataInfo}
							setDataInfo={setDataInfo}
							isSaving={isSaving}
							setIsSaving={setIsSaving}
							tabSelected={tabSelected}
							tabChanged={tabChanged}
							setTabChanged={setTabChanged}
							setNotification={setNotification}
							dataInfoChanged={dataInfoChanged}
							setDataInfoChanged={setDataInfoChanged}
						/>
					) : null}

					{tabSelected == "Referências" ? (
						<ManagementReferenceSupplier
							infoData={dataInfo}
							setDataInfo={setDataInfo}
							isSaving={isSaving}
							setIsSaving={setIsSaving}
							tabSelected={tabSelected}
							tabChanged={tabChanged}
							setTabChanged={setTabChanged}
							setNotification={setNotification}
							dataInfoChanged={dataInfoChanged}
							setDataInfoChanged={setDataInfoChanged}
						/>
					) : null}
				</>
			)}
		</PageContainer>
	);
}
