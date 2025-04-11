import { useCallback, useEffect, useState } from "react";
import { api } from "services/api.js";

import * as Yup from "yup";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";

import * as S from "./styles.jsx";
import {
	BlockInfoData,
	HeaderContainer,
	HeaderTitle
} from "modules/Supply/components/BoxInfo/styles";

import { PageActions } from "component/container/PageActions/index.jsx";

const validateDataSchema = Yup.object().shape({
	name: Yup.string().min(4, "Minímo de caracteres é 4").max(50, "Maximo de caracteres é 50"),
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
	const [localDataInfoChanged, setLocalDataInfoChanged] = useState({});
	const [dataValidatorError, setDataValidatorError] = useState({});

	function handleDataInfo(event) {
		if (dataValidatorError[event.target.name]) {
			setDataValidatorError(() => {
				const handleValid = delete dataValidatorError[event.target.name];
				return handleValid;
			});
		}

		const newData = { ...dataInfoChanged };
		const newLocalData = { ...localDataInfoChanged };

		if (dataInfoChanged[event.target.name] && dataInfo[event.target.name] == event.target.value) {
			delete newData[event.target.name];
			setDataInfoChanged(newData);

			delete newLocalData[event.target.name];
			setLocalDataInfoChanged(newLocalData);
		} else {
			newData[event.target.name] = event.target.value;
			setDataInfoChanged(newData);

			newLocalData[event.target.name] = event.target.value;			
			console.log(newLocalData)
			setLocalDataInfoChanged(newLocalData);
		}

		if (Object.entries(newData).length) {
			setTabChanged((prev) => {
				prev[tabSelected] = true;
				return { ...prev };
			});
		} else {
			setTabChanged((prev) => {
				delete prev[tabSelected];
				return { ...prev };
			});
		}
	}

	// ENVIA OS DADOS VALIDADOS DO ITEM PARA SER ATUALIZADO.
	async function updateData() {
		setIsSaving(true);

		try {
			//const dataChangedInfo = Object.fromEntries;
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
		console.log(localDataInfoChanged)
		try {
			await validateDataSchema.validate(localDataInfoChanged, {
				abortEarly: false
			});
			//await updateData();
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
	// DADOS DA PAGINA DE ACOES (PAGE ACTIONS)
	const [pageData] = useState({
		actions: [
			{
				name: "Salvar",
				typeStyle: "correct",
				show: true,
				action: ()=>handleDataInfoValidation()
			}
		]
	});

	useEffect(() => {}, []);

	return (
		<>
			<PageActions
				actionsData={pageData.actions}
				loading={!Object.entries(tabChanged).length || isSaving}
			/>

			<S.DataContainer>
				<S.HeaderContainer>
					<S.HeaderTitle>Dados do Item</S.HeaderTitle>
				</S.HeaderContainer>
				<BlockInfoData>
					<InputText
						inputName={"name"}
						inputWidth={"480px"}
						inputPlaceholder={"Nome"}
						inputValue={localDataInfoChanged.name ?? dataInfo.name}
						inputOnChange={handleDataInfo}
						inputErrorMsg={dataValidatorError.name}
						disabled={isSaving}
						inputShowInfo={true}
					/>
					<InputSelect
						selectName={"status"}
						selectValue={localDataInfoChanged.status ?? dataInfo.status}
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
						selectValue={localDataInfoChanged.item_category ?? dataInfo.item_category}
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
						textAreaValue={localDataInfoChanged.aditional_description ?? dataInfo.aditional_description}
						width={"480px"}
						height={"96px"}
						textAreaPlaceholder={"Descrição"}
						textAreaOnChange={handleDataInfo}
						textAreaErrorMsg={dataValidatorError.aditional_description}
						disabled={isSaving}
						textAreaShowInfo={true}
					/>
				</BlockInfoData>
			</S.DataContainer>
		</>
	);
}
