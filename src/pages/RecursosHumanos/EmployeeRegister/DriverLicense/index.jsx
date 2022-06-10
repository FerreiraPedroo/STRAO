import React from 'react'

import * as S from './styles'


export const DriverLicense = ({ formik }) => {

  const handleOpen = () => {
    
  }
  return (
    <S.Container onClick={() => handleOpen}>
      <S.Title open={true}>HABILITAÇÃO</S.Title>
      <S.DataContainer>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>REGISTRO CNH</S.CNHRegisterText>
          <S.CNHRegisterInput id="register" value={formik.values.register} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>VALIDADE</S.CNHRegisterText>
          <S.CNHRegisterInput id="expireDate" value={formik.values.expireDate} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>PONTOS</S.CNHRegisterText>
          <S.CNHRegisterInput id="points" value={formik.values.points} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>FOTO CNH</S.CNHRegisterText>
          <S.CNHRegisterPhoto type="file" name="arquivo" id="photoDriverLicense" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CategoryBox>
          <S.CategoryText>CATEGORIA</S.CategoryText>
          <S.Box>
            A<S.CategoryCheck type="checkbox" id="category.A" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            B<S.CategoryCheck type="checkbox" id="category.B" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            C<S.CategoryCheck type="checkbox" id="category.C" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            D<S.CategoryCheck type="checkbox" id="category.D" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            E<S.CategoryCheck type="checkbox" id="category.E" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            AB<S.CategoryCheck type="checkbox" id="category.AB" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            AD<S.CategoryCheck type="checkbox" id="category.AD" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            AE<S.CategoryCheck type="checkbox" id="category.AE" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            OUTRO<S.CategoryOther type="input" id="category.other" value={formik.values.photoDriverLicense} onChange={formik.handleChange} />
          </S.Box>
        </S.CategoryBox>
      </S.DataContainer>
    </S.Container>
  )
}