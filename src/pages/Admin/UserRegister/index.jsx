import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../../../services/api";
import { NotificationModal } from "../../../component/NotificationModal";
import { PageTitle } from "../../../component/container/PageTitle";

import * as S from "./styles.jsx";
import { InputText } from "../../../component/Input/Text";
import { InputDate } from "../../../component/Input/Date";

export const AdminUserRegister = () => {
	const navigate = useNavigate();
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(false);
	const [submitReturnErrorMsg, setSubmitReturnErrorMsg] = useState({});

	const formik = useFormik({
		initialValues: {
			name: "",
			birth_date: "",
			email: "",
			password: "",
			password_repeat: ""
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
			} else {
				setSubmitReturnErrorMsg("");
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
		onSubmit: async (values, actions) => {
			try {
				const { data } = await api.post(
					"admin/user/new",
					{ ...values },
					{ headers: { "x-access-token": localStorage.getItem("strao-token") } }
				);
				resetForm()
				setNotification(data);
			} catch (error) {
				if (!error.response.status && !error.response.data) {
					error.response.data = { message: error.message };
				}
				if (error.response.data.codStatus === 200) {
					setNotification(error.response.data);
				}
				setSubmitReturnErrorMsg(error.response.data);
			}
		}
	});

	function resetForm() {
		formik.resetForm()
	}
	return (
		<S.Container>
			{notification && (
				<NotificationModal
					type="full"
					message={notification.message}
					onClick={() => setNotification()}
				/>
			)}
			<PageTitle
				title="Registro de usuário"
				subTitle="registro de usuário para acesso ao sistema"
				loading={loading}
			/>

			<S.SubmitErrorText>
				{submitReturnErrorMsg.codStatus && submitReturnErrorMsg.message}
			</S.SubmitErrorText>

			<S.Form onSubmit={formik.handleSubmit}>
				<S.InputBox>
					<InputText
						inputId="name"
						inputName="name"
						inputValue={formik.values.name}
						inputOnChange={formik.handleChange}
						onBlur={formik.handleBlur}
						inputPlaceholder="Usuário"
						inputShowInfo={true}
						disabled={loading}
						inputWidth="100%"
					/>
					<S.InputErrorText>
						{formik.touched.name && formik.errors.name}
					</S.InputErrorText>
				</S.InputBox>

				<S.InputBox>
					<InputText
						inputId="email"
						inputName="email"
						inputValue={formik.values.email}
						inputOnChange={formik.handleChange}
						onBlur={formik.handleBlur}
						inputPlaceholder="E-Mail"
						inputShowInfo={true}
						disabled={loading}
						inputWidth="100%"
					/>
					<S.InputErrorText>
						{formik.touched.email && formik.errors.email}
					</S.InputErrorText>
				</S.InputBox>

				<S.InputBox>
					<InputDate
						inputId="birth_date"
						inputName="birth_date"
						inputValue={formik.values.birth_date}
						inputOnChange={formik.handleChange}
						onBlur={formik.handleBlur}
						inputPlaceholder="Data de nascimento"
						inputShowInfo={true}
						disabled={loading}
						inputWidth="100%"
					/>
					<S.InputErrorText>
						{formik.touched.birth_date && formik.errors.birth_date}
					</S.InputErrorText>
				</S.InputBox>

				<S.InputBox>
					<InputText
						inputId="password"
						inputName="password"
						inputValue={formik.values.password}
						inputOnChange={formik.handleChange}
						onBlur={formik.handleBlur}
						inputPlaceholder="Senha"
						inputShowInfo={true}
						disabled={loading}
						inputWidth="100%"
					/>
					<S.InputErrorText>
						{formik.touched.password && formik.errors.password}
					</S.InputErrorText>
				</S.InputBox>

				<S.InputBox>
					<InputText
						inputId="password_repeat"
						inputName="password_repeat"
						inputValue={formik.values.password_repeat}
						inputOnChange={formik.handleChange}
						onBlur={formik.handleBlur}
						inputPlaceholder="Repetir a senha"
						inputShowInfo={true}
						disabled={loading}
						inputWidth="100%"
					/>
					<S.InputErrorText>
						{formik.touched.password_repeat && formik.errors.password_repeat}
					</S.InputErrorText>
				</S.InputBox>

				<S.ButtonFormSubmit type="submit">ENVIAR</S.ButtonFormSubmit>
			</S.Form>
		</S.Container>
	);
};
