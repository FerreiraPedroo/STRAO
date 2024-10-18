import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "services/api.js";

import * as Yup from "yup";
import * as S from "./styles.jsx";

import { NotificationModal } from "component/Notification/modal.jsx";

import { PageTitle } from "component/container/PageTitle/index.jsx";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { ButtonIcon } from "component/ButtonIcon/index.jsx";
import { InputDate } from "component/Input/Date/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

const editStockSchema = Yup.object().shape({
	name: Yup.string()
		.required("O nome não pode ser vazio.")
		.min(4, "Minímo de caracteres é 4")
		.max(50, "Maximo de caracteres é 50")
});

export function SupplyManagementStockEdit() {
	const location = useLocation();
	const [notification, setNotification] = useState(null);

	const [pageLoading, setPageLoading] = useState(true);
	const [stockSaveLoading, setStockSaveLoading] = useState(false);
	const [editingStockInfo, setEditingStockInfo] = useState(false);

	const [stockInfo, setStockInfo] = useState({});
	const [editStockInfo, setEditStockInfo] = useState({});

	const [contractsOptionInfo, setContractsOptionInfo] = useState([]);
	const [statusOptionInfo, setStatusOptionInfo] = useState([]);
	const [stockInfoValidator, setStockInfoValidator] = useState({});

	async function getStock(stockId) {
		try {
			const response = await api.get(`/management/warehouse/stock/${stockId}`);

			return response.data.data;
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
			});

			return null;
		}
	}

	async function getContracts() {
		try {
			const response = await api.get(`/management/contracts`);

			return response.data.data;
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
			});

			return null;
		}
	}

	async function updateStock() {
		try {
			setStockSaveLoading(true);
			console.log(editStockInfo)
			const newStockInfo = {
				name: editStockInfo.name,
				description: editStockInfo.description,
				status: editStockInfo.status,
				contract_id: editStockInfo.contract_id || null,

			};

			const response = await api.put(
				`/management/warehouse/stock/${stockInfo._id}`,
				newStockInfo
			);

			setStockInfo((prev) => {
				Object.entries(editStockInfo).forEach(([name, value]) => {
					prev[name] = value;
				});

				return prev;
			});

			setNotification({
				theme: "success",
				message: "Dados do estoque atualizado sucesso."
			});

			setStockSaveLoading(false);
			setEditingStockInfo(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar os dados do estoque, tente novamente."
			});
			setStockSaveLoading(false);
		}
	}

	async function handleStockInfoValidation() {
		try {
			const valid = await editStockSchema.validate(editStockInfo, { abortEarly: false });

			updateStock();
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

			setStockInfoValidator(errors);
		}
	}

	function handleStockInfo(event) {
		
		setStockInfoValidator(() => {
			const handleValid = delete stockInfoValidator[event.target.name];
			return handleValid;
		});

		setEditStockInfo((prev) => {
			const newItem = { ...prev };
			newItem[event.target.name] = event.target.value;
			return newItem;
		});
	}

	function enableEditStock() {
		setEditingStockInfo(true);
	}

	function cancelEditStock() {
		setEditStockInfo({
			name: stockInfo.name,
			description: stockInfo.description,
			contract_id: stockInfo.contract && stockInfo.contract._id
		});

		setEditingStockInfo(false);
	}

	useEffect(() => {
		async function loadInitialData() {
			setPageLoading(true);

			const stockData = await getStock(location.state._id);
			const contractsData = await getContracts();

			if (stockData) {
				setStockInfo(stockData);

				const stockInfo = {
					name: stockData.name,
					contract_id: stockData.contract,
					status: stockData.status,
					description: stockData.description
				};

				const contractsOptions = contractsData.map((contract) => {
					const selected = stockInfo.contract_id === contract._id;
					return {
						value: contract._id,
						name: contract.name,
						selected
					};
				});

				contractsOptions.unshift({
					value: "",
					name: "Selecione um contrato"
				});

				const statusOptions = [
					{
						value: "",
						name: "Selecione um status"
					},
					{
						value: "active",
						name: "Ativo",
						selected: stockInfo.status === "active"
					},
					{
						value: "inactive",
						name: "Inativo",
						selected: stockInfo.status === "inactive"
					}
				];

				setContractsOptionInfo(contractsOptions);
				setStatusOptionInfo(statusOptions);
				setEditStockInfo(stockInfo);

				setPageLoading(false);
			}
		}

		loadInitialData();
	}, []);

	return (
		<PageContainer>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle
				title="Editando estoque"
				subTitle="altere os dados do estoque, opcionalmente pode adicionar um contrato ao estoque."
				backUrl={"/management/warehouse/stocks"}
				loading={pageLoading}
			/>

			<S.InnerContainer theme={"normal"}>
				<S.HeaderInner>
					<S.HeaderInnerTitle theme={"normal"}>Dados do estoque</S.HeaderInnerTitle>
				</S.HeaderInner>

				<S.UserDataContent>
					<InputText
						inputName={"name"}
						inputValue={editStockInfo.name ?? ""}
						inputWidth={"320px"}
						inputOnChange={handleStockInfo}
						inputPlaceholder={"Nome"}
						inputShowInfo={true}
						inputErrorMsg={stockInfoValidator.name}
						disabled={pageLoading || !editingStockInfo}
					/>
					<InputSelect
						selectName={"contract_id"}
						selectValue={editStockInfo.contract_id ?? ""}
						selectOnChange={handleStockInfo}
						selectPlaceholder={"Contrato"}
						selectShowInfo={true}
						selectErrorMsg={stockInfoValidator.contract_id}
						width={"320px"}
						options={contractsOptionInfo}
						disabled={pageLoading || !editingStockInfo}
					/>
					<InputSelect
						selectName={"status"}
						selectValue={editStockInfo.status ?? ""}
						selectOnChange={handleStockInfo}
						selectPlaceholder={"Status"}
						selectShowInfo={true}
						selectErrorMsg={stockInfoValidator.status}
						width={"320px"}
						options={statusOptionInfo}
						disabled={pageLoading || !editingStockInfo}
					/>

					<InputTextArea
						textAreaName={"description"}
						textAreaValue={editStockInfo.description ?? ""}
						textAreaOnChange={handleStockInfo}
						textAreaPlaceholder={"Descrição"}
						textAreaShowInfo={true}
						textAreaErrorMsg={stockInfoValidator.description}
						width={"320px"}
						height={"128px"}
						disabled={pageLoading || !editingStockInfo}
					/>

					<S.ButtonContainer width={"320px"}>
						{!editingStockInfo && (
							<>
								<ButtonIcon
									value="Editar"
									typeStyle="edit"
									onClick={enableEditStock}
									disable={pageLoading}
								/>
								<S.ActionText>Editar</S.ActionText>
							</>
						)}

						{editingStockInfo && (
							<>
								<ButtonIcon
									value="Salvar"
									typeStyle="correct"
									onClick={handleStockInfoValidation}
									disable={stockSaveLoading}
								/>
								<S.ActionText>Salvar</S.ActionText>

								<ButtonIcon
									value="Cancelar"
									typeStyle="cancel"
									onClick={cancelEditStock}
									disable={stockSaveLoading}
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
