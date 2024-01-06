import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import * as S from "./styles.jsx";

import { api } from "../../../services/api.js";

import { PageTitle } from "../../../component/container/PageTitle/index.jsx";
import { NotificationModal } from "../../../component/Notification/modal.jsx";
import { InputTextArea } from "../../../component/Input/TextArea/index.jsx";
import { InputSelect } from "../../../component/Input/Select/index.jsx";
import { InputDate } from "../../../component/Input/Date/index.jsx";
import { InputText } from "../../../component/Input/Text/index.jsx";
import { ContractValues } from "./ContractValues/index.jsx";
import { Button } from "../../../component/Button/index.jsx";

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

export function ManagementContractEdit() {
	const location = useLocation();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState(null);

	const [contractInfo, setContractInfo] = useState({});

	const [editContractInfo, setEditContractInfo] = useState({});
	const [editingContractInfo, setEditingContractInfo] = useState(false);
	const [contractSaveLoading, setContractSaveLoading] = useState(false);

	const [contractInfoValidator, setContractInfoValidator] = useState({});

	async function getContractInfo(contractId) {
		try {
			const response = await api.get(`/management/contract/${contractId}`);

			// converte o formato da data em um aceitavel pelo DATE.
			response.data.data.start_date = response.data.data.start_date
				.split("T")[0]
				.split("/")
				.reverse()
				.join("-");
			response.data.data.end_date = response.data.data.end_date
				.split("T")[0]
				.split("/")
				.reverse()
				.join("-");

			return response.data.data;
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					(error.response && error.response.data.message) ?? "Erro ao obter os dados do contrato.",
				setNotification: setNotification
			});

			return null;
		}
	}

	async function handleContractInfoValidation() {
		try {
			const valid = await editContractSchema.validate(contractInfo, { abortEarly: false });

			updateContract();
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

			setContractInfoValidator(errors);
		}
	}

	async function updateContract() {
		try {
			setContractSaveLoading(true);
			const response = await api.put(`/management/contract/${contractInfo._id}/contract`, {
				...editContractInfo
			});

			setContractInfo((prev) => {
				Object.entries(editContractInfo).forEach(([name, value]) => {
					prev[name] = value;
				});

				return prev;
			});

			setNotification({
				theme: "success",
				message: "Dados do contrato atualizado sucesso."
			});

			setContractSaveLoading(false);
			setEditingContractInfo(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar os dados do contrato, tente novamente."
			});
			setContractSaveLoading(false);
		}
	}

	function handleContractInfo(event) {
		setContractInfoValidator(() => {
			const handleValid = delete contractInfoValidator[event.target.name];
			return handleValid;
		});

		setEditContractInfo((prev) => {
			const newItem = { ...prev };
			newItem[event.target.name] = event.target.value;
			return newItem;
		});
	}

	function enableEditContract() {
		setEditingContractInfo(true);
	}

	function cancelEditContract() {
		setEditContractInfo({
			name: contractInfo.name,
			start_date: contractInfo.start_date,
			end_date: contractInfo.end_date,
			description: contractInfo.description
		});

		setEditingContractInfo(false);
	}

	useEffect(() => {
		async function loadInitialData() {
			setLoading(true);

			const contractData = await getContractInfo(location.state._id);

			if (contractData) {
				setContractInfo(contractData);

				setEditContractInfo({
					name: contractData.name,
					start_date: contractData.start_date,
					end_date: contractData.end_date,
					description: contractData.description
				});

				setLoading(false);
			}
		}

		loadInitialData();
	}, []);

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Editando contrato"
				subTitle="altere os dados do contrato, adicione e remova valores mensais do contrato e funções."
				backUrl={"/management/contracts"}
				loading={loading}
			/>

			<S.InnerContainer>
				<S.HeaderInner>
					<S.HeaderInnerTitle>Dados do contrato</S.HeaderInnerTitle>
				</S.HeaderInner>

				<S.UserDataContent>
					<InputText
						inputName={"name"}
						inputValue={editContractInfo.name ?? ""}
						inputWidth={"256px"}
						inputOnChange={handleContractInfo}
						inputPlaceholder={"Nome"}
						inputShowInfo={true}
						inputErrorMsg={contractInfoValidator.name}
						disabled={loading || !editingContractInfo}
					/>
					<InputDate
						inputName={"start_date"}
						inputValue={editContractInfo.start_date ?? ""}
						inputOnChange={handleContractInfo}
						inputPlaceholder={"Data de início"}
						inputShowInfo={true}
						inputErrorMsg={contractInfoValidator.start_date}
						width={"256px"}
						disabled={loading || !editingContractInfo}
					/>
					<InputDate
						inputName={"end_date"}
						inputValue={editContractInfo.end_date ?? ""}
						inputOnChange={handleContractInfo}
						inputPlaceholder={"Data de término"}
						inputShowInfo={true}
						inputErrorMsg={contractInfoValidator.end_date}
						width={"256px"}
						disabled={loading || !editingContractInfo}
					/>
					<InputTextArea
						textAreaName={"description"}
						textAreaValue={editContractInfo.description ?? ""}
						textAreaOnChange={handleContractInfo}
						textAreaPlaceholder={"Descrição"}
						textAreaShowInfo={true}
						textAreaErrorMsg={contractInfoValidator.description}
						width={"256px"}
						height={"92px"}
						disabled={loading || !editingContractInfo}
					/>

					<S.ButtonContainer width={"256px"}>
						{!editingContractInfo && (
							<>
								<Button
									value="Editar"
									typeStyle="edit"
									onClick={enableEditContract}
									disable={loading}
								/>
								<S.ActionText>Editar</S.ActionText>
							</>
						)}

						{editingContractInfo && (
							<>
								<Button
									value="Salvar"
									typeStyle="correct"
									onClick={handleContractInfoValidation}
									disable={contractSaveLoading}
								/>
								<S.ActionText>Salvar</S.ActionText>

								<Button
									value="Cancelar"
									typeStyle="cancel"
									onClick={cancelEditContract}
									disable={contractSaveLoading}
								/>
								<S.ActionText>Cancelar</S.ActionText>
							</>
						)}
					</S.ButtonContainer>
				</S.UserDataContent>
			</S.InnerContainer>

			<ContractValues
				contractId={contractInfo._id}
				loading={loading}
				contractValuesList={contractInfo.contract_month_values}
			/>
		</S.Container>
	);
}
