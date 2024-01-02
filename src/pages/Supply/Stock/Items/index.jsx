import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { getItemsFromFilters } from "../../../../services/Supply/Warehouse/itemAPI";
import { PageTitle } from "../../../../component/container/PageTitle";
import { PageFilter } from "../../../../component/container/PageFilter";
import { PageList } from "../../../../component/container/PageList";
import { PageAction } from "../../../../component/container/PageAction";

import { NotificationModal } from "../../../../component/Notification/full.jsx";
import { useNavigate } from "react-router-dom";

const itemColumns = [
	{
		title: "status",
		htmlName: "status",
		minSize: 64,
		maxSize: 96,
		align: "center"
	},
	{
		title: "nome",
		htmlName: "title",
		minSize: 320,
		maxSize: 480
		// align: "center"
	},
	{
		title: "unidade de medida",
		htmlName: "unitMeasure",
		minSize: 128,
		maxSize: 256,
		align: "center"
	},
	{
		title: "Categoria",
		htmlName: "category",
		minSize: 128,
		maxSize: 256,
		align: "center"
	},
	{
		title: "descrição",
		htmlName: "description",
		minSize: 128
		// maxSize: 128,
		// align: "center"
	}
];

const itemFilterData = [
	{
		type: "text",
		htmlName: "title",
		htmlPlaceholder: "Nome",
		showInfo: true
	},
	{
		type: "select",
		htmlName: "status",
		htmlPlaceholder: "Status",
		defaultOption: 0,
		showInfo: true,
		options: [
			{ title: "Todos", value: "" },
			{ title: "Ativo", value: "active" },
			{ title: "Inativo", value: "inactive" }
		]
	},
	{
		type: "select",
		htmlName: "category",
		htmlPlaceholder: "Tipo de material",
		defaultOption: 0,
		showInfo: true,
		options: [
			{ title: "Todos(HardCode)", value: "" },
			{ title: "Eletrico", value: "eletric" },
			{ title: "Ferramentas", value: "tools" },
			{ title: "Limpeza", value: "cleanup" },
			{ title: "Papel", value: "paper" },
			{ title: "Uniforme", value: "uniform" }
		]
	}
];

export function SupplyWarehouseItems() {
	const navigate = useNavigate();
	const [items, setItems] = useState([]);
	const [itemSelected, setItemSelected] = useState();
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(false);

	async function getItems(filters) {
		setLoading(true);
		setItemSelected();

		const data = await getItemsFromFilters(filters);
		if (data.codStatus === 401) {
			setNotification({ message: data.response.statusText });
			setItems([]);
		} else {
			setItems(data);
		}
		setLoading(false);
	}

	const itemActions = [
		{
			title: "Novo material",
			typeStyle: "add",
			show: true,
			action: (item) => {
				navigate("/supply/warehouse/item/register");
			}
		},
		{
			title: "Editar",
			typeStyle: "edit",
			show: itemSelected ? true : false,
			action: (item) => {
				navigate("/supply/warehouse/item/edit", {
					state: item
				});
			}
		}
	];

	useEffect(() => {
		getItems();
	}, []);

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
				title="Materiais cadastrados"
				subTitle="todos os tipos de materiais cadastrados no sistema"
			/>
			<PageFilter
				filtersData={itemFilterData}
				getFiltersSelected={getItems}
				loading={loading}
			/>
			<PageAction
				actionsData={itemActions}
				dataSelected={itemSelected}
				loading={loading}
			/>
			<PageList
				listData={items}
				columns={itemColumns}
				setDataSelected={setItemSelected}
				loading={loading}
			/>
		</S.Container>
	);
}
