import { useState } from "react";
import { api } from "services/api.js";

import * as S from "./styles.jsx";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { Loading } from "component/Loading/index.jsx";

export function CreateCenterCostModal({ closeModal, setNotification, updateCenterCostList }) {
	const [loading, setLoading] = useState(false);
	const [modalStep, setModalStep] = useState(0);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	async function createCenterCost() {
		try {
			const response = await api.post(`/management/center-cost`, {
				name: itemInfo.name,
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Centro de custo criado com sucesso."
			});
			updateCenterCostList();
			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response.data && error.response.data.message
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
			if (modalStep == 0) {
				setModalStep(1);
			} else {
				createCenterCost();
			}
		} else {
			setItemInfoValidator(errors);
		}
	}

	function handleItemInfo(event) {
		setItemInfoValidator((prev) => {
			const newItem = { ...prev };
			delete newItem[event.target.name];

			return newItem;
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
				<S.ModalTitle>
					<S.ModalClose theme={""} onClick={() => closeModal(false)}></S.ModalClose>
					<S.ModalMessageTitle>{"Novo Centro de Custo"}</S.ModalMessageTitle>
				</S.ModalTitle>

				{modalStep == 0 && (
					<S.ModalContent>
						<S.InputBox>
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
						</S.InputBox>
						<S.ButtonBox>
							<ButtonText
								typeStyle={"normal"}
								disabled={loading}
								value="AVANÇAR"
								onClick={handleItemInfoValidation}
							/>
						</S.ButtonBox>
					</S.ModalContent>
				)}

				{modalStep == 1 && (
					<S.ConfirmContent>
						<S.ModalConfirmText>
							ATENÇÃO! DEPOIS DE CADASTRADO O CENTRO DE CUSTO NÃO PODERÁ SER ALTERADO APENAS
							DESABILITADO.
						</S.ModalConfirmText>
						<S.ModalConfirmText>
							CONFIRME OS DADOS DO CENTRO DE CUSTO E CLIQUE EM REGISTRAR
						</S.ModalConfirmText>

						<S.ModalConfirm>
							<S.ModalAttribute>Nome:</S.ModalAttribute>
							<S.ModalAttributeValue>{itemInfo.name}</S.ModalAttributeValue>
							<S.ModalAttribute>Descrição:</S.ModalAttribute>
							<S.ModalAttributeValue>{itemInfo.description}</S.ModalAttributeValue>
						</S.ModalConfirm>

						<S.ButtonBox>
							<ButtonText
								typeStyle={"normal"}
								disabled={loading}
								value="VOLTAR"
								onClick={() => setModalStep(0)}
							/>
							<ButtonText
								typeStyle={"normal"}
								disabled={loading}
								value="Registrar"
								onClick={handleItemInfoValidation}
							/>
						</S.ButtonBox>
					</S.ConfirmContent>
				)}
			</S.Modal>
		</S.Container>
	);
}
