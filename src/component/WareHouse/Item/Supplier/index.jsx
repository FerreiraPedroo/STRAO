import React, { useEffect, useState } from "react";
import { InputText } from "../../../../component/Input/Text";
import { SelectAndDeselect } from "../../../SelectDeselect";
import { SelectDeselectMultipleFields } from "../../../SelectDeselectMultipleFields";

import * as S from "./styles";

export const ItemSupplierInfo = ({ itemData }) => {
	const [supplierInfo, setSupplierInfo] = useState({
		name: "",
		address: "",
		categories_id: [],
		subCategories_id: [],
		contacts: [],
		items_id: []
	});

	const handleSupplier = (e) => {
		setSupplierInfo({ ...supplierInfo, [e.target.name]: e.target.value });
	};
	const handleSelected = (name, value) => {
		setSupplierInfo({ ...supplierInfo, [name]: value });

	};

	console.log("supplierInfo:", supplierInfo);
	return (
		<S.Container open={true}>
			<S.Title>
				<S.TitleBox>Fornecedor</S.TitleBox>
			</S.Title>
			<S.DataContainer>
				<InputText
					inputId="supplierId"
					inputName="name"
					inputPlaceholder="Nome do fornecedor"
					inputValue={supplierInfo.name}
					inputOnChange={handleSupplier}
					inputShowInfo={true}
				/>

				<InputText
					inputId="addressId"
					inputName="address"
					inputPlaceholder="Endereço"
					inputValue={supplierInfo.address}
					inputOnChange={handleSupplier}
					inputShowInfo={true}
					inputWidth="320px"
				/>

				<SelectAndDeselect
					title="Categorias do fornecedor"
					name="categories_id"
					placeHolder="Categorias"
					getSelectedInfo={handleSelected}
					data={itemData.categories}
				/>

				<SelectAndDeselect
					title="Sub-categorias do fornecedor"
					name="subCategories_id"
					placeHolder="Sub-Categorias"
					getSelectedInfo={handleSelected}
					data={itemData.subCategories}
				/>
				<SelectDeselectMultipleFields />

			</S.DataContainer>
		</S.Container>
	);
};
