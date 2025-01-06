import { useCallback, useEffect, useState } from "react";
import { api } from "services/api.js";

import * as Yup from "yup";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";

import * as S from "./styles.jsx";
import {
	BlockInfoContainer,
	BlockInfoTitle,
	BlockInfoData
} from "modules/Supply/components/BoxInfo/styles";
import { checkInputChangedDataInfo } from "helper/inputChangedData.js";

const validateDataSchema = Yup.object().shape({
	name: Yup.string()
		.required("O nome não pode ser vazio.")
		.min(4, "Minímo de caracteres é 4")
		.max(50, "Maximo de caracteres é 50"),
	status: Yup.mixed().oneOf(["ATIVO", "INATIVO"], "Status inválido")
});

export function TabItemData({
	dataInfo,
	setDataInfo,
	dataInfoChanged,
	setDataInfoChanged,
	tabSelected,
	tabChanged,
	setTabChanged,
	isSaving,
	setIsSaving,
	setNotification
}) {
	const [isDataInfoChanged, setIsDataInfoChanged] = useState([]);
	const [dataValidatorError, setDataValidatorError] = useState({});

	function handleDataInfo(event) {
		if (dataValidatorError[event.target.name]) {
			setDataValidatorError(() => {
				const handleValid = delete dataValidatorError[event.target.name];
				return handleValid;
			});
		}

		setDataInfoChanged((prev) => {
			const newData = { ...prev };
			newData[event.target.name] = event.target.value;
			return newData;
		});

		const isDataChanged = checkInputChangedDataInfo(event, dataInfo, isDataInfoChanged);

		if (isDataChanged) {
			setIsDataInfoChanged(isDataChanged);
			setTabChanged((prev) => {
				isDataChanged.length ? (prev[tabSelected] = true) : delete prev[tabSelected];
				return { ...prev };
			});
		}
	}

	// ENVIA OS DADOS VALIDADOS DO ITEM PARA SER ATUALIZADO.
	async function updateData() {
		setIsSaving(true);
		try {
			const dataChangedInfo = Object.fromEntries;
			await api.put(`/management/warehouse/item/${dataInfoChanged._id}/item`, {
				...dataInfoChanged
			});

			const dataChanged = { ...dataInfoChanged };
			setDataInfoChanged(dataChanged);
			setDataInfo(dataChanged);

			setNotification({
				theme: "success",
				message: "Dados do contrato atualizado sucesso."
			});

			setIsSaving(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar os dados do contrato, tente novamente."
			});
			setIsSaving(false);
		}
	}

	// VALIDA AS INFORMAÇÕES DO ITEM ANTES DE ENVIAR PARA SER ATUALIZADO.
	async function handleDataInfoValidation() {
		try {
			await validateDataSchema.validate(dataInfoChanged, {
				abortEarly: false
			});
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

			setDataValidatorError(errors);
		}
	}

	// DADOS TRANDORMADOS PARA OS SELECTS
	const [statusOptions] = useState(
		dataInfo
			? [
					{
						name: "ATIVO",
						value: "ATIVO",
						selected: dataInfo.status == "ATIVO"
					},
					{
						name: "INATIVO",
						value: "INATIVO",
						selected: dataInfo.status == "INATIVO"
					}
			  ]
			: []
	);
	const [itemCategoriesOptions] = useState(
		dataInfo.itemCategories
			? dataInfo.itemCategories.map((category) => {
					return {
						name: category.name,
						value: category._id,
						selected: dataInfo.item_category._id == category._id
					};
			  })
			: []
	);

	useEffect(() => {}, [isDataInfoChanged]);

	return (
		<>
			<BlockInfoContainer>
				<S.ButtonContainer>
					<ButtonIcon
						value="Salvar"
						typeStyle="correct"
						onClick={handleDataInfoValidation}
						disabled={!isDataInfoChanged.length || isSaving}
					/>
					<S.ActionText>Salvar</S.ActionText>
				</S.ButtonContainer>
			</BlockInfoContainer>
			<BlockInfoContainer>
				<BlockInfoTitle>Dados do Item</BlockInfoTitle>
				<BlockInfoData>
					<InputText
						inputName={"name"}
						inputWidth={"480px"}
						inputPlaceholder={"Nome"}
						inputValue={dataInfoChanged.name ?? ""}
						inputOnChange={handleDataInfo}
						inputErrorMsg={dataValidatorError.name}
						disabled={isSaving}
						inputShowInfo={true}
					/>
					<InputSelect
						selectName={"status"}
						selectValue={dataInfoChanged.status ?? ""}
						selectOnChange={handleDataInfo}
						selectPlaceholder={"Status"}
						selectShowInfo={true}
						selectErrorMsg={dataValidatorError.status}
						width={"256px"}
						options={statusOptions}
						disabled={isSaving}
					/>
					<InputSelect
						selectName={"item_category"}
						selectValue={dataInfoChanged.item_category ?? ""}
						selectOnChange={handleDataInfo}
						selectPlaceholder={"Categoria do Item"}
						selectShowInfo={true}
						selectErrorMsg={dataValidatorError.item_category}
						width={"256px"}
						options={itemCategoriesOptions}
						disabled={isSaving}
					/>
					<InputTextArea
						textAreaName={"aditional_description"}
						textAreaValue={dataInfoChanged.aditional_description ?? ""}
						width={"480px"}
						height={"96px"}
						textAreaPlaceholder={"Descrição"}
						textAreaOnChange={handleDataInfo}
						textAreaErrorMsg={dataValidatorError.aditional_description}
						disabled={isSaving}
						textAreaShowInfo={true}
					/>
				</BlockInfoData>
			</BlockInfoContainer>
		</>
	);
}
