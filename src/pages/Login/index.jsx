import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginService } from "services/login";
import { useSelector, useDispatch } from "react-redux";

import { providerClearAllInfo, providerUpdateToken } from "services/store/features/data/appData";

import homebg2 from "./img/home-bg2.png";

import { PageContainer } from "component/container/PageContainer/styles";
import * as S from "./styles";
import { SelectBranchModal } from "./SelectBranchModal";

export const Login = () => {
	const { dataVersion } = useSelector((state) => state.appData);

	const dispatch = useDispatch();

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorLogin, setErrorLogin] = useState("");

	const [showBranchModal, setShowBranchModal] = useState(false);
	const [branchList, setBranchList] = useState(null);

	const handleInputUser = (e) => {
		setUser(e.target.value);
		setErrorLogin("");
	};
	const handleInputPassword = (e) => {
		setPassword(e.target.value);
		setErrorLogin("");
	};
	const handleLogin = async () => {
		const responseData = await loginService(user, password);
		if (responseData.codStatus === 201) {
			dispatch(providerUpdateToken(responseData.data));
			setBranchList(responseData.data.branches);
			setShowBranchModal(true);
		}

		if (responseData.codStatus !== 201) {
			setErrorLogin("Erro ao conectar.");
			dispatch(providerClearAllInfo());
		}
	};

	return (
		<PageContainer>
			{showBranchModal && (
				<SelectBranchModal branchList={branchList} />
			)}
			<S.LoginContainer>
				<S.InputBox>
					<S.Text size="2">usuário</S.Text>
					<S.UserInput value={user} onChange={handleInputUser} />

					<S.Text size="2">senha</S.Text>
					<S.PasswordInput type="password" value={password} onChange={handleInputPassword} />

					<S.Text size="1">{errorLogin}</S.Text>
				</S.InputBox>

				<S.ButtonBox>
					<S.Button type="image" src={homebg2} onClick={handleLogin} />
				</S.ButtonBox>
			</S.LoginContainer>
		</PageContainer>
	);
};
