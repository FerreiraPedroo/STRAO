import { useEffect, useState } from "react";
import * as Yup from "yup";
import * as S from "./styles.jsx";

import { api } from "../../../../services/api.js";

import { InputText } from "../../../../component/Input/Text/index.jsx";
import { InputSelect } from "../../../../component/Input/Select/index.jsx";
import { InputTextArea } from "../../../../component/Input/TextArea/index.jsx";
import { InputDate } from "../../../../component/Input/Date/index.jsx";
import { ContractValues } from "../../CenterCost/CreateCenterCostModal/ContractValues/index.jsx";

const editContractSchema = Yup.object().shape({
	name: Yup.string()
		.required("O nome não pode ser vazio.")
		.min(4, "Minímo de caracteres é 4")
		.max(50, "Maximo de caracteres é 50"),
	status: Yup.mixed().oneOf(["active", "inactive"], "Status inválido"),
	start_date: Yup.string().matches(
		/([0-9]{4}\-[0-9]{2}\-[0-9]{2})|([0-9]{2}\/[0-9]{2}\/[0-9]{4})/d,
		"Deve selecionar uma data válida"
	),
	end_date: Yup.string().matches(
		/([0-9]{4}\-[0-9]{2}\-[0-9]{2})|([0-9]{2}\/[0-9]{2}\/[0-9]{4})/d,
		"Deve selecionar uma data válida"
	)
});

export function EditContractModal({
	contractData,
	closeModal,
	setNotification,
	updateContractList
}) {
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({ ...contractData });
	const [itemInfoValidator, setItemInfoValidator] = useState({});

	const [categories, setCategories] = useState(null);
	const [types, setTypes] = useState(null);

	async function getGroupCategoriesList() {
		setLoading(true);

		try {
			const response = await api.get("/management/categories-group?group_name=Contrato");
			const categoriesList = response.data.data.map((category) => {
				return {
					value: category._id,
					name: category.name
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

	async function updateContract() {
		try {
			const response = await api.put(`/management/contract`, {
				contract_id: itemInfo._id,
				name: itemInfo.name,
				start_date: itemInfo.start_date,
				end_date: itemInfo.end_date,
				description: itemInfo.description
			});

			setNotification({
				theme: "success",
				message: "Centro de custo atualizado sucesso."
			});
			updateContractList();
			closeModal(null);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar o centro de custo, tentar novamente."
			});
		}
	}

	async function handleItemInfoValidation() {
		try {
			await editContractSchema.validate(itemInfo, { abortEarly: false });

			updateContract();
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

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

	useEffect(() => {
		// getCategoriesList();
		// getTypesList();
	}, []);

	return (
		<S.Container>
			<S.Modal theme={""}>
				<S.ModalClose theme={""} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>

				<S.ModalMessageTitle>{"Editando contrato"}</S.ModalMessageTitle>

				<S.Content>
					<S.LeftContent>
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
							inputValue={itemInfo.start_date.split("/").reverse().join("-")}
							inputOnChange={handleItemInfo}
							inputPlaceholder={"Categoria"}
							inputShowInfo={true}
							inputErrorMsg={itemInfoValidator.start_date}
							width={"256px"}
							disabled={loading}
						/>
						<InputDate
							inputName={"end_date"}
							inputValue={itemInfo.end_date.split("/").reverse().join("-")}
							inputOnChange={handleItemInfo}
							inputPlaceholder={"Tipo"}
							inputShowInfo={true}
							inputErrorMsg={itemInfoValidator.end_date}
							width={"256px"}
							disabled={loading}
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
					</S.LeftContent>

					<S.RightContent>
						<ContractValues contractValuesList={[]}/>
					</S.RightContent>
				</S.Content>

				<S.ButtonFormSubmit onClick={handleItemInfoValidation}>Registrar</S.ButtonFormSubmit>
				<S.ButtonFormSubmit onClick={() => closeModal(false)}>Cancelar</S.ButtonFormSubmit>
			</S.Modal>
		</S.Container>
	);
}
