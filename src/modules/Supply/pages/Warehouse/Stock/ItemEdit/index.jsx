import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { useLocation, useNavigate } from "react-router-dom";
import { NotePencil } from "phosphor-react";

import { NotificationModal } from "component/Notification/modal.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";

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
			<PageActions
				actionsData={itemActions}
				dataSelected={true}
				loading={loading}
			/>
			PÁGINA NÃO FUNCIONANDO
			{/* <ItemSupplierInfo item={item.id} /> */}
		</S.Container>
	);
}
