import { useEffect, useState } from "react";

import { api } from "services/api.js";

import { InputText } from "component/Input/Text/index.jsx";
import { InputFile } from "component/Input/Image/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";

import * as S from "./styles.jsx";

export function ItemSupplierModal({ itemId, showModal }) {
	const [notification, setNotification] = useState(null);

	const [pageLoading, setPageLoading] = useState(true);
	const [saveDataStatus, setSaveDataStatus] = useState(false);

	const [dataInfo, setDataInfo] = useState({});
	const [suppliers, setSuppliers] = useState([]);

	function handleDataInfo(input) {
		setDataInfo((prev) => {
			return {
				...prev,
				[input.target.name]: input.target.value
			}
		})
	}

	function handleSubmit() {
		setSaveDataStatus(true);
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
						(error.response && error.response.data.message) ??
						"Erro ao obter os dados do item.",
					setNotification: setNotification
				});
			}
		}
		getSupplier();
	}, []);

	console.log(dataInfo);
	return (
		<S.Container>
			<S.Modal>
				<S.ModalClose onClick={() => showModal(false)}>☓</S.ModalClose>
				<S.ModalMessageTitle>Nova referencia de fornecedor</S.ModalMessageTitle>
				<S.InputBox>
					<InputSelect
						selectName="supplier"
						selectValue={dataInfo.supplier ?? ""}
						selectOnChange={handleDataInfo}
						selectPlaceholder="Fornecedor do item"
						selectShowInfo={true}
						selectErrorMsg={""}
						disabled={pageLoading || saveDataStatus}
						width="448px"
						options={suppliers}
					/>

					<InputText
						inputId=""
						inputType="text"
						inputName="supplier_item_description"
						inputValue={dataInfo.supplier_item_description?? ""}
						inputOnChange={handleDataInfo}
						inputPlaceholder="Descrição do item no fornecedor"
						inputShowInfo={true}
						inputWidth="448px"
						inputErrorMsg=""
						inputOnBlur={() => ""}
						disabled={pageLoading || saveDataStatus}
					/>
					<InputText
						inputId=""
						inputType="text"
						inputName="supplier_item_reference"
						inputValue={dataInfo.supplier_item_reference}
						inputOnChange={handleDataInfo}
						inputPlaceholder="Referência do item no fornecedor"
						inputShowInfo={true}
						inputWidth="448px"
						inputErrorMsg=""
						inputOnBlur={() => ""}
						disabled={pageLoading || saveDataStatus}
					/>

					<InputFile
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
				<S.ButtonFormSubmit onClick={() => showModal(false)}>
					Voltar
				</S.ButtonFormSubmit>
			</S.Modal>
		</S.Container>
	);
}
