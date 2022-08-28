import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../../../services/api";
import { Notification } from "../../../component/Notification";

import * as S from './styles.jsx';

export const AdminContractRegister = () => {
  const navigate = useNavigate();
  const [notificationModal, setNotificationModal] = useState({});
  const [submitReturnErrorMsg, setSubmitReturnErrorMsg] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      cod: "",
      startDate: "",
      endDate: "",
      contractValue: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "O nome é obrigatório.";
      } else if (values.name.trim().length < 4) {
        errors.name = "O nome deve ter no minimo 4 letras.";
      }
      if (!values.startDate) {
        errors.startDate = "A data de inicio é obrigatória.";
      }
      if (!values.endDate) {
        errors.endDate = "A data de término é obrigatória.";
      }
      if (!values.contractValue) {
        errors.contractValue = "O valor é obrigatória.";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const { data } = await api.post("admin/contract/new", { ...values });
        setNotificationModal(data);
        formik.resetForm();
      } catch (error) {
        console.log(error.response.data);
        setSubmitReturnErrorMsg(error.response.data);
      }
    },
  });

  return (
    <S.Container>
            {notificationModal.codStatus && (
        <Notification type="full" msg={notificationModal.msg} />
      )}
      <S.PageTitle>CADASTRO DE CONTRATO</S.PageTitle>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.InputBox>
          <S.InputTitleText>NOME</S.InputTitleText>
          <S.Input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.name && formik.errors.name}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>CÓDIGO</S.InputTitleText>
          <S.Input
            id="cod"
            name="cod"
            type="text"
            value={formik.values.cod}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.cod && formik.errors.cod}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>DATA DE INÍCIO</S.InputTitleText>
          <S.Input
            id="startDate"
            name="startDate"
            type="date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.startDate && formik.errors.startDate}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>DATA DE TÉRMINO</S.InputTitleText>
          <S.Input
            id="endDate"
            name="endDate"
            type="date"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.endDate && formik.errors.endDate}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>VALOR R$ TOTAL</S.InputTitleText>
          <S.Input
            id="contractValue"
            name="contractValue"
            type="number"
            value={formik.values.contractValue}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.contractValue && formik.errors.contractValue}
          </S.InputErrorText>
        </S.InputBox>


        <S.ButtonFormSubmit type="submit">ENVIAR</S.ButtonFormSubmit>
        <S.SubmitErrorText>
          {submitReturnErrorMsg.codStatus && submitReturnErrorMsg.msg}
        </S.SubmitErrorText>
      </S.Form>
    </S.Container>
  )
}