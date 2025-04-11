import React, { useState, useEffect, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "services/api";
import { NotificationModal } from "component/Notification/modal";

import { InputTextArea } from "component/Input/TextArea";
import { InputText } from "component/Input/Text";
import { InputImages } from "component/Input/Image";
import { InputFile } from "component/Input/File";

import { PageTitle } from "component/container/PageTitle";
import { PageContainer } from "component/container/PageContainer/styles";
import { InputSelect } from "component/Input/Select";

// import * as S from "./styles";
import { PageActions } from "component/container/PageActions";
import {
	BlockInfoContainer,
	BlockInfoData,
	HeaderTitle,
	BlockInputBox
} from "modules/Supply/components/BoxInfo/styles";

export function SupplyManagementItemCreate() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);
	const [pageLoading, setPageLoading] = useState(true);

	const [handleData, setHandleData] = useState({});
	const [itemCategoriesList, setItemGroupList] = useState([]);
	const [itemInfoValidation, setItemInfoValidation] = useState({});

	function handleDataState(event) {
		console.log(event)
		const data = { ...handleData };
		data[event.target.name] = event.target.value;
		setHandleData(data);
	}

	function handleItemValidation() {
		const errors = {};

		if (handleData.name) {
			if (handleData.name === "") errors.name = "Não pode estar vazio.";
			if (handleData.name.length > 0 && handleData.name.length < 3)
				errors.name = "Deve ter no minimo 4 caracteres.";
		} else {
			errors.name = "Não pode estar vazio.";
		}

		if (handleData.itemCategory) {
			if (handleData.itemCategory === "") errors.itemCategory = "Selecione um grupo.";
		} else {
			errors.itemCategory = "Selecione um grupo.";
		}

		if (!Object.keys(errors).length) {
			createItem();
		} else {
			setItemInfoValidation(errors);
		}
	}

	async function createItem() {
		try {
			const formData = new FormData();
			Object.entries(handleData).forEach((element) => {
				if (element[0] == "photos") {
					element[1].forEach((photo) => {
						formData.append(element[0], photo);
					});
				} else {
					formData.append(element[0], element[1]);
				}
			});

			const response = await api.post(`/management/supply/warehouse/item`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});

			setNotification({
				theme: "success",
				message: "Item criado com sucesso."
			});

			setTimeout(() => navigate(-1), 1000);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
			});
		}
	}

	const groupSelectOptions = useMemo(() => {
		let optionsInfo = [];

		if (itemCategoriesList instanceof Array) {
			optionsInfo = itemCategoriesList.map((option) => {
				return {
					value: option._id,
					name: option.name,
					type: "option"
				};
			});
		}

		optionsInfo.unshift({
			value: "",
			name: "Selecione o grupo",
			type: "option"
		});

		return optionsInfo;
	}, [itemCategoriesList]);

	useEffect(() => {
		async function getItemGroup() {
			try {
				const response = await api.get(`management/supply/item-categories`);
				setItemGroupList(response.data.data);
				setPageLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ??
						"Erro ao obter os dados dos recebimentos.",
					setNotification: setNotification
				});
			}
		}
		getItemGroup();
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
				title="Novo item"
				backUrl={"/management/warehouse/items"}
				subTitle={"Registre um novo item."}
				backPage={true}
			/>

			{!pageLoading ? (
				<>
					<PageActions
						actionsData={[
							{
								name: "Salvar",
								typeStyle: "add",
								show: true,
								action: () => handleItemValidation()
							}
						]}
						dataSelected={false}
						loading={false}
					/>
					<BlockInfoContainer>
						<HeaderTitle>Informações</HeaderTitle>
						<BlockInfoData>
							<BlockInputBox>
								<InputText
									inputId="code"
									inputName="code"
									inputValue={handleData.code ?? ""}
									inputOnChange={handleDataState}
									inputPlaceholder="Código"
									inputShowInfo={true}
									inputWidth="256px"
									inputErrorMsg=""
									inputOnBlur={() => ""}
									disabled={true}
									readOnly={false}
									disableErrorMsg={false}
								/>
								<InputText
									inputId="status"
									inputName="status"
									inputValue="ativo"
									inputOnChange={() => ""}
									inputPlaceholder="Status"
									inputShowInfo={true}
									inputWidth="128px"
									inputErrorMsg=""
									inputOnBlur={() => ""}
									disabled={true}
									readOnly={true}
									disableErrorMsg={false}
								/>
							</BlockInputBox>

							<InputText
								inputId="name"
								inputName="name"
								inputValue={handleData.name ?? ""}
								inputOnChange={handleDataState}
								inputPlaceholder="Nome"
								inputShowInfo={true}
								inputWidth="428px"
								inputErrorMsg={itemInfoValidation.name}
								inputOnBlur={() => ""}
								disabled={pageLoading}
								readOnly=""
							/>

							<InputSelect
								width="256px"
								inputValue={handleData.itemCategory ?? ""}
								selectName={"itemCategory"}
								selectShowInfo={true}
								selectPlaceholder={"Categoria do item"}
								selectOnChange={handleDataState}
								options={groupSelectOptions}
								disabled={pageLoading}
								selectErrorMsg={itemInfoValidation.itemCategory}
							/>

							{/* <InputSelect
								width="256px"
								inputValue={handleData.unit_base ?? ""}
								selectName={"unit_base"}
								selectShowInfo={true}
								selectPlaceholder={"Unidade de medida"}
								selectOnChange={handleDataState}
								options={[]}
								disabled={pageLoading}
								selectErrorMsg={itemInfoValidation.unit_base}
								disableErrorMsg={false}
							/> */}

							<InputTextArea
								width="428px"
								height="90px"
								textAreaName="aditional_description"
								textAreaValue={handleData.aditional_description ?? ""}
								textAreaOnChange={handleDataState}
								textAreaPlaceholder={"Descrição adicional"}
								textAreaShowInfo={true}
								textAreaMin="128px"
								textAreaMax="100%"
								textAreaErrorMsg={""}
								textAreaOnBlur={() => ""}
								theme="normal"
								disabled={pageLoading}
							/>
						</BlockInfoData>
					</BlockInfoContainer>

					<BlockInfoContainer>
						<HeaderTitle>Identificação</HeaderTitle>
						<BlockInfoData>
							<BlockInputBox>
								{/* <InputText
									inputId="bar_code"
									inputName="bar_code"
									textAreaValue={handleData.bar_code ?? null}
									inputOnChange={() => ""}
									inputPlaceholder="Código de barras"
									inputShowInfo={true}
									inputWidth="320px"
									inputErrorMsg=""
									inputOnBlur={() => ""}
									disabled={pageLoading}
									readOnly=""
									theme="normal"
								/>

								<InputFile
									inputId="qr_code"
									inputName="qr_code"
									inputOnChange="QR Code"
									inputOnBlur={() => ""}
									inputPlaceholder="QR Code"
									inputShowInfo={true}
									inputWidth="320px"
									inputAccept=""
									disabled={pageLoading}
									readOnly={false}
									theme="normal"
								/> */}
							</BlockInputBox>
							<InputImages
								id="photos"
								name="photos"
								onChange={handleDataState}
								placeholder="Fotos"
								showInfo={true}
								width="320px"
								errorMsg=""
								onBlur={() => ""}
								disabled={pageLoading}
								readOnly={false}
								theme="normal"
							/>
						</BlockInfoData>
					</BlockInfoContainer>
				</>
			) : null}
		</PageContainer>
	);
}
