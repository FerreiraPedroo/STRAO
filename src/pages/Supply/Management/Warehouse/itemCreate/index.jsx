import React, { useState, useEffect, useMemo } from "react";

import { useSelector } from "react-redux";
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
import { ButtonIcon } from "component/ButtonIcon";

import * as S from "./styles";
import { PageAction } from "component/container/PageAction";

export function SupplyManagementItemCreate() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);
	const [pageLoading, setPageLoading] = useState(true);

	const [handleData, setHandleData] = useState({});
	function handleDataState(event) {
		const data = { ...handleData };
		data[event.target.name] = event.target.value;
		setHandleData(data);
	}

	async function createItem() {
		try {
			const formData = new FormData();
			Object.entries(handleData).forEach((element) => {
				if (element[0] == "photos") {
					const photos = element[1].map((p) => {
						formData.append(element[0], p);

					});
				} else {
					formData.append(element[0], element[1]);
				}
			});
			console.log({ formData });
			const response = await api.post(`/management/warehouse/item`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});

			setNotification({
				theme: "success",
				message: "Estoque criado com sucesso."
			});
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					error.response && error.response.data.message ? error.response.statusText : error.message,
				setNotification: setNotification
			});
		}
	}

	const [itemInfoValidation, setItemInfoValidation] = useState({});
	function handleItemValidation() {
		const errors = {};

		if (handleData.name) {
			if (handleData.name === "") errors.name = "Não pode estar vazio.";
			if (handleData.name.length > 0 && handleData.name.length < 3)
				errors.name = "Deve ter no minimo 4 caracteres.";
		} else {
			errors.name = "Não pode estar vazio.";
		}

		if (handleData.category) {
			if (handleData.category === "") errors.category = "Selecione uma categoria.";
		} else {
			errors.category = "Selecione uma categoria.";
		}

		if (!Object.keys(errors).length) {
			createItem();
		} else {
			setItemInfoValidation(errors);
		}
	}

	const [categoryList, setCategoryList] = useState([]);
	const categorySelectOptions = useMemo(() => {
		let optionsInfo = [];

		if (categoryList instanceof Array) {
			optionsInfo = categoryList.map((option) => {
				return {
					value: option._id,
					name: option.name,
					type: "option"
				};
			});
		}

		optionsInfo.unshift({
			value: "",
			name: "Selecione o estoque",
			type: "option"
		});

		return optionsInfo;
	}, [categoryList]);

	useEffect(() => {
		async function getCategories() {
			try {
				const response = await api.get(`management/categories`);
				setCategoryList(response.data.data);
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
		getCategories();
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
			/>

			{!pageLoading && (
				<>
					<PageAction
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
					<S.BlockInfoContainer theme="normal">
						<S.BlockInfoTitle>Informações</S.BlockInfoTitle>
						<S.DataContainer>
							<S.InputBox>
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
									disabled={pageLoading}
									readOnly={false}
									theme="normal"
									disableErrorMsg={"true"}
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
									theme="normal"
									disableErrorMsg={"true"}
								/>
							</S.InputBox>

							<S.InputBox>
								<InputText
									inputId="name"
									inputName="name"
									inputValue={handleData.name ?? ""}
									inputOnChange={handleDataState}
									inputPlaceholder="Nome"
									inputShowInfo={true}
									inputWidth="524px"
									inputErrorMsg={itemInfoValidation.name}
									inputOnBlur={() => ""}
									disabled={pageLoading}
									readOnly=""
									theme="normal"
									disableErrorMsg={false}
								/>
							</S.InputBox>

							<S.InputBox>
								<InputSelect
									width="256px"
									inputValue={handleData.category ?? ""}
									selectName={"category"}
									selectShowInfo={true}
									selectPlaceholder={"Categoria"}
									selectOnChange={handleDataState}
									options={categorySelectOptions}
									disabled={pageLoading}
									selectErrorMsg={itemInfoValidation.category}
									disableErrorMsg={false}
								/>
								{/* <InputSelect
									width="256px"
									inputValue={handleData.sub_category ?? ""}
									selectName={"sub_category"}
									selectShowInfo={true}
									selectPlaceholder={"Sub categoria"}
									selectOnChange={handleDataState}
									options={categorySelectOptions}
									disabled={""}
								/> */}
							</S.InputBox>

							{/* <S.InputBox>
									<InputSelect
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
									/>
								</S.InputBox> */}

							<S.InputBox>
								<InputTextArea
									width="320px"
									height="90px"
									textAreaName="description"
									textAreaValue={handleData.description ?? ""}
									textAreaOnChange={handleDataState}
									textAreaPlaceholder={"Descrição"}
									textAreaShowInfo={true}
									textAreaMin="128px"
									textAreaMax="100%"
									textAreaErrorMsg={""}
									textAreaOnBlur={() => ""}
									theme="normal"
									disabled={pageLoading}
								/>
							</S.InputBox>
						</S.DataContainer>
					</S.BlockInfoContainer>

					<S.BlockInfoContainer theme="normal">
						<S.BlockInfoTitle>Identificação</S.BlockInfoTitle>
						<S.DataContainer>
							<InputText
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
								disableErrorMsg={true}
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
							/>

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
						</S.DataContainer>
					</S.BlockInfoContainer>
				</>
			)}
		</PageContainer>
	);
}
