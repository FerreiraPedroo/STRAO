import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { getItemsFromFilters } from "../../../../services/Supply/Warehouse/itemAPI";
import { PageTitle } from "../../../../component/PageTitle/index.jsx";
import { PageAction } from "../../../../component/PageAction/index.jsx";

import { NotificationModal } from "../../../../component/NotificationModal/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { NotePencil } from "phosphor-react";

export function SupplyWarehouseItemEdit() {
	const navigate = useNavigate();
	const location = useLocation();
	const [item, setItem] = useState(location.state);
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(false);

	const itemActions = [
		{
			title: "Salvar",
			typeStyle: "correct",
			show: true,
			action: (item) => {
				navigate("/supply/warehouse/item/edit", {
					state: item
				});
			}
		}
	];

	useEffect(() => {}, []);
	console.log(item);

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
			<PageTitle
				title={item.title}
				icon={<NotePencil size={32} />}
				backButton={true}
			/>
			<PageAction
				actionsData={itemActions}
				dataSelected={true}
				loading={loading}
			/>
			PÁGINA NÃO FUNCIONANDO
			{/* <ItemSupplierInfo item={item.id} /> */}
		</S.Container>
	);
}