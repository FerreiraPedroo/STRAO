import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginService } from "../../services/login";
import { useSelector, useDispatch } from "react-redux";

import { appDataUpdate, clearAllInfo } from "../../services/store/features/data/appData"

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
			localStorage.setItem("strao-user-info", JSON.stringify({ name: data.appData.userInfo.name, avatar: data.appData.userInfo.avatar }))
			localStorage.setItem("strao-token", data.appData.token)
			localStorage.setItem("strao-data-info", JSON.stringify(data.appData.dataInfo))
			localStorage.setItem("strao-data-version", data.appData.dataVersion)
			dispatch(appDataUpdate(data.appData))
			navigate("/home");
		}

		if (data.codStatus !== 200) {
			setErrorLogin("Erro ao conectar.");
			setErrorLogin(data.message);
			
			localStorage.removeItem("strao-user-info")
			localStorage.removeItem("strao-token")
			localStorage.removeItem("strao-data-info")
			localStorage.removeItem("strao-data-version")
			dispatch(clearAllInfo())
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
