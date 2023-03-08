import React from "react";
import { InputDate } from "../../../../component/Input/Date";
import { InputText } from "../../../../component/Input/Text";

import * as S from "./styles";

export const ItemSupplierInfo = () => {
	const handleOpen = () => {};

	const handleNotLicence = (e) => {
		console.log(e);
	};

	return (
		<S.Container onClick={() => handleOpen} open={true}>
			<S.Title>
				<S.TitleBox>Fornecedor</S.TitleBox>
			</S.Title>
			<S.DataContainer>
				<InputText
					inputId="driverLicense.register"
					inputName="driverLicense.register"
					inputPlaceholder="Registro CNH"
					inputValue={"formik.values.driverLicense.register"}
					inputOnChange={"formik.handleChange"}
					inputShowInfo={true}
				/>

				<InputDate
					inputId="driverLicense.expeditionDate"
					inputName="driverLicense.expeditionDate"
					inputPlaceholder="Data de expedição CNH"
					inputValue={"formik.values.driverLicense.expeditionDate"}
					inputOnChange={"formik.handleChange"}
					inputShowInfo={true}
				/>

				<InputDate
					inputId="driverLicense.expireDate"
					inputName="driverLicense.expireDate"
					inputPlaceholder="Data de validade CNH"
					inputValue={"formik.values.driverLicense.expireDate"}
					inputOnChange={"formik.handleChange"}
					inputShowInfo={true}
				/>

				<InputText
					inputId="driverLicense.points"
					inputName="driverLicense.points"
					inputPlaceholder="Pontos de infração"
					inputValue={"formik.values.driverLicense.points"}
					inputOnChange={"formik.handleChange"}
					inputShowInfo={true}
					inputWidth="160px"
				/>

				<InputText
					inputId="driverLicense.photoDriverLicense"
					inputname="driverLicense.photoDriverLicense"
					inputValue={"formik.values.driverLicense.photoDriverLicense"}
					inputOnChange={"formik.handleChange"}
					inputPlaceholder="Documento CNH"
					inputShowInfo={true}
					inputWidth="128px"
				/>
			</S.DataContainer>
		</S.Container>
	);
};
