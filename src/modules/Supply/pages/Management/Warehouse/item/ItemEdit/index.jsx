import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "services/api.js";

import { NotificationModal } from "component/Notification/modal.jsx";

import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

import { Tabs } from "component/Tabs/tabs.jsx";
import { TabItemData } from "./TabItemData/index.jsx";
import { ManagementReferenceSupplier } from "./TabItemReferenceSupplier/index.jsx";

import { Loading } from "component/Loading/index.jsx";

export function SupplyManagementItemEdit() {
	const navigate = useNavigate();
	const location = useLocation();

	const [notification, setNotification] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	const [dataInfo, setDataInfo] = useState({});
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
				const responseItem = await api.get(
					`/management/supply/warehouse/item/${location.state._id}`
				);
				const responseItemCategories = await api.get(`/management/supply/item-categories`);

				responseItem.data.data.itemCategories = responseItemCategories.data.data;

				setDataInfo(responseItem.data.data);
				setDataInfoChanged(responseItem.data.data);
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

			<PageTitle
				title="Editando Item"
				backUrl={"/management/warehouse/items"}
				backPage={true}
				subTitle={
					"Edite as informações do item selecionado, selecione uma aba para alterar dados especificos do item."
				}
			/>

			<Tabs
				tabChanged={tabChanged}
				tabButtons={tabButtons}
				tabSelected={tabSelected}
				tabSelectButton={setTabSelected}
			/>

			{isLoading ? (
				<Loading size={96} text="Carregando os dados" />
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
							itemId={dataInfo._id}
							infoData={dataInfo.supply_reference}
							setNotification={setNotification}
						/>
					) : null}
				</>
			)}
		</PageContainer>
	);
}
