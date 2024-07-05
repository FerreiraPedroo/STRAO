import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "services/api.js";

import { NotificationModal } from "component/Notification/modal.jsx";

import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

import { ManagementItemEditData } from "./ItemData/index.jsx";
import { ManagementReferenceSupplier } from "./ItemReferenceSupplier/index.jsx";

import * as S from "./styles.jsx";
import { Loading } from "component/Loading/index.jsx";

export function SupplyManagementItemEdit() {
	const navigate = useNavigate();
	const location = useLocation();

	const [loading, setLoading] = useState(false);

	const [dataInfo, setDataInfo] = useState({});
	const [notification, setNotification] = useState();

	const itemActions = [
		{
			name: "Salvar",
			typeStyle: "correct",
			show: true,
			action: (item) => {
				navigate("/supply/warehouse/item/edit", {
					state: item
				});
			}
		}
	];

	useEffect(() => {
		async function loadInitialData() {
			setLoading(true);

			try {
				const response = await api.get(`/management/warehouse/item/${location.state._id}`);

				setDataInfo(response.data.data);

				setLoading(false);
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
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Editando Item"
				backUrl={"/management/warehouse/items"}
				subTitle={"Edite as informações do item selecionado."}
			/>

			{/* <PageAction
				actionsData={itemActions}
				dataSelected={true}
				loading={loading}
			/> */}
			
			{loading ? (
				<Loading size={96} text="Carregando os dados" />
			) : (
				<>
					<ManagementItemEditData infoData={dataInfo} setNotification={setNotification} />

					<ManagementReferenceSupplier
						itemId={dataInfo._id}
						infoData={dataInfo.supply_reference}
						setNotification={setNotification}
					/>
				</>
			)}
		</PageContainer>
	);
}
