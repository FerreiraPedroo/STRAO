import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { getDataFromNewItem } from "../../../../services/Supply/Warehouse/itemAPI";
import { PageTitle } from "../../../../component/PageTitle/index.jsx";
import { PageAction } from "../../../../component/PageAction/index.jsx";

import { NotificationModal } from "../../../../component/NotificationModal/index.jsx";
import { ItemSupplierInfo } from "../../../../component/WareHouse/Item/Supplier/index.jsx";

export function SupplyWarehouseItemRegister() {
	const [itemInfo, serItemInfo] = useState({});
	const [itemData, setItemData] = useState();

	const [loading, setLoading] = useState(false);
	const [notification, setNotification] = useState();

	const itemActions = [
		{
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
		const getData = async () => {
			const data = await getDataFromNewItem();
			setItemData(data);
		};
		getData();
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
			<PageAction
				actionsData={itemActions}
				dataSelected={true}
				loading={loading}
			/>
			{itemData && <ItemSupplierInfo itemData={itemData} />}
		</S.Container>
	);
}
