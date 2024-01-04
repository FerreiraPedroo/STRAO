import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "../../../../services/api.js";

import { InputText } from "../../../../component/Input/Text/index.jsx";
import { InputSelect } from "../../../../component/Input/Select/index.jsx";
import { InputTextArea } from "../../../../component/Input/TextArea/index.jsx";

export function EditCenterCostModal({
	centerCostData,
	closeModal,
	setNotification,
	updateCenterCostList
}) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({
		...centerCostData,
		category_id: centerCostData.category._id
	});
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	const [categories, setCategories] = useState(null);
	const [types, setTypes] = useState(null);

	async function getCategoriesList() {
		setLoading(true);

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

			setCategories(categoriesList);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response ?? error.response.data.message ?? "Erro ao obter a lista de categorias.",
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

	async function updateCenterCost() {
		try {
			const response = await api.put(`/management/center-cost`, {
				center_cost_id: itemInfo._id,
				name: itemInfo.name,
				category_id: itemInfo.category_id,
				type_id: itemInfo.type,
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

		if (itemInfo.category) {
			if (itemInfo.category === "") errors.category = "Selecione a categoria.";
		} else {
			errors.category = "Não pode estar vazio.";
		}

		// if (itemInfo === "type") {
		// 	if (value == "") prev[key] = "Selecione o tipo.";
		// }

		if (!errors.name && !errors.category) {
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
			console.log(event.target.value);
			return newItem;
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
				<S.ModalMessageTitle>{"Editando centro de custo"}</S.ModalMessageTitle>
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
						selectValue={itemInfo.category._id}
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
				<S.ButtonBox>
					<S.ButtonFormSubmit onClick={handleItemInfoValidation}>Salvar</S.ButtonFormSubmit>
					<S.ButtonFormSubmit onClick={() => closeModal(false)}>Cancelar</S.ButtonFormSubmit>
				</S.ButtonBox>
			</S.Modal>
		</S.Container>
	);
}
