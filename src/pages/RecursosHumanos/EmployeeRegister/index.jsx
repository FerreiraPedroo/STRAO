import React, { useState, useEffect, useContext } from "react";
import api from "../../../services/api";
import { useFormik } from "formik";
import { GlobalUseContext } from "../../../provider/app";

import { DriverLicense } from './DriverLicense';
import { Occupation } from "./Occupation";
import { Uniform } from "./Uniform";
import { Address } from "./Address";

import * as S from "./styles";


export const RhEmployeeRegister = () => {
  const { userData } = useContext(GlobalUseContext);
  const [contractSelected, setContractSelected] = useState();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      identification: '',
      status: '',
      birthDay: '',
      contract: '',
      centerCost: '',
      job: '',
      department: '',
      admission: '',
      demission: '',
      driverLicense: {
        register: '',
        expireDate: '',
        photoDriverLicense: '',
        points: '',
        category: {},
      },
      uniform: {
        head: {},
        body: {},
        waistLegs: {},
        armsHands: {},
        foot: {},
      },
      address: {
        type: 'home',
        zipcode: '',
        addrees: '',
        number: '',
        reference: '',
        district: '',
        city: '',
        state: '',
        country: '',
        other: '',
      }
    },
    onSubmit: async (values) => {
      await registerEmployee(values)
      return
    },
  })
  const registerEmployee = async (values) => {
    try {
      const { data } = await api.post('/rh/employee/register', values);
      if(data.codStatus === 200){
        
      }

    } catch (err) {
      return false;
    }
  }

  return (
    <S.Container>
      <S.Title>
        CADASTRO DE FUNCIONÁRIOS
      </S.Title>

      <S.PersonalInformation></S.PersonalInformation>

      <S.PersonalInformationContainer>
        <S.PhotoBox>FOTO</S.PhotoBox>
        <S.NameBox>
          <S.NameBox>
            <S.OccupationRegisterBox>
              <S.OccupationRegisterText>NOME COMPLETO</S.OccupationRegisterText>
              <S.NameInput id="fullName" value={formik.values.fullName} onChange={formik.handleChange} />
            </S.OccupationRegisterBox>

            <S.OccupationRegisterBox>
              <S.OccupationRegisterText>IDENTIFICAÇÃO</S.OccupationRegisterText>
              <S.OccupationRegisterInput id="identification" value={formik.values.identification} onChange={formik.handleChange} />
            </S.OccupationRegisterBox>
          </S.NameBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DATA DE NASCIMENTO</S.OccupationRegisterText>
            <S.BirthDateInput type="date" id="birthDay" value={formik.values.birthDay} onChange={formik.handleChange} />
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>CONTRATO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect id="contract" name="contract" disabled={false} onChange={(e) => {
              formik.handleChange(e)
              setContractSelected(e.target.value)
            }} >
              <S.OccupationRegisterOption value=""></S.OccupationRegisterOption>
              {userData.hasOwnProperty("contract") &&
                userData.contract.map((contract, index) => (
                  <S.OccupationRegisterOption key={contract.name} value={index}>{contract.name}</S.OccupationRegisterOption>
                ))
              }
            </S.OccupationRegisterSelect>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>CENTRO DE CUSTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect id="centerCost" name="centerCost" disabled={!contractSelected} value={formik.values.centerCost} onChange={formik.handleChange} >
              <S.OccupationRegisterOption value=""></S.OccupationRegisterOption>
              {contractSelected && userData.contract[contractSelected].centerCosts &&
                userData.contract[contractSelected].centerCosts.map((centerCost) => (
                  <S.OccupationRegisterOption key={centerCost} value={centerCost}>{centerCost}</S.OccupationRegisterOption>
                ))
              }
            </S.OccupationRegisterSelect>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>CARGO (?)</S.OccupationRegisterText>
            <S.OccupationRegisterSelect name="job" disabled={!contractSelected} onChange={formik.handleChange} >
              <S.OccupationRegisterOption id="" ></S.OccupationRegisterOption>
              {contractSelected && userData.contract[contractSelected].occupations &&
                userData.contract[contractSelected].occupations.map((occupation) => (
                  <S.OccupationRegisterOption key={occupation} value={occupation}>{occupation}</S.OccupationRegisterOption>
                ))
              }


            </S.OccupationRegisterSelect>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DEPARTAMENTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect name="department" disabled={false} onChange={formik.handleChange} >
              <S.OccupationRegisterOption value=""></S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Administração">Administração</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Departamento Pessoal">Departamento Pessoal</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Financeiro">Financeiro</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Operacional">Operacional</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Recursos Humanos">Recursos Humanos</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Suprimentos">Suprimentos</S.OccupationRegisterOption>
            </S.OccupationRegisterSelect>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>ADMISSÃO</S.OccupationRegisterText>
            <S.OccupationRegisterInput id="admission" disabled={false} value={formik.values.admission} onChange={formik.handleChange} />
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DEMISSÃO</S.OccupationRegisterText>
            <S.OccupationRegisterInput id="demission" disabled={false} value={formik.values.demission} onChange={formik.handleChange} />
          </S.OccupationRegisterBox>

          {/* <S.OccupationRegisterBox>
            <S.OccupationRegisterText>------</S.OccupationRegisterText>
            <S.OccupationRegisterInput disabled={true} />
          </S.OccupationRegisterBox> */}

        </S.NameBox>
      </S.PersonalInformationContainer>

      <S.InformationContainer>
        <DriverLicense formik={formik} />
        {/* <Occupation formik={formik} /> */}
        {/* <Uniform formik={formik} /> */}
        {/* <Address formik={formik} /> */}
      </S.InformationContainer>

      <S.SubmitBox>
        <S.SubmitButton type="submit" disabled={formik.isSubmitting} onClick={(e) => formik.handleSubmit(e)} />
      </S.SubmitBox>

    </S.Container >
  )
}