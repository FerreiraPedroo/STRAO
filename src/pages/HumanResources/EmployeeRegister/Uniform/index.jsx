import React from "react";
import { InputText } from "../../../../component/Input/Text";

import * as S from "./styles";

export const Uniform = ({ formik }) => {
	return (
		<S.Container>
			<S.Title>Uniforme</S.Title>
			<S.DataContainer>
				<S.BodyPartBox>
					<S.BodyPartText>Cabeça</S.BodyPartText>

					<S.UniformPartBox>
						<InputText
							inputId="uniform.head.helmet"
							inputName="uniform.head.helmet"
							inputPlaceholder="Capacete"
							inputValue={formik.values.uniform.head.helmet.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>

						<InputText
							inputId="uniform.head.mask"
							inputName="uniform.head.mask"
							inputPlaceholder="Máscara"
							inputValue={formik.values.uniform.head.mask.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>

						<InputText
							inputId="uniform.head.glasses"
							inputName="uniform.head.glasses"
							inputPlaceholder="Óculos"
							inputValue={formik.values.uniform.head.glasses.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>

						<InputText
							inputId="uniform.head.earProtector"
							inputName="uniform.head.earProtector"
							inputPlaceholder="Protetor auditivo"
							inputValue={formik.values.uniform.head.earProtector.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>
					</S.UniformPartBox>
				</S.BodyPartBox>

				<S.BodyPartBox>
					<S.BodyPartText>Corpo</S.BodyPartText>
					<S.UniformPartBox>
						<InputText
							inputId="uniform.body.apron"
							inputName="uniform.body.apron"
							inputPlaceholder="Avental"
							inputValue={formik.values.uniform.body.apron.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>
						<InputText
							inputId="uniform.body.shirt"
							inputName="uniform.body.shirt"
							inputPlaceholder="Avental"
							inputValue={formik.values.uniform.body.shirt.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>
					</S.UniformPartBox>
				</S.BodyPartBox>

				<S.BodyPartBox>
					<S.BodyPartText>Cintura e pernas</S.BodyPartText>

					<S.UniformPartBox>
						<InputText
							inputId="uniform.waistLegs.longPants"
							inputName="uniform.waistLegs.longPants"
							inputPlaceholder="Avental"
							inputValue={formik.values.uniform.waistLegs.longPants.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>

						<InputText
							inputId="uniform.waistLegs.shinGuard"
							inputName="uniform.waistLegs.shinGuard"
							inputPlaceholder="Caneleira"
							inputValue={formik.values.uniform.waistLegs.shinGuard.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>
					</S.UniformPartBox>
				</S.BodyPartBox>

				<S.BodyPartBox>
					<S.BodyPartText>Mãos e braços</S.BodyPartText>

					<S.UniformPartBox>
						<InputText
							inputId="uniform.armsHands.glove"
							inputName="uniform.armsHands.glove"
							inputPlaceholder="Avental"
							inputValue={formik.values.uniform.armsHands.glove.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>
					</S.UniformPartBox>
				</S.BodyPartBox>

				<S.BodyPartBox>
					<S.BodyPartText>Pés</S.BodyPartText>

					<S.UniformPartBox>
						<InputText
							inputId="uniform.foot.securityBoot"
							inputName="uniform.foot.securityBoot"
							inputPlaceholder="Bota"
							inputValue={formik.values.uniform.foot.securityBoot.name}
							inputOnChange={formik.handleChange}
							inputShowInfo={true}
						/>
					</S.UniformPartBox>
				</S.BodyPartBox>
			</S.DataContainer>
		</S.Container>
	);
};
