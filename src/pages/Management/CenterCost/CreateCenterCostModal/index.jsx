import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "../../../../services/api.js";

import { Button } from "../../../../component/Button/index.jsx";
import { InputText } from "../../../../component/Input/Text/index.jsx";
import { InputSelect } from "../../../../component/Input/Select/index.jsx";
import { InputTextArea } from "../../../../component/Input/TextArea/index.jsx";

export function CreateCenterCostModal({ closeModal, setNotification, updateCenterCostList }) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	const [categories, setCategories] = useState(null);
	const [types, setTypes] = useState(null);

	async function getCategoriesList() {
		try {
			const response = await api.get("/management/categories");

			const categoriesList = response.data.data.map((category) => {
				return {
					value: category._id,
					name: category.name
				};
			});

			categoriesList.unshift({
				value: "",
				name: "Seleciona uma categoria"
			});

			return categoriesList;
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.response.data.message ?? "Erro ao obter a lista de categorias.",
				setNotification: setNotification
			});
		}
	}

	async function getTypesList() {
		try {
			const response = await api.get("/management/types");

			const typesList = response.data.data.map((type) => {
				return {
					value: type._id,
					name: type.name
				};
			});

			typesList.unshift({
				value: "",
				name: "Seleciona um tipo"
			});

			return typesList;
		} catch (error) {
			setNotification({
				theme: "fail",
				message: error.response.data.message ?? "Erro ao obter a lista de categoria de tipos.",
				setNotification: setNotification
			});
			return false;
		}
	}

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
			updateCenterCostList();
			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel criar o centro de custo, tentar novamente."
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

		if (itemInfo.category) {
			if (itemInfo.category === "") errors.category = "Selecione uma categoria.";
		} else {
			errors.category = "Não pode estar vazio.";
		}

		if (itemInfo.type) {
			if (itemInfo.type === "") errors.type = "Selecione um tipo.";
		} else {
			errors.type = "Não pode estar vazio.";
		}

		if (!errors.name && !errors.category && !errors.type) {
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

	useEffect(() => {
		async function getInitialData() {
			setLoading(true);
			const categoriesList = await getCategoriesList();
			const typesList = await getTypesList();

			if (categoriesList && typesList) {
				setCategories(categoriesList);
				setTypes(typesList);
				setLoading(false);
			}
		}

		getInitialData();
	}, []);

	return (
		<S.Container>
			<S.Modal theme={""}>
				<S.ModalClose theme={""} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{"Novo Centro de Custo"}</S.ModalMessageTitle>
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
					<InputSelect
						selectName={"category"}
						selectValue={itemInfo.category ?? ""}
						selectOnChange={handleItemInfo}
						selectPlaceholder={"Categoria"}
						selectShowInfo={true}
						selectErrorMsg={itemInfoValidator.category}
						width={"288px"}
						options={categories}
						disabled={loading || !categories}
					/>
					<InputSelect
						selectName={"type"}
						selectValue={itemInfo.type}
						selectOnChange={handleItemInfo ?? ""}
						selectPlaceholder={"Tipo"}
						selectShowInfo={true}
						selectErrorMsg={itemInfoValidator.type}
						width={"288px"}
						options={types}
						disabled={loading || !types}
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
					<Button
						typeStyle={"normal"}
						disabled={loading}
						value="Registrar"
						onClick={handleItemInfoValidation}
					/>
					<Button
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
