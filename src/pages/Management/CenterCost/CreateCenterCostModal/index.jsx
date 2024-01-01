import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "../../../../services/api.js";

import { InputText } from "../../../../component/Input/Text/index.jsx";
import { InputSelect } from "../../../../component/Input/Select/index.jsx";
import { InputTextArea } from "../../../../component/Input/TextArea/index.jsx";

export function CreateCenterCostModal({ closeModal, setNotification }) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	const [categories, setCategories] = useState(null);
	const [types, setTypes] = useState(null);

	async function createCenterCost() {
		try {
			const response = await api.post(`/management/center-cost`, {
				name: itemInfo.name,
				category_id: itemInfo.category,
				type_id: itemInfo.type,
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Centro de custo criado com sucesso."
			});

			closeModal(true);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel criar o centro de custo, tentar novamente."
			});
		}
	}

	async function getCategoriesList() {
		setLoading(true);

		try {
			const response = await api.get("/management/categories");
			const categoriesList = response.data.data.map((category) => {
				return {
					value: category._id,
					name: category.name
				};
			});

			setCategories(categoriesList);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.response.data.message ?? "Erro ao obter a lista de categorias.",
				setNotification: setNotification
			});
		}

		setLoading(false);
	}

	async function getTypesList() {
		setLoading(true);

		try {
			const response = await api.get("/management/types");
			setTypes(response.data.data);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.response.data.message ?? "Erro ao obter a lista de tipos.",
				setNotification: setNotification
			});
		}

		setLoading(false);
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

		if (itemInfo.category) {
			if (itemInfo.category === "") errors.category = "Selecione a categoria.";
		} else {
			errors.category = "Não pode estar vazio.";
		}

		// if (itemInfo === "type") {
		// 	if (value == "") prev[key] = "Selecione o tipo.";
		// }

		if (!errors.name && !errors.category) {
			createCenterCost();
		} else {
			setItemInfoValidator(errors);
		}
	}

	function handleItemInfo(event) {
		setItemInfo((prev) => {
			prev[event.target.name] = event.target.value;
			console.log(prev);
			return prev;
		});
	}

	useEffect(() => {
		getCategoriesList();
		// getTypesList();
	}, []);

	return (
		<S.Container>
			<S.Modal theme={""}>
				<S.ModalClose theme={""} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{"Registrar Centro de Custo"}</S.ModalMessageTitle>
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
					<InputSelect
						selectName={"category"}
						selectValue={itemInfo.category}
						selectOnChange={handleItemInfo}
						selectPlaceholder={"Categoria"}
						selectShowInfo={true}
						selectErrorMsg={itemInfoValidator.category}
						width={"256px"}
						options={categories}
						disabled={loading || !categories}
					/>
					<InputSelect
						selectName={"type"}
						selectValue={itemInfo.type}
						selectOnChange={handleItemInfo}
						selectPlaceholder={"Tipo"}
						selectShowInfo={true}
						selectErrorMsg={itemInfoValidator.type}
						width={"256px"}
						options={types}
						disabled={loading || !types}
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
				<S.ButtonFormSubmit onClick={handleItemInfoValidation}>Registrar</S.ButtonFormSubmit>
				<S.ButtonFormSubmit onClick={() => closeModal(false)}>Cancelar</S.ButtonFormSubmit>
			</S.Modal>
		</S.Container>
	);
}
