import React from "react";

import * as S from "./styles";

export const Uniform = ({ formik }) => {
  return (
    <S.Container>
      <S.Title>UNIFORME</S.Title>
      <S.DataContainer>
        <S.BodyPartBox>
          <S.BodyPartText>CABEÇA</S.BodyPartText>

          <S.UniformPartBox>
            <S.UniformPart>
              <S.UniformPartText>CAPACETE</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.helmet"
                value={formik.values.uniform.head.helmet}
                onChange={formik.handleChange}
              />
            </S.UniformPart>

            <S.UniformPart>
              <S.UniformPartText>MÁSCARA</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.mask"
                value={formik.values.uniform.head.mask}
                onChange={formik.handleChange}
              />
            </S.UniformPart>

            <S.UniformPart>
              <S.UniformPartText>ÓCULOS</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.glasses"
                value={formik.values.uniform.head.glasses}
                onChange={formik.handleChange}
              />
            </S.UniformPart>

            <S.UniformPart>
              <S.UniformPartText>PROTETOR AUDITIVO</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.earProtector"
                value={formik.values.uniform.head.earProtector}
                onChange={formik.handleChange}
              />
            </S.UniformPart>
          </S.UniformPartBox>
        </S.BodyPartBox>

        <S.BodyPartBox>
          <S.BodyPartText>CORPO</S.BodyPartText>
          <S.UniformPartBox>
            <S.UniformPart>
              <S.UniformPartText>AVENTAL</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.apron"
                value={formik.values.uniform.head.apron}
                onChange={formik.handleChange}
              />
            </S.UniformPart>

            <S.UniformPart>
              <S.UniformPartText>CAMISA</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.shirt"
                value={formik.values.uniform.head.shirt}
                onChange={formik.handleChange}
              />
            </S.UniformPart>
          </S.UniformPartBox>
        </S.BodyPartBox>

        <S.BodyPartBox>
          <S.BodyPartText>CINTURA E PERNAS</S.BodyPartText>

          <S.UniformPartBox>
            <S.UniformPart>
              <S.UniformPartText>CALÇA COMPRIDA</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.longPants"
                value={formik.values.uniform.head.longPants}
                onChange={formik.handleChange}
              />
            </S.UniformPart>

            <S.UniformPart>
              <S.UniformPartText>CANELEIRA</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.shinGuard"
                value={formik.values.uniform.head.shinGuard}
                onChange={formik.handleChange}
              />
            </S.UniformPart>
          </S.UniformPartBox>
        </S.BodyPartBox>

        <S.BodyPartBox>
          <S.BodyPartText>MÃOS E BRAÇOS</S.BodyPartText>

          <S.UniformPartBox>
            <S.UniformPart>
              <S.UniformPartText>LUVA</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.glove"
                value={formik.values.uniform.head.glove}
                onChange={formik.handleChange}
              />
            </S.UniformPart>
          </S.UniformPartBox>
        </S.BodyPartBox>

        <S.BodyPartBox>
          <S.BodyPartText>PÉS</S.BodyPartText>

          <S.UniformPartBox>
            <S.UniformPart>
              <S.UniformPartText>BOTA DE SEGURANÇA</S.UniformPartText>
              <S.UniformPartInput
                id="uniform.head.securityBoot"
                value={formik.values.uniform.head.securityBoot}
                onChange={formik.handleChange}
              />
            </S.UniformPart>
          </S.UniformPartBox>
        </S.BodyPartBox>
      </S.DataContainer>
    </S.Container>
  );
};
