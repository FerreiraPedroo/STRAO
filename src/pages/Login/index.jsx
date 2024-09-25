import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginService } from "services/login";
import { useSelector, useDispatch } from "react-redux";

import {
	providerUpdateAppData,
	providerClearAllInfo
} from "services/store/features/data/appData";

import homebg2 from "./img/home-bg2.png";

import { PageContainer } from "component/container/PageContainer/styles";
import * as S from "./styles";

export const Login = () => {
	const { dataVersion } = useSelector((state) => state.appData);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorLogin, setErrorLogin] = useState("");

	const handleInputUser = (e) => {
		setUser(e.target.value);
		setErrorLogin("");
	};
	const handleInputPassword = (e) => {
		setPassword(e.target.value);
		setErrorLogin("");
	};
	const handleLogin = async () => {
		const responseData = await loginService(user, password, dataVersion);

		if (responseData.codStatus === 200) {
			dispatch(providerUpdateAppData(responseData.data));
			navigate("/home");
		}

		if (responseData.codStatus !== 200) {
			setErrorLogin("Erro ao conectar.");
			dispatch(providerClearAllInfo());
		}
	};

	return (
		<PageContainer>
			<S.LoginContainer>
				<S.InputBox>
					<S.Text size="2">usuário</S.Text>
					<S.UserInput value={user} onChange={handleInputUser} />

					<S.Text size="2">senha</S.Text>
					<S.PasswordInput
						type="password"
						value={password}
						onChange={handleInputPassword}
					/>

					<S.Text size="1">{errorLogin}</S.Text>
				</S.InputBox>

				<S.ButtonBox>
					<S.Button type="image" src={homebg2} onClick={handleLogin} />
				</S.ButtonBox>
			</S.LoginContainer>
		</PageContainer>
	);
};
