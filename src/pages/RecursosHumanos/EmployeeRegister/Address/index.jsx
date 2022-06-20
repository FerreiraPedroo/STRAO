import React from 'react'

import * as S from './styles'


export const Address = ({ formik }) => {

  return (
    <S.Container>
      <S.Title>ENDEREÇO</S.Title>
      <S.DataContainer>

        <S.Box>
          <S.RegisterText>CEP</S.RegisterText>
          <S.RegisterInput id="address.zipcode" value={formik.values.address.zipcode} onChange={formik.handleChange} />
        </S.Box>


      </S.DataContainer>
    </S.Container>
  )
}