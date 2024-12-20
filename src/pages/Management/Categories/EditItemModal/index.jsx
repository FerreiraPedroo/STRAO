import { useState } from "react";
import { api } from "services/api.js";

import * as S from "./styles.jsx";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";

export function EditItemModal({
	itemData,
	closeModal,
	setNotification,
	updateItemList
}) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({
		...itemData,
	});
	const [itemInfoValidator, setItemInfoValidator] = useState({});


	async function updateCategory() {
		try {
			const response = await api.put(`/management/category`, {
				name: itemInfo.name,
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Categoria atualizado sucesso."
			});
			updateItemList();
			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar a categoria, tentar novamente."
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
			updateCategory();
		} else {
			setItemInfoValidator(errors);
		}
	}

	function handleItemInfo(event) {
		setItemInfoValidator(() => {
			const handleValid = delete itemInfoValidator[event.target.name];
			return handleValid;
		});
		setItemInfo((prev) => {
			const newItem = { ...prev };
			newItem[event.target.name] = event.target.value;
			return newItem;
		});
	}

	return (
		<S.Container>
			<S.Modal theme={""}>
				<S.ModalClose theme={""} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{"Editando centro de custo"}</S.ModalMessageTitle>
				<S.ModalContent>
					<InputText
						inputName={"name"}
						inputValue={itemInfo.name ?? ""}
						inputWidth={"256px"}
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
						width={"256px"}
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
