import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "services/api.js";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { ButtonText } from "component/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";

export function CreateStockModal({ closeModal, setNotification, updateStockList }) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	async function createCenterCost() {
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
					error.response && error.response.data.message
						? error.response.statusText
						: error.message,
				setNotification: setNotification
			});
		}
	}

	function handleItemInfoValidation() {
		const errors = {};

		if (itemInfo.name) {
			if (itemInfo.name === "") errors.name = "Não pode estar vazio.";
			if (itemInfo.name.length > 0 && itemInfo.name.length < 3)
				errors.name = "Deve ter no minimo 4 caracteres.";
		} else {
			errors.name = "Não pode estar vazio.";
		}

		if (!errors.name) {
			createCenterCost();
		} else {
			setItemInfoValidator(errors);
		}
	}

	function handleItemInfo(event) {
		setItemInfo((prev) => {
			const newItem = { ...prev };
			newItem[event.target.name] = event.target.value;

			return newItem;
		});
	}

	useEffect(() => {}, []);

	return (
		<S.Container>
			<S.Modal theme={""}>
				<S.ModalClose theme={""} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{"Novo Estoque"}</S.ModalMessageTitle>
				<S.ModalContent>
					<InputText
						inputName={"name"}
						inputValue={itemInfo.name ?? ""}
						inputWidth={"288px"}
						inputOnChange={handleItemInfo}
						inputPlaceholder={"Nome"}
						inputShowInfo={true}
						inputErrorMsg={itemInfoValidator.name}
						disabled={loading}
					/>
					<InputTextArea
						textAreaName={"description"}
						textAreaValue={itemInfo.description ?? ""}
						textAreaOnChange={handleItemInfo}
						textAreaPlaceholder={"Descrição"}
						textAreaShowInfo={true}
						textAreaErrorMsg={itemInfoValidator.description}
						width={"288px"}
						height={"92px"}
						disabled={loading}
					/>
				</S.ModalContent>
				<S.ButtonBox>
					<ButtonText
						typeStyle={"normal"}
						disabled={loading}
						value="Registrar"
						onClick={handleItemInfoValidation}
					/>
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
