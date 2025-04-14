import { useEffect, useState } from "react";
import * as S from "./styles.jsx";


import { PageTitle } from "component/container/PageTitle/index.jsx";
import { NotificationModal } from "component/Notification/modal.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";
// import { ItemSupplierInfo } from "component/WareHouse/Item/Supplier/index.jsx";


export function SupplyWarehouseShippingItemRegister() {
	const [itemInfo, serItemInfo] = useState({});
	const [itemData, setItemData] = useState(null);

	const [loading, setLoading] = useState(false);
	const [notification, setNotification] = useState();

	const itemActions = [
		{
			name: "Salvar",
			title: "Salvar",
			typeStyle: "correct",
			show: true,
			action: (item) => {
				navigate("", {
					state: item
				});
			}
		}
	];

	useEffect(() => {
		async function getData() {
			setLoading(true);

			try {
				const response = await api.get(`/supply/warehouse/items`);

				setItemData(response.data.data);
				setLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ??
						"Erro ao obter os dados para criação do item.",
					setNotification: setNotification
				});
			}
		}

		// getData();
	}, []);

	console.log("SupplyWarehouseItemRegister:", itemData);
	return (
		<S.Container>
			{notification && (
				<NotificationModal
					type="full"
					theme="fail"
					message={notification.message}
					messageTitle={"ERRO"}
					onClick={() => {}}
				/>
			)}
			<PageTitle title={"Registro de item"} backButton={true} />
			<PageActions actionsData={itemActions} dataSelected={true} loading={loading} />
			{/* {itemData && <ItemSupplierInfo itemData={itemData} />} */}
		</S.Container>
	);
}
