import { useEffect, useState } from "react";
import { array, object, string } from "yup";

import { api } from "services/api.js";

import { ButtonText } from "component/Buttons/ButtonText/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { InputImages } from "component/Input/Image/index.jsx";
import { InputText } from "component/Input/Text/index.jsx";

import * as S from "./styles.jsx";
import { NotificationModal } from "component/Notification/modal.jsx";
import { Modal } from "component/Modal/index.jsx";

const supplierInfoSchema = object({
	supplier: string().required(),
	supplier_item_description: string().required(),
	supplier_item_reference: string().required(),
	supplier_item_image: array().ensure()
});

export function ItemSupplierModal({ itemId, showModal, setNotification }) {
	const [pageLoading, setPageLoading] = useState(true);
	const [saveDataStatus, setSaveDataStatus] = useState(false);

	const [dataInfo, setDataInfo] = useState({});
	const [errorsValidation, setErrorsValidation] = useState({});
	const [suppliers, setSuppliers] = useState([]);

	function handleDataInfo(input) {
		setErrorsValidation((prev) => {
			return {
				...prev,
				[input.target.name]: null
			};
		});

		setDataInfo((prev) => {
			return {
				...prev,
				[input.target.name]: input.target.value
			};
		});
	}

	async function handleValidation() {
		try {
			await supplierInfoSchema.validate(dataInfo, { abortEarly: false });

			return true;
		} catch (error) {
			const validationErrors = {};
			error.inner.forEach((err) => {
				validationErrors[err.path] = err.message;
			});

			setErrorsValidation(validationErrors);

			return false;
		}
	}

	async function handleSubmit() {
		const validation = await handleValidation();

		if (!validation) {
			return;
		}

		try {
			setSaveDataStatus(true);

			const supplierFormData = new FormData();
			supplierFormData.append("item_id", itemId);
			supplierFormData.append("supplier", setDataInfo.supplier);
			supplierFormData.append("supplier_item_description", setDataInfo.supplier_item_description);
			supplierFormData.append("supplier_item_reference", setDataInfo.supplier_item_reference);
			supplierFormData.append("supplier_item_image", setDataInfo.supplier_item_image);

			const data = await api.post("", supplierFormData);

			setNotification({
				theme: "success",
				message: "Referencia do item cadastrado com sucesso",
				setNotification: setNotification
			});

			setSaveDataStatus(false);
			showModal(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message:
					(error.response && error.response.data.message) ??
					"Erro ao cadastrar a referência do item.",
				setNotification: setNotification
			});

			setSaveDataStatus(false);
		}
	}

	useEffect(() => {
		async function getSupplier() {
			try {
				const response = await api.get("/supply/suppliers");

				const data = response.data.data.map((supplier) => ({
					value: supplier._id,
					name: supplier.name
				}));

				data.unshift({ value: "", name: "Selecione o fornecedor" });

				setSuppliers(data);
				setPageLoading(false);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ?? "Erro ao obter os dados do item.",
					setNotification: setNotification
				});
			}
		}
		getSupplier();
	}, []);

	return (
		<Modal title="Nova referencia de fornecedor" width="580px">
			<S.InputBox>
				<InputSelect
					selectName="supplier"
					selectValue={dataInfo.supplier ?? ""}
					selectOnChange={handleDataInfo}
					selectPlaceholder="Fornecedor do item"
					selectShowInfo={true}
					selectErrorMsg={errorsValidation.supplier}
					disabled={pageLoading || saveDataStatus}
					width="448px"
					options={suppliers}
				/>

				<InputText
					inputId=""
					inputType="text"
					inputName="supplier_item_reference"
					inputValue={dataInfo.supplier_item_reference ?? ""}
					inputOnChange={handleDataInfo}
					inputPlaceholder="Referência do item no fornecedor"
					inputShowInfo={true}
					inputWidth="448px"
					inputErrorMsg={errorsValidation.supplier_item_reference}
					inputOnBlur={() => ""}
					disabled={pageLoading || saveDataStatus}
				/>

				<InputText
					inputId=""
					inputType="text"
					inputName="supplier_item_description"
					inputValue={dataInfo.supplier_item_description ?? ""}
					inputOnChange={handleDataInfo}
					inputPlaceholder="Descrição do item no fornecedor"
					inputShowInfo={true}
					inputWidth="448px"
					inputErrorMsg={errorsValidation.supplier_item_description}
					inputOnBlur={() => ""}
					disabled={pageLoading || saveDataStatus}
				/>

				<InputImages
					name="supplier_item_image"
					width="448px"
					value={dataInfo.supplier_item_image ?? ""}
					placeholder="Imagens do item do fornecedor"
					sizeMax={3}
					onChange={handleDataInfo}
					onBlur={() => ""}
					errorMsg=""
					showInfo={true}
					disabled={pageLoading || saveDataStatus}
				/>
			</S.InputBox>
			<S.ButtonBox>
				<ButtonText onClick={() => handleSubmit()} value={"REGISTRAR"} />
				<ButtonText onClick={() => showModal(false)} value={"CANCELAR"} />
			</S.ButtonBox>
		</Modal>
	);
}
