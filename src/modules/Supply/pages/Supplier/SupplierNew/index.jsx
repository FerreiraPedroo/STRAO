import React, { useState, useEffect, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "services/api";
import { NotificationModal } from "component/Notification/modal";

import { InputTextArea } from "component/Input/TextArea";
import { InputText } from "component/Input/Text";
import { InputImages } from "component/Input/Image";


import { PageTitle } from "component/container/PageTitle";
import { PageContainer } from "component/container/PageContainer/styles";
import { InputSelect } from "component/Input/Select";

// import * as S from "./styles";
import { PageAction } from "component/container/PageAction";
import {
	BlockInfoContainer,
	BlockInfoData,
	BlockInfoTitle,
	BlockInputBox
} from "modules/Supply/components/BoxInfo/styles";

export function SupplySupplierNew() {
	const navigate = useNavigate();

	const [notification, setNotification] = useState(null);
	const [pageLoading, setPageLoading] = useState(true);

	const [handleData, setHandleData] = useState({});
	const [supplierCategoriesList, setSupplierCategoriesList] = useState([]);
	const [supplierInfoValidation, setSupplierInfoValidation] = useState({});

	function handleDataState(event) {
		const data = { ...handleData };
		data[event.target.name] = event.target.value;
		setHandleData(data);
	}

	function handleSupplierValidation() {
		const errors = {};

		if (handleData.cnpj) {
			if (handleData.cnpj === "") errors.cnpj = "Não pode estar vazio.";
			if (handleData.cnpj.length < 18)
				errors.cnpj = "Deve ter 18 caracteres, com pontose traço.";
		} else {
			errors.cnpj = "Não pode estar vazio.";
		}

		if (handleData.corporate_name) {
			if (handleData.corporate_name === "") errors.corporate_name = "Não pode estar vazio.";
		} else {
			errors.corporate_name = "Não pode estar vazio.";
		}

		if (!Object.keys(errors).length) {
			createItem();
		} else {
			setSupplierInfoValidation(errors);
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

			const response = await api.post(`/management/supply/supplier`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});

			setNotification({
				theme: "success",
				message: "Fornecedor criado com sucesso."
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

	const categorySelectOptions = useMemo(() => {
		let optionsInfo = [];

		if (supplierCategoriesList instanceof Array) {
			optionsInfo = supplierCategoriesList.map((option) => {
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
	}, [supplierCategoriesList]);

	useEffect(() => {
		async function getSupplierCategories() {
			try {
				const response = await api.get(`management/supply/item-categories`);
				setSupplierCategoriesList(response.data.data);
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
		getSupplierCategories();
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
				title="Novo fornecedor"
				backUrl={"/supply/suppliers"}
				subTitle={"Registre um novo fornecedor."}
				backPage={true}
			/>

			{!pageLoading ? (
				<>
					<PageAction
						actionsData={[
							{
								name: "Salvar",
								typeStyle: "add",
								show: true,
								action: () => handleSupplierValidation()
							}
						]}
						dataSelected={false}
						loading={false}
					/>
					<BlockInfoContainer>
						<BlockInfoTitle>Informações</BlockInfoTitle>
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
									inputValue="ATIVO"
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
								inputId="cnpj"
								inputName="cnpj"
								inputValue={handleData.cnpj ?? ""}
								inputOnChange={handleDataState}
								inputPlaceholder="CNPJ"
								inputShowInfo={true}
								inputWidth="428px"
								inputErrorMsg={supplierInfoValidation.cnpj}
								inputOnBlur={() => ""}
								disabled={pageLoading}
								readOnly=""
							/>

							<InputText
								inputId="corporate_name"
								inputName="corporate_name"
								inputValue={handleData.corporate_name ?? ""}
								inputOnChange={handleDataState}
								inputPlaceholder="Razão social"
								inputShowInfo={true}
								inputWidth="428px"
								inputErrorMsg={supplierInfoValidation.corporate_name}
								inputOnBlur={() => ""}
								disabled={pageLoading}
								readOnly=""
							/>

							<InputText
								inputId="fantazy_name"
								inputName="fantazy_name"
								inputValue={handleData.fantazy_name ?? ""}
								inputOnChange={handleDataState}
								inputPlaceholder="Nome fantasia"
								inputShowInfo={true}
								inputWidth="428px"
								inputErrorMsg={supplierInfoValidation.fantazy_name}
								inputOnBlur={() => ""}
								disabled={pageLoading}
								readOnly=""
							/>


							<InputSelect
								width="256px"
								inputValue={handleData.supplierCategory ?? ""}
								selectName={"supplierCategory"}
								selectShowInfo={true}
								selectPlaceholder={"Categoria do fornecedor"}
								selectOnChange={handleDataState}
								options={categorySelectOptions}
								disabled={pageLoading}
								selectErrorMsg={supplierInfoValidation.supplierCategory}
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
						</BlockInfoData>
					</BlockInfoContainer>

					<BlockInfoContainer>
						<BlockInfoTitle>Localização</BlockInfoTitle>
						<BlockInfoData>
							<BlockInputBox>

							</BlockInputBox>
							{/* <InputImages
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
							/> */}
						</BlockInfoData>
					</BlockInfoContainer>
				</>
			) : null}
		</PageContainer>
	);
}
