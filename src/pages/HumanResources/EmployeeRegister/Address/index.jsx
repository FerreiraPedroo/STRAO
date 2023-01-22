import React from "react";
import { InputText } from "../../../../component/Input/Text";

import * as S from "./styles";

export const Address = ({ formik }) => {
	return (
		<S.Container>
			<S.Title>Endereço</S.Title>
			<S.DataContainer>
				<S.Box>
					<InputText
						inputId="address.zipCode"
						inputName="address.zipCode"
						inputValue={formik.values.address.zipCode}
						inputOnChange={formik.handleChange}
						inputPlaceholder="CEP"
						inputShowInfo={true}
						inputWidth="160px;"
					/>
				</S.Box>

				<S.Box>
					<InputText
						inputId="address.address"
						inputName="address.address"
						inputValue={formik.values.address.addrees}
						inputOnChange={formik.handleChange}
						inputPlaceholder="Endereço"
						inputShowInfo={true}
					/>
				</S.Box>

				<S.Box>
					<InputText
						inputId="address.number"
						inputName="address.number"
						inputValue={formik.values.address.number}
						inputOnChange={formik.handleChange}
						inputPlaceholder="Número"
						inputShowInfo={true}
						inputWidth="96px;"
					/>
				</S.Box>

				<S.SecondBox>
					<S.Box>
						<InputText
							inputId="address.district"
							inputName="address.district"
							inputValue={formik.values.address.district}
							inputOnChange={formik.handleChange}
							inputPlaceholder="Bairro"
							inputShowInfo={true}
						/>
					</S.Box>

					<S.Box>
						<InputText
							inputId="address.city"
							inputName="address.city"
							inputValue={formik.values.address.city}
							inputOnChange={formik.handleChange}
							inputPlaceholder="Cidade"
							inputShowInfo={true}
						/>
					</S.Box>

					<S.Box>
						<InputText
							inputId="address.state"
							inputName="address.state"
							inputValue={formik.values.address.state}
							inputOnChange={formik.handleChange}
							inputPlaceholder="Estado UF"
							inputShowInfo={true}
                            inputWidth="64px;"
						/>
					</S.Box>
				</S.SecondBox>

				<S.SecondBox>
					<S.Box>
						<InputText
							inputId="address.reference"
							inputName="address.reference"
							inputValue={formik.values.address.reference}
							inputOnChange={formik.handleChange}
							inputPlaceholder="Referência"
							inputShowInfo={true}
						/>
					</S.Box>

					<S.Box>
						<InputText
							inputId="address.map"
							inputName="address.map"
							inputValue={formik.values.address.map}
							inputOnChange={formik.handleChange}
							inputPlaceholder="Mapa"
							inputShowInfo={true}
                            inputWidth="128px;"
						/>
					</S.Box>

					<S.Box>
						<InputText
							inputId="address.other"
							inputName="address.other"
							inputValue={formik.values.address.other}
							inputOnChange={formik.handleChange}
							inputPlaceholder="Outro"
							inputShowInfo={true}
						/>
					</S.Box>
				</S.SecondBox>

				{/* <S.Box>
					<InputText
						inputId="address.country"
						inputName="address.country"
						inputValue={formik.values.address.country}
						inputOnChange={formik.handleChange}
						inputPlaceholder="País"
						inputShowInfo={true}
					/>
				</S.Box> */}
			</S.DataContainer>
		</S.Container>
	);
};
