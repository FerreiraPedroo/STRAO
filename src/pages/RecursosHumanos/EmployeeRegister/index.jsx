import React, { useState, useEffect } from "react"
import api from "../../../services/api"
import { useFormik } from "formik"
import { AppContext } from "../../../provider/app";

import { DriverLicense } from './DriverLicense'
import { Occupation } from "./Occupation"
import { Uniform } from "./Uniform"


import * as S from "./styles"

export const EmployeeRegister = () => {
  const { user, setUser } = AppContext()
  const [registerInitalData, setRegisterInitialData] = useState({ centerCosts: ["Oi", "Vivo", "Claro", "Tim"], subCenterCosts: ["Norte", "Centro", "Sudeste", "Centro Oeste", "Nordeste"], categories: ["Habilitação", "Uniforme"] });


  const formik = useFormik({
    initialValues: {
      fullName: '',
      birthDay: '',
      register: '',
      expireDate: '',
      points: '',
      photoDriverLicense: '',
      category: {},
      identification: '',
      job: '',
      department: '',
      costCenter: '',
      subCostCenter: '',
      admission: '',
      demission: '',
      uniform: {
        head: {},
        body: {},
        waistLegs: {},
        armsHands: {},
        foot: {},
      }
    },
    onSubmit: async (values) => {
      await registerEmployee(values)
      return
    },
  })

  const registerEmployee = async (values) => {
    try {
      const { data } = await api.post('/rh/register/employee', values)
      console.log(data)
    } catch (err) {
      console.log(err)
      return
    }
  }
  const getRegisterFieldsList = (e) => {
    // console.log(e.target.value)
    // const { data } = api({
    //   method: "get",
    //   url: "/rh/register/register-fields-list",
    //   params: {

    //   }

    // })

  }

  useEffect(() => {
    const getRegisterData = async () => {
      try {
        const { data } = await api({
          method: "get",
          url: "/rh/register/register-initial-data",
          headers: { 'Autorization': user.token }
        })
        setRegisterInitialData(data)
      } catch (err) {
        if(err.response.status === 401){
          localStorage.removeItem("auth")
        }
      }
    }
    getRegisterData()

  }, [])

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
            <S.OccupationRegisterText>CENTRO DE CUSTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect id="costCenter" name="costCenter" disabled={false} onChange={formik.handleChange} >
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
            <S.OccupationRegisterText>SUB CENTRO DE CUSTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect id="subCostCenter" name="costCenter" disabled={true} value={formik.values.subCostCenter} onChange={formik.handleChange} >
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
            <S.OccupationRegisterText>CARGO (?)</S.OccupationRegisterText>
            <S.OccupationRegisterSelect name="job" disabled={true} onChange={(e) => {
              getRegisterFieldsList(e)
              formik.handleChange(e)
            }} >
              <S.OccupationRegisterOption id="" ></S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Assistente">Assistente</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Auxiliar">Auxiliar</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Coordenador">Coordenador</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Assistente">Encarregado</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Gerente">Engenheiro</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Gerente">Gerente</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Supervisor">Supervisor</S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Coordenador">Técnico</S.OccupationRegisterOption>
            </S.OccupationRegisterSelect>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DEPARTAMENTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect name="department" disabled={true} onChange={formik.handleChange} >
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
            <S.OccupationRegisterInput id="admission" value={formik.values.admission} onChange={formik.handleChange} disabled={true} />
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DEMISSÃO</S.OccupationRegisterText>
            <S.OccupationRegisterInput id="demission" value={formik.values.demission} onChange={formik.handleChange} disabled={true} />
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>------</S.OccupationRegisterText>
            <S.OccupationRegisterInput disabled={true} />
          </S.OccupationRegisterBox>

        </S.NameBox>
      </S.PersonalInformationContainer>

      <S.InformationContainer>
        <DriverLicense formik={formik} />
        <Occupation formik={formik} />
        <Uniform formik={formik} />
      </S.InformationContainer>

      <S.SubmitBox>
        <S.SubmitButton type="submit" disabled={formik.isSubmitting} onClick={(e) => formik.handleSubmit(e)} />
      </S.SubmitBox>

    </S.Container>
  )
}