import React from "react";

import * as S from "./styles";

export const Occupation = ({ formik }) => {
  return (
    <S.Container>
      <S.Title>ATUAÇÃO</S.Title>
      <S.DataContainer>
        <S.OccupationRegisterBox>
          <S.OccupationRegisterText>------</S.OccupationRegisterText>
          <S.OccupationRegisterInput />
        </S.OccupationRegisterBox>

        <S.OccupationRegisterBox>
          <S.OccupationRegisterText>CENTRO DE CUSTO</S.OccupationRegisterText>
          <S.OccupationRegisterInput
            id="costCentres"
            value={formik.values.costCentres}
            onChange={formik.handleChange}
          />
        </S.OccupationRegisterBox>

        <S.OccupationRegisterBox>
          <S.OccupationRegisterText>
            SUB CENTRO DE CUSTO
          </S.OccupationRegisterText>
          <S.OccupationRegisterInput
            id="subCostCenter"
            value={formik.values.subCostCenter}
            onChange={formik.handleChange}
          />
        </S.OccupationRegisterBox>

        <S.OccupationRegisterBox>
          <S.OccupationRegisterText>ADMISSÃO</S.OccupationRegisterText>
          <S.OccupationRegisterInput
            id="admission"
            value={formik.values.admission}
            onChange={formik.handleChange}
          />
        </S.OccupationRegisterBox>

        <S.OccupationRegisterBox>
          <S.OccupationRegisterText>DEMISSÃO</S.OccupationRegisterText>
          <S.OccupationRegisterInput
            id="demission"
            value={formik.values.demission}
            onChange={formik.handleChange}
          />
        </S.OccupationRegisterBox>
      </S.DataContainer>
    </S.Container>
  );
};
