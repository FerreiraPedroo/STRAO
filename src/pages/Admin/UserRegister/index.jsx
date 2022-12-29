import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../../../services/api";
import { Notification } from "../../../component/Notification";

import * as S from "./styles.jsx";
import { Button } from "../../../component/Button";

export const AdminUserRegister = () => {
  const navigate = useNavigate();
  const [notificationModal, setNotificationModal] = useState({});
  const [submitReturnErrorMsg, setSubmitReturnErrorMsg] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      birth_date: "",
      email: "",
      password: "",
      password_repeat: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "O nome é obrigatório.";
      } else if (values.name.trim().length < 4) {
        errors.name = "O nome deve ter no minimo 4 letras.";
      }

      if (!values.birth_date) {
        errors.birth_date = "A data de nascimento é obrigatória.";
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

      if (!values.password_repeat) {
        errors.password_repeat = "A senha é obrigatória.";
      } else if (values.password_repeat !== values.password) {
        errors.password_repeat = "A senha não é igual.";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const { data } = await api.post(
          "admin/user/new",
          { ...values },
          { headers: { "x-access-token": localStorage.getItem("strao-token") } }
        );
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
        <Notification type="full" msg={notificationModal.message} />
      )}
      <S.PageHeader>
        <Button typeStyle="back" value="<" onClick={() => navigate(-1)} />
        <S.PageTitle>REGISTRO DE USUÁRIO</S.PageTitle>
      </S.PageHeader>

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
            id="birth_date"
            name="birth_date"
            type="date"
            value={formik.values.birth_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.birth_date && formik.errors.birth_date}
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
            id="password_repeat"
            name="password_repeat"
            type="password"
            value={formik.values.password_repeat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <S.InputErrorText>
            {formik.touched.password_repeat && formik.errors.password_repeat}
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
