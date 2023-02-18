import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginService } from "../../services/login";
import { useSelector, useDispatch } from "react-redux";

import { appDataUpdate } from "../../services/store/features/data/appData"

import * as S from "./styles";
import homebg2 from "./img/home-bg2.png";

export const Login = () => {
	const appData = useSelector((state) => state.appData);
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
		const data = await loginService(user, password, appData.dataVersion);

		if (data.codStatus === 200) {
			localStorage.setItem("strao-user-info", JSON.stringify({name: data.userInfo.name, avatar: data.userInfo.avatar}))
			localStorage.setItem("strao-token", data.token)
			localStorage.setItem("strao-data", JSON.stringify(data.data))
			localStorage.setItem("strao-data-version", data.dataVersion)
			dispatch(appDataUpdate(data))
			navigate("/home");
		}

		if (data.codStatus !== 200) {
			setErrorLogin("Erro ao conectar.");
			setErrorLogin(data.message);
		}
	};

	return (
		<S.Container>
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
		</S.Container>
	);
};
