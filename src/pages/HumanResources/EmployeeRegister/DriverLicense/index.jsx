import React from "react";
import { InputDate } from "../../../../component/Input/Date";
import { InputText } from "../../../../component/Input/Text";

import * as S from "./styles";

export const DriverLicense = ({ formik }) => {
	const handleOpen = () => {};

	const handleNotLicence = (e) => {
		console.log(e);
	};

	return (
		<S.Container onClick={() => handleOpen}>
			<S.Title open={true}>
				<S.TitleBox>
					Habilitação
					<S.NotLicenceInput
						id="driverLicense.withoutLicense"
						type="checkbox"
						value={formik.values.driverLicense.withoutLicense}
						onChange={formik.handleChange}
					/>
					<S.NotLicence>Não habilitado</S.NotLicence>
				</S.TitleBox>
			</S.Title>
			<S.DataContainer>
				<S.CNHRegisterBox>
					<InputText
						inputId="driverLicense.register"
						inputName="driverLicense.register"
						inputPlaceholder="Registro CNH"
						inputValue={formik.values.driverLicense.register}
						inputOnChange={formik.handleChange}
						inputShowInfo={true}
					/>
				</S.CNHRegisterBox>

				<S.CNHRegisterBox>
					<InputDate
						inputId="driverLicense.expeditionDate"
						inputName="driverLicense.expeditionDate"
						inputPlaceholder="Data de expedição CNH"
						inputValue={formik.values.driverLicense.expeditionDate}
						inputOnChange={formik.handleChange}
						inputShowInfo={true}
					/>
				</S.CNHRegisterBox>

				<S.CNHRegisterBox>
					<InputDate
						inputId="driverLicense.expireDate"
						inputName="driverLicense.expireDate"
						inputPlaceholder="Data de validade CNH"
						inputValue={formik.values.driverLicense.expireDate}
						inputOnChange={formik.handleChange}
						inputShowInfo={true}
					/>
				</S.CNHRegisterBox>

				<S.CNHRegisterBox>
					<InputText
						inputId="driverLicense.points"
						inputName="driverLicense.points"
						inputPlaceholder="Pontos de infração"
						inputValue={formik.values.driverLicense.points}
						inputOnChange={formik.handleChange}
						inputShowInfo={true}
						inputWidth="160px"
					/>
				</S.CNHRegisterBox>

				<S.CNHRegisterBox>
					<InputText
						inputId="driverLicense.photoDriverLicense"
						inputname="driverLicense.photoDriverLicense"
						inputValue={formik.values.driverLicense.photoDriverLicense}
						inputOnChange={formik.handleChange}
						inputPlaceholder="Documento CNH"
						inputShowInfo={true}
                        inputWidth="128px"
					/>
				</S.CNHRegisterBox>

				<S.CategoryBox>

					<S.CategoryText>Categoria</S.CategoryText>
					<S.Box>
						A
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.A"
							value={formik.values.driverLicense.category.A}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						B
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.B"
							value={formik.values.driverLicense.category.B}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						C
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.C"
							value={formik.values.driverLicense.category.C}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						D
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.D"
							value={formik.values.driverLicense.category.D}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						E
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.E"
							value={formik.values.driverLicense.category.E}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						AB
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.AB"
							value={formik.values.driverLicense.category.AB}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						AD
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.AD"
							value={formik.values.driverLicense.category.AD}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						AE
						<S.CategoryCheck
							type="checkbox"
							id="driverLicense.category.AE"
							value={formik.values.driverLicense.category.AE}
							onChange={formik.handleChange}
						/>
					</S.Box>
					<S.Box>
						Outro
						<S.CategoryOther
							type="text"
							id="driverLicense.category.other"
							value={formik.values.driverLicense.category.other}
							onChange={formik.handleChange}
						/>
					</S.Box>
				</S.CategoryBox>
			</S.DataContainer>
		</S.Container>
	);
};
