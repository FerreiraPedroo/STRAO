import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "services/api";

import { NotificationModal } from "component/Notification/modal.jsx";
import { InputText } from "component/Input/Text";
import { InputDate } from "component/Input/Date";

import { PageTitle } from "component/container/PageTitle";
import { PageContainer } from "component/container/PageContainer/styles.jsx";

import * as S from "./styles.jsx";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";

export const AdminUserRegister = () => {
	const navigate = useNavigate();
	const [notification, setNotification] = useState();
	const [loading, setLoading] = useState(false);
	const [submitReturnErrorMsg, setSubmitReturnErrorMsg] = useState({});

	const formik = useFormik({
		initialValues: {
			name: "pedro",
			birth_date: "2025-03-18",
			email: "pedro@pedro.com",
			password: "12345678",
			password_repeat: "12345678"
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
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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

			if (Object.entries(errors).length) {
				return errors;
			}
		},
		onSubmit: async (values, actions) => {
			console.log({ values });
			try {
				const { data } = await api("/admin/user/create", {
					method: "POST",
					body: JSON.stringify(values)
				});
				console.log({ data });
				resetForm();
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
		formik.resetForm();
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
			<PageTitle title="Registro de usuário" />

			<S.DataContainer>
				<S.HeaderContainer>
					<S.HeaderTitle>Dados</S.HeaderTitle>
				</S.HeaderContainer>

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
							inputErrorMsg={formik.touched.name && formik.errors.name}
							inputWidth="100%"
						/>
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
							inputErrorMsg={formik.touched.email && formik.errors.email}
							inputWidth="100%"
						/>
					</S.InputBox>

					<S.InputBox>
						<InputDate
							id="birth_date"
							name="birth_date"
							value={formik.values.birth_date}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Data de nascimento"
							showInfo={true}
							disabled={loading}
							errorMsg={formik.touched.birth_date && formik.errors.birth_date}
							width="100%"
						/>
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
							inputErrorMsg={formik.touched.password && formik.errors.password}
							inputWidth="100%"
						/>
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
							inputErrorMsg={formik.touched.password_repeat && formik.errors.password_repeat}
							inputWidth="100%"
						/>
					</S.InputBox>

					<S.ButtonBox>
						<ButtonText text="ENVIAR" disabled={false} loading={false} width="120">
							ENVIAR
						</ButtonText>
					</S.ButtonBox>
				</S.Form>
				<S.SubmitErrorText>
					{submitReturnErrorMsg.codStatus && submitReturnErrorMsg.message}
				</S.SubmitErrorText>
			</S.DataContainer>
		</S.Container>
	);
};
