import { useCallback, useEffect, useState } from "react";
import { api } from "services/api.js";

import * as S from "./styles.jsx";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { Loading } from "component/Loading/index.jsx";
import { helperHandleChangeInput } from "helper/form/helperHandleChangeInput.js";

export function CreateItemModal({ closeModal, setNotification, updateItemList }) {
	const [loading, setLoading] = useState(false);
	const [modalStep, setModalStep] = useState(0);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	async function createItem() {
		try {
			const response = await api.post(`/management/supply/item-category`, {
				name: itemInfo.name,
				description: itemInfo.description
			});
			setNotification({
				theme: "success",
				message: "Grupo criado com sucesso."
			});

			closeModal(false);
			updateItemList();
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

	const handleItemInfoValidation = useCallback(() => {
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
				createItem();
			}
		} else {
			setItemInfoValidator(errors);
		}
	});

	const handleItemInfo = useCallback((event) => {
		helperHandleChangeInput({ event, setData: setItemInfo, action: "add" });
	});

	return (
		<S.Container>
			<S.Modal>
				<S.ModalHeader>
					<S.ModalMessageTitle>{"Nova categoria de itens"}</S.ModalMessageTitle>
					<S.ModalClose onClick={() => closeModal(false)}>
						☓
					</S.ModalClose>
				</S.ModalHeader>
				{loading ? (
					<>
						<Loading />
					</>
				) : (
					<>
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
										text="AVANÇAR"
										onClick={()=>handleItemInfoValidation()}
									/>
								</S.ButtonBox>
							</S.ModalContent>
						)}
						{modalStep == 1 && (
							<S.ConfirmContent>
								<S.ModalConfirmText>
									ATENÇÃO! DEPOIS DE CADASTRADO DA CATEGORIA NÃO PODERÁ SER ALTERADO APENAS
									DESABILITADO.
								</S.ModalConfirmText>
								<S.ModalConfirmText>
									CONFIRME OS DADOS DA CATEGORIA E CLIQUE EM REGISTRAR
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
										text="VOLTAR"
										onClick={() => setModalStep(0)}
									/>
									<ButtonText
										typeStyle={"normal"}
										disabled={loading}
										text="Registrar"
										onClick={()=>handleItemInfoValidation()}
									/>
								</S.ButtonBox>
							</S.ConfirmContent>
						)}
					</>
				)}
			</S.Modal>
		</S.Container>
	);
}
