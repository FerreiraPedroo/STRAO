import React, { useState, useEffect, useContext } from "react";
import { api } from "../../../services/api";
import { useFormik } from "formik";
import { GlobalUseContext } from "../../../provider/app";

import { DriverLicense } from "./DriverLicense";
import { Occupation } from "./Occupation";
import { Uniform } from "./Uniform";
import { Address } from "./Address";

import { Button } from "../../../component/Button";

import * as S from "./styles";

const formikAditionaValues = {
  uniform: {
    head: {},
    body: {},
    waistLegs: {},
    armsHands: {},
    foot: {},
  },
  address: {
    type: "home",
    zipcode: "",
    addrees: "",
    number: "",
    reference: "",
    district: "",
    city: "",
    state: "",
    country: "",
    other: "",
  },
};

export const RhEmployeeRegister = () => {
  const { userData } = useContext(GlobalUseContext);
  const [contractSelected, setContractSelected] = useState();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      identification: "",
      photo: "",
      birthDay: "",
      job: "",
      department: "",
      admission: "",
      demission: "",
      contract_id: "",
      centerCost_id: "",
      driverLicense: {
        withoutLicense: "",
        register: "",
        expireDate: "",
        photoDriverLicense: "",
        points: "",
        category: [],
      },
    },
    validate: (values) => {
      const errors = {};

      if (!values.fullName) {
        errors.fullName = "O nome não pode ficar em branco.";
      }
      if (!values.job) {
        errors.job = "Selecione um campo.";
      }
      if (!values.department) {
        errors.department = "Selecione um campo.";
      }
      if (!values.contract_id) {
        errors.contract_id = "Selecione um campo.";
      }
      if (!values.centerCost_id) {
        errors.centerCost_id = "Selecione um campo.";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await registerEmployee(values);
      return;
    },
  });
  const registerEmployee = async (values) => {
    try {
      const { data } = await api.post("/rh/employee/register", values);
      if (data.codStatus === 200) {
      }
    } catch (err) {
      return false;
    }
  };

  return (
    <S.Container>
      <S.PageTitle>CADASTRO DE FUNCIONÁRIOS</S.PageTitle>

      <S.PersonalInformation></S.PersonalInformation>

      <S.PersonalInformationContainer>
        <S.PhotoBox>FOTO</S.PhotoBox>
        <S.NameBox>
          <S.NameBox>
            <S.OccupationRegisterBox>
              <S.OccupationRegisterText>NOME COMPLETO</S.OccupationRegisterText>
              <S.NameInput
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              <S.ErrorMessage>
                {formik.touched.fullName && formik.errors.fullName}
              </S.ErrorMessage>
            </S.OccupationRegisterBox>

            <S.OccupationRegisterBox>
              <S.OccupationRegisterText>IDENTIFICAÇÃO</S.OccupationRegisterText>
              <S.OccupationRegisterInput
                id="identification"
                name="identification"
                value={formik.values.identification}
                onChange={formik.handleChange}
              />
            </S.OccupationRegisterBox>
          </S.NameBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>
              DATA DE NASCIMENTO
            </S.OccupationRegisterText>
            <S.BirthDateInput
              type="date"
              id="birthDay"
              name="birthDay"
              value={formik.values.birthDay}
              onChange={formik.handleChange}
            />
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>CONTRATO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect
              id="contract_id"
              name="contract_id"
              disabled={false}
              onChange={(e) => {
                formik.handleChange(e);
                setContractSelected(e.target.value);
              }}
            >
              <S.OccupationRegisterOption value=""></S.OccupationRegisterOption>
              {userData.hasOwnProperty("contracts") &&
                userData.contracts.map((contract, index) => (
                  <S.OccupationRegisterOption key={contract.name} value={index}>
                    {contract.name}
                  </S.OccupationRegisterOption>
                ))}
            </S.OccupationRegisterSelect>
            <S.ErrorMessage>
              {formik.touched.contract_id && formik.errors.contract_id}
            </S.ErrorMessage>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>CENTRO DE CUSTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect
              id="centerCost_id"
              name="centerCost_id"
              disabled={!contractSelected}
              value={formik.values.centerCost}
              onChange={formik.handleChange}
            >
              <S.OccupationRegisterOption value=""></S.OccupationRegisterOption>
              {contractSelected &&
                userData.contracts[contractSelected].centerCosts &&
                userData.contracts[contractSelected].centerCosts.map(
                  (centerCost) => (
                    <S.OccupationRegisterOption
                      key={centerCost}
                      value={centerCost}
                    >
                      {centerCost}
                    </S.OccupationRegisterOption>
                  )
                )}
            </S.OccupationRegisterSelect>
            <S.ErrorMessage>
              {formik.touched.centerCost_id && formik.errors.centerCost_id}
            </S.ErrorMessage>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>CARGO (?)</S.OccupationRegisterText>
            <S.OccupationRegisterSelect
              name="job"
              disabled={!contractSelected}
              onChange={formik.handleChange}
            >
              <S.OccupationRegisterOption id=""></S.OccupationRegisterOption>
              {contractSelected &&
                userData.contracts[contractSelected].jobs &&
                userData.contracts[contractSelected].jobs.map((job) => (
                  <S.OccupationRegisterOption key={job} value={job}>
                    {job}
                  </S.OccupationRegisterOption>
                ))}
            </S.OccupationRegisterSelect>
            <S.ErrorMessage>
              {formik.touched.job && formik.errors.job}
            </S.ErrorMessage>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DEPARTAMENTO</S.OccupationRegisterText>
            <S.OccupationRegisterSelect
              name="department"
              disabled={false}
              onChange={formik.handleChange}
            >
              <S.OccupationRegisterOption value=""></S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Administração">
                Administração
              </S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Departamento Pessoal">
                Departamento Pessoal
              </S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Financeiro">
                Financeiro
              </S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Operacional">
                Operacional
              </S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Recursos Humanos">
                Recursos Humanos
              </S.OccupationRegisterOption>
              <S.OccupationRegisterOption value="Suprimentos">
                Suprimentos
              </S.OccupationRegisterOption>
            </S.OccupationRegisterSelect>
            <S.ErrorMessage>
              {formik.touched.department && formik.errors.department}
            </S.ErrorMessage>
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>ADMISSÃO</S.OccupationRegisterText>
            <S.OccupationRegisterInput
              id="admission"
              name="admission"
              type="date"
              disabled={false}
              value={formik.values.admission}
              onChange={formik.handleChange}
            />
          </S.OccupationRegisterBox>

          <S.OccupationRegisterBox>
            <S.OccupationRegisterText>DEMISSÃO</S.OccupationRegisterText>
            <S.OccupationRegisterInput
              id="demission"
              name="demission"
              type="date"
              disabled={false}
              value={formik.values.demission}
              onChange={formik.handleChange}
            />
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
        <S.SubmitButton
          type="submit"
          disabled={formik.isSubmitting}
          onClick={(e) => formik.handleSubmit(e)}
        />
      </S.SubmitBox>
    </S.Container>
  );
};
