import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../../../services/api";
import { Notification } from "../../../component/Notification";

import * as S from "./styles.jsx";

export const AdminUserRegister = () => {
  const navigate = useNavigate();
  const [notificationModal, setNotificationModal] = useState({});
  const [submitReturnErrorMsg, setSubmitReturnErrorMsg] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      birthDate: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "O nome é obrigatório.";
      } else if (values.name.trim().length < 4) {
        errors.name = "O nome deve ter no minimo 4 letras.";
      }

      if (!values.birthDate) {
        errors.birthDate = "A data de nascimento é obrigatória.";
      }

      if (!values.email) {
        errors.email = "O e-mail é obrigatório.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "E-mail inválido.";
      }

      if (!values.password) {
        errors.password = "A senha é obrigatória.";
      } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "A senha deve ter entre 8 a 20 caracteres.";
      }

      if (!values.passwordRepeat) {
        errors.passwordRepeat = "A senha é obrigatória.";
      } else if (values.passwordRepeat !== values.password) {
        errors.passwordRepeat = "A senha não é igual.";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const { data } = await api.post("admin/user/new", { ...values });
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
      <S.PageTitle>REGISTRO DE USUÁRIO</S.PageTitle>
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
          <S.InputTitleText>E-MAIL</S.InputTitleText>
          <S.Input
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.email && formik.errors.email}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>DATA DE NASCIMENTO</S.InputTitleText>
          <S.Input
            id="birthDate"
            name="birthDate"
            type="date"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.birthDate && formik.errors.birthDate}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>SENHA</S.InputTitleText>
          <S.Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.password && formik.errors.password}
          </S.InputErrorText>
        </S.InputBox>

        <S.InputBox>
          <S.InputTitleText>REPETIR SENHA</S.InputTitleText>
          <S.Input
            id="passwordRepeat"
            name="passwordRepeat"
            type="passwordRepeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.passwordRepeat && formik.errors.passwordRepeat}
          </S.InputErrorText>
        </S.InputBox>

        <S.ButtonFormSubmit type="submit">ENVIAR</S.ButtonFormSubmit>
        <S.SubmitErrorText>
          {submitReturnErrorMsg.codStatus && submitReturnErrorMsg.msg}
        </S.SubmitErrorText>
      </S.Form>
    </S.Container>
  );
};
