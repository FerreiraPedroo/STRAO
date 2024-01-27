import { useEffect, useState } from "react";
import { api } from "services/api.js";

import * as S from "./styles.jsx";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { ButtonText } from "component/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";

export function EditCenterCostModal({
	centerCostData,
	closeModal,
	setNotification,
	updateCenterCostList
}) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({
		...centerCostData,
		category_id: centerCostData.category._id,
		type_id: centerCostData.type._id
	});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	const [categories, setCategories] = useState(null);
	const [types, setTypes] = useState(null);

	async function getCategoriesList() {
		try {
			const response = await api.get("/management/categories");
			const categoriesList = response.data.data.map((category) => {
				const selected = itemInfo.category._id === category._id;

				return {
					value: category._id,
					name: category.name,
					selected: selected
				};
			});

			categoriesList.unshift({
				value: "",
				name: "Selecione a categoria"
			});

			return categoriesList;
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response ?? error.response.data.message ?? "Erro ao obter a lista de categorias.",
				setNotification: setNotification
			});

			return false;
		}
	}

	async function getTypesList() {
		try {
			const response = await api.get("/management/types");
			const typesList = response.data.data.map((type) => {
				const selected = itemInfo.type._id === type._id;

				return {
					value: type._id,
					name: type.name,
					selected: selected
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
				message: error.response.data.message ?? "Erro ao obter a lista de tipos de categoria.",
				setNotification: setNotification
			});
			return false;
		}
	}

	async function updateCenterCost() {
		try {
			const response = await api.put(`/management/center-cost`, {
				center_cost_id: itemInfo._id,
				name: itemInfo.name,
				category_id: itemInfo.category_id,
				type_id: itemInfo.type_id,
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Centro de custo atualizado sucesso."
			});
			updateCenterCostList();
			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar o centro de custo, tentar novamente."
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

		if (itemInfo.category_id) {
			if (itemInfo.category_id === "") errors.category_id = "Selecione a categoria.";
		} else {
			errors.category_id = "Não pode estar vazio.";
		}

		if (itemInfo.type_id) {
			if (itemInfo.type_id === "") errors.type_id = "Selecione um tipo.";
		} else {
			errors.type_id = "Não pode estar vazio.";
		}

		if (!errors.name && !errors.category_id && !errors.type_id) {
			updateCenterCost();
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
			console.log(newItem);
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
					<InputSelect
						selectName={"category_id"}
						selectValue={itemInfo.category_id ?? ""}
						selectOnChange={handleItemInfo}
						selectPlaceholder={"Categoria"}
						selectShowInfo={true}
						selectErrorMsg={itemInfoValidator.category_id}
						width={"256px"}
						options={categories}
						disabled={loading || !categories}
					/>
					<InputSelect
						selectName={"type_id"}
						selectValue={itemInfo.type_id ?? ""}
						selectOnChange={handleItemInfo}
						selectPlaceholder={"Tipo"}
						selectShowInfo={true}
						selectErrorMsg={itemInfoValidator.type_id}
						width={"256px"}
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
