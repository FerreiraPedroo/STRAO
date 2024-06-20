import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "services/api.js";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { ButtonText } from "component/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { ButtonIcon } from "component/ButtonIcon/index.jsx";

export function ModalSearch({ closeModal, setNotification, addSelectedItem }) {
	const [loading, setLoading] = useState(false);

	const [itemInfoList, setItemListInfo] = useState([]);
	const [itemInfoSelected, setItemInfoSelected] = useState(null);

	async function searchItem() {
		try {
			const response = await api.post(`/management/warehouse/stock`, {
				name: itemInfo.name,
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Estoque criado com sucesso."
			});

			updateStockList();

			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
			});
		}
	}

	function handleSelectItem(item) {
		const event = {
			target: {
				value: item._id,
				name: item.name
			}
		};
		addSelectedItem(event);
	}

	useEffect(() => {}, []);

	return (
		<S.Container>
			<S.Modal theme={"normal"}>
				<S.ModalClose theme={"normal"} onClick={() => closeModal(null)}>
					☓
				</S.ModalClose>

				<S.ModalMessageTitle>{"Procurar por Localização"}</S.ModalMessageTitle>

				<S.ModalContent>
					<InputText
						inputName={"address"}
						inputValue={""}
						inputWidth={"288px"}
						inputOnChange={"handleItemInfo"}
						inputPlaceholder={"Endereço"}
						inputShowInfo={true}
						disabled={loading}
					/>

					<ButtonIcon
						typeStyle={"find"}
						onClick={() => setModal("localization")}
						loading={loading}
					/>
				</S.ModalContent>

				<S.ButtonBox>
					<ButtonText typeStyle={"normal"} disabled={loading} value="Registrar" onClick={""} />
					<ButtonText
						typeStyle={"normal"}
						disabled={loading}
						value="Cancelar"
						onClick={() => closeModal(false)}
					/>
				</S.ButtonBox>
			</S.Modal>
		</S.Container>
	);
}
