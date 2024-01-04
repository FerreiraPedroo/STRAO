import { useState } from "react";
import * as S from "./styles.jsx";

import { api } from "../../../../services/api.js";

import { InputText } from "../../../../component/Input/Text/index.jsx";
import { InputTextArea } from "../../../../component/Input/TextArea/index.jsx";
import { InputDate } from "../../../../component/Input/Date/index.jsx";

export function CreateContractModal({ closeModal, setNotification, updateContractList }) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	async function createContract() {
		try {
			const response = await api.post(`/management/contract`, {
				name: itemInfo.name,
				start_date: new Date(itemInfo.start_date).toISOString(),
				end_date: new Date(itemInfo.end_date).toISOString(),
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Contrato criado com sucesso."
			});

			updateContractList();
			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel criar o contrato, tentar novamente."
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

		if (itemInfo.start_date) {
			if (itemInfo.start_date === "") errors.start_date = "Selecione umaa categoria.";
		} else {
			errors.start_date = "Não pode estar vazio.";
		}

		if (itemInfo.end_date) {
			if (itemInfo.end_date === "") errors.end_date = "Selecione uma data.";
		} else {
			errors.end_date = "Não pode estar vazio.";
		}

		if (!errors.name && !errors.start_date && !errors.end_date) {
			createContract();
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
			prev[event.target.name] = event.target.value;
			return prev;
		});
	}

	return (
		<S.Container>
			<S.Modal theme={""}>
				<S.ModalClose theme={""} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{"Novo contrato"}</S.ModalMessageTitle>
				<S.ModalContent>
					<InputText
						inputName={"name"}
						inputValue={itemInfo.name}
						inputWidth={"256px"}
						inputOnChange={handleItemInfo}
						inputPlaceholder={"Nome"}
						inputShowInfo={true}
						inputErrorMsg={itemInfoValidator.name}
						disabled={loading}
					/>
					<InputDate
						inputName={"start_date"}
						inputValue={itemInfo.start_date}
						inputOnChange={handleItemInfo}
						inputPlaceholder={"Data de início"}
						inputShowInfo={true}
						inputErrorMsg={itemInfoValidator.start_date}
						width={"256px"}
						disabled={loading}
					/>
					<InputDate
						inputName={"end_date"}
						inputValue={itemInfo.end_date}
						inputOnChange={handleItemInfo}
						inputPlaceholder={"Data de término"}
						inputShowInfo={true}
						inputErrorMsg={itemInfoValidator.end_date}
						width={"256px"}
						disabled={loading}
					/>
					<InputTextArea
						textAreaName={"description"}
						textAreaValue={itemInfo.description}
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
					<S.ButtonFormSubmit onClick={handleItemInfoValidation}>Registrar</S.ButtonFormSubmit>
					<S.ButtonFormSubmit onClick={() => closeModal(false)}>Cancelar</S.ButtonFormSubmit>
				</S.ButtonBox>
			</S.Modal>
		</S.Container>
	);
}
