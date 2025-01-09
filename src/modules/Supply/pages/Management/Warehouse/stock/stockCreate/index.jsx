import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { api } from "services/api.js";

import { InputTextArea } from "component/Input/TextArea/index.jsx";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { ModalSearch } from "component/ModalSearch/index.jsx";
import { NotificationModal } from "component/Notification/modal.jsx";
import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";
import { useNavigate } from "react-router-dom";

export function SupplyManagementStockCreate() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const [itemInfo, setItemInfo] = useState({});
	const [itemInfoValidator, setItemInfoValidator] = useState({});
	const [modal, setModal] = useState(null);
	const [notification, setNotification] = useState(null);

	async function createCenterCost() {
		try {
			const response = await api.post(`/management/warehouse/stock`, {
				...itemInfo
			});
			setItemInfo({});
			setNotification({
				theme: "success",
				message: "Estoque criado com sucesso."
			});
			setTimeout(()=> navigate("/management/warehouse/stocks"), 2000)
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
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

		if (itemInfo.name) {
			if (itemInfo.name === "") errors.name = "Não pode estar vazio.";
			if (itemInfo.name.length > 0 && itemInfo.name.length < 3)
				errors.name = "Deve ter no minimo 4 caracteres.";
		} else {
			errors.name = "Não pode estar vazio.";
		}

		if (!errors.name) {
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

	useEffect(() => {}, []);

	return (
		<PageContainer>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}
			{modal == "localization" && (
				<ModalSearch closeModal={setModal} setNotification={() => ""} addSelectedItem="" />
			)}
			<PageTitle
				title="Novo Estoque"
				subTitle="adicione um novo estoque a companhia."
				backUrl={"/management/warehouse/stocks"}
				backPage={true}
				loading={false}
			/>
			<S.StockInfoBlock theme="normal">
				<S.StockInfoBlockTitle>Dados do Estoque</S.StockInfoBlockTitle>

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

				{/* <S.LocationInfoBlock>
					<InputText
						inputName={"management_location_id"}
						inputValue={itemInfo.management_location_id ?? ""}
						inputWidth={"288px"}
						inputOnChange={handleItemInfo}
						inputPlaceholder={"Localização"}
						inputShowInfo={true}
						inputErrorMsg={itemInfoValidator.management_location_id}
						readOnly={true}
						disabled={loading}
					/>
					<ButtonIcon
						typeStyle={"find"}
						onClick={() => setModal("localization")}
						loading={loading}
					/>
				</S.LocationInfoBlock> */}

				<InputSelect
					selectName="status"
					selectValue={itemInfo.status}
					selectOnChange={handleItemInfo}
					selectPlaceholder={"Status"}
					selectShowInfo={true}
					selectErrorMsg={itemInfoValidator.status ?? ""}
					disabled={loading}
					readOnly=""
					width="164px"
					options={[
						{ value: "", name: "Selecione" },
						{ value: "active", name: "Ativo" },
						{ value: "inactive", name: "Inativo" }
					]}
					theme="normal"
				></InputSelect>

				<InputTextArea
					textAreaName={"description"}
					textAreaValue={itemInfo.description ?? ""}
					textAreaOnChange={handleItemInfo}
					textAreaPlaceholder={"Descrição"}
					textAreaShowInfo={true}
					textAreaErrorMsg={itemInfoValidator.description}
					textAreaMax={"288px"}
					width={"320px"}
					height={"92px"}
					disabled={loading}
				/>
				<S.ButtonContainer width={"320px"}>
					<ButtonIcon
						value="Salvar"
						typeStyle="correct"
						onClick={handleItemInfoValidation}
						disable={false}
					/>
					<S.ActionText>Salvar</S.ActionText>
				</S.ButtonContainer>
			</S.StockInfoBlock>
		</PageContainer>
	);
}
