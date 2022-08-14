import React from 'react'

import * as S from './styles'


export const DriverLicense = ({ formik }) => {

  const handleOpen = () => {

  }

  const handleNotLicence = (e) => {
console.log(e)
  }

  return (
    <S.Container onClick={() => handleOpen}>
      <S.Title open={true}>
        <S.TitleBox>
          HABILITAÇÃO | <S.NotLicenceInput id="driverLicense.noLicense" type='checkbox' onClick={(e)=>handleNotLicence(e)} /><S.NotLicence>Não habilitado</S.NotLicence>
        </S.TitleBox>
      </S.Title>
      <S.DataContainer>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>REGISTRO CNH</S.CNHRegisterText>
          <S.CNHRegisterInput id="driverLicense.register" value={formik.values.driverLicense.register} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>VALIDADE</S.CNHRegisterText>
          <S.CNHRegisterInput id="driverLicense.expireDate" value={formik.values.driverLicense.expireDate} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>PONTOS</S.CNHRegisterText>
          <S.CNHRegisterInput id="driverLicense.points" value={formik.values.driverLicense.points} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CNHRegisterBox>
          <S.CNHRegisterText>FOTO CNH</S.CNHRegisterText>
          <S.CNHRegisterPhoto type="driverLicense.file" name="arquivo" id="photoDriverLicense" value={formik.values.driverLicense.photoDriverLicense} onChange={formik.handleChange} />
        </S.CNHRegisterBox>
        <S.CategoryBox>
          <S.CategoryText>CATEGORIA</S.CategoryText>
          <S.Box>
            A<S.CategoryCheck type="checkbox" id="driverLicense.category.A" value={formik.values.driverLicense.category.A} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            B<S.CategoryCheck type="checkbox" id="driverLicense.category.B" value={formik.values.driverLicense.category.B} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            C<S.CategoryCheck type="checkbox" id="driverLicense.category.C" value={formik.values.driverLicense.category.C} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            D<S.CategoryCheck type="checkbox" id="driverLicense.category.D" value={formik.values.driverLicense.category.D} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            E<S.CategoryCheck type="checkbox" id="driverLicense.category.E" value={formik.values.driverLicense.category.E} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            AB<S.CategoryCheck type="checkbox" id="driverLicense.category.AB" value={formik.values.driverLicense.category.AB} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            AD<S.CategoryCheck type="checkbox" id="driverLicense.category.AD" value={formik.values.driverLicense.category.AD} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            AE<S.CategoryCheck type="checkbox" id="driverLicense.category.AE" value={formik.values.driverLicense.category.AE} onChange={formik.handleChange} />
          </S.Box>
          <S.Box>
            OUTRO<S.CategoryOther type="text" id="driverLicense.category.other" value={formik.values.driverLicense.category.other} onChange={formik.handleChange} />
          </S.Box>
        </S.CategoryBox>
      </S.DataContainer>
    </S.Container>
  )
}