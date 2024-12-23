import { useEffect, useState } from "react";
import { api } from "services/api.js";

import * as Yup from "yup";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { InputDate } from "component/Input/Date/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";

import { PageContainer } from "component/container/PageContainer/styles.jsx";

import * as S from "./styles.jsx";

const editDataSchema = Yup.object().shape({
	name: Yup.string()
		.required("O nome não pode ser vazio.")
		.min(4, "Minímo de caracteres é 4")
		.max(50, "Maximo de caracteres é 50"),
	status: Yup.mixed().oneOf(["active", "inactive"], "Status inválido")
});

export function ManagementItemEditData({ infoData, setNotification }) {

	const [dataInfo, setDataInfo] = useState(infoData);
	const [editDataInfo, setEditDataInfo] = useState({});

	const [editingDataInfo, setEditingDataInfo] = useState(false);
	const [dataSaveLoading, setDataSaveLoading] = useState(false);

	const [dataInfoValidator, setDataInfoValidator] = useState({});

	const [statusOptions, setStatusOptions] = useState([]);

	async function getDataInfo(dataId) {
		try {
			const response = await api.get(`/management/warehouse/item/${dataId}`);

			return response.data.data;
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					(error.response && error.response.data.message) ?? "Erro ao obter os dados do item.",
				setNotification: setNotification
			});

			return null;
		}
	}

	async function handleDataInfoValidation() {
		try {
			const valid = await editDataSchema.validate(dataInfo, {
				abortEarly: false
			});

			updateData();
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

			setDataInfoValidator(errors);
		}
	}

	async function updateData() {
		try {
			setDataSaveLoading(true);
			const response = await api.put(`/management/warehouse/item/${dataInfo._id}/item`, {
				...editDataInfo
			});

			setDataInfo((prev) => {
				Object.entries(editDataInfo).forEach(([name, value]) => {
					prev[name] = value;
				});

				return prev;
			});

			setNotification({
				theme: "success",
				message: "Dados do contrato atualizado sucesso."
			});

			setDataSaveLoading(false);
			setEditingDataInfo(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar os dados do contrato, tente novamente."
			});
			setDataSaveLoading(false);
		}
	}

	function handleDataInfo(event) {
		setDataInfoValidator(() => {
			const handleValid = delete dataInfoValidator[event.target.name];
			return handleValid;
		});

		setEditDataInfo((prev) => {
			const newData = { ...prev };
			newData[event.target.name] = event.target.value;
			return newData;
		});
	}

	function enableEditData() {
		setEditingDataInfo(true);
	}

	function cancelEditData() {
		setEditDataInfo({
			name: dataInfo.name,
			start_date: dataInfo.start_date,
			end_date: dataInfo.end_date,
			description: dataInfo.description
		});

		setEditingDataInfo(false);
	}

	useEffect(() => {
		setEditDataInfo({ ...infoData });
		setStatusOptions([
			{
				value: "active",
				name: "Ativo",
				selected: infoData.status === "active"
			},
			{
				value: "inactive",
				name: "Inativo",
				selected: infoData.status === "inactive"
			}
		]);
	}, [infoData]);

	return (
		<PageContainer>
			<S.InnerContainer theme={"normal"}>
				<S.HeaderInner>
					<S.HeaderInnerTitle theme={"normal"}>Dados do Item</S.HeaderInnerTitle>
				</S.HeaderInner>
				<S.UserDataContent>
					<InputText
						inputName={"name"}
						inputWidth={"480px"}
						inputPlaceholder={"Nome"}
						inputValue={editDataInfo.name ?? ""}
						inputOnChange={handleDataInfo}
						inputErrorMsg={dataInfoValidator.name}
						disabled={!editingDataInfo}
						inputShowInfo={true}
					/>
					<InputSelect
						selectName={"status"}
						selectValue={editDataInfo.status ?? ""}
						selectOnChange={handleDataInfo}
						selectPlaceholder={"Status"}
						selectShowInfo={true}
						selectErrorMsg={dataInfoValidator.status}
						width={"256px"}
						options={statusOptions}
						disabled={!editingDataInfo}
					/>
					<InputTextArea
						textAreaName={"description"}
						textAreaValue={editDataInfo.description ?? ""}
						width={"480px"}
						height={"96px"}
						textAreaPlaceholder={"Descrição"}
						textAreaOnChange={handleDataInfo}
						textAreaErrorMsg={dataInfoValidator.description}
						disabled={!editingDataInfo}
						textAreaShowInfo={true}
					/>

					<S.ButtonContainer>
						{!editingDataInfo && (
							<>
								<ButtonIcon
									value="Editar"
									typeStyle="edit"
									onClick={enableEditData}
									disable={''}
								/>
								<S.ActionText>Editar</S.ActionText>
							</>
						)}

						{editingDataInfo && (
							<>
								<ButtonIcon
									value="Salvar"
									typeStyle="correct"
									onClick={handleDataInfoValidation}
									disable={dataSaveLoading}
								/>
								<S.ActionText>Salvar</S.ActionText>

								<ButtonIcon
									value="Cancelar"
									typeStyle="cancel"
									onClick={cancelEditData}
									disable={dataSaveLoading}
								/>
								<S.ActionText>Cancelar</S.ActionText>
							</>
						)}
					</S.ButtonContainer>
				</S.UserDataContent>
			</S.InnerContainer>
		</PageContainer>
	);
}
