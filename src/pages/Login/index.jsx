import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { providerClearAllInfo, providerUpdateToken } from "services/store/features/data/appData";

import { loginService } from "services/login";

import { SelectBranchModal } from "./SelectBranchModal";

import homebg2 from "./img/home-bg2.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigator = useNavigate();
	const dispatch = useDispatch();

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorLogin, setErrorLogin] = useState("");

	const [showBranchModal, setShowBranchModal] = useState(false);
	const [branchList, setBranchList] = useState(null);

	const handleInputUser = (e) => {
		setUser(e.target.value);
		if (setErrorLogin) {
			setErrorLogin("");
		}
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
		if (setErrorLogin) {
			setErrorLogin("");
		}
	};

	const handleLogin = async () => {
		const responseData = await loginService(user, password);

		if (responseData.codStatus == 201) {
			dispatch(providerUpdateToken(responseData.data));
			setBranchList(responseData.data.branches);
			setShowBranchModal(true);
		}
		
		if (responseData.codStatus != 201) {
			setErrorLogin("Erro ao conectar.");
			dispatch(providerClearAllInfo());
		}
	};

	useEffect(()=>{
		const isUserLoger = localStorage.getItem("strao-token");
		if(isUserLoger){
			navigator("/home")
		}
	},[])

	return (
		<S.PageContainer>
			{showBranchModal && <SelectBranchModal closeModal={setShowBranchModal} branchList={branchList} />}
			<S.TitlePage>
				STRAO <br /> <span>pessoas & negócios</span>
			</S.TitlePage>
			<S.LoginContainer>
				<S.InputContainer>
					<S.InputBox>
						<S.Text size="1.2">USUÁRIO</S.Text>
						<S.UserInput value={user} onChange={handleInputUser} />
					</S.InputBox>
					<S.InputBox>
						<S.Text size="1.2">SENHA</S.Text>
						<S.PasswordInput type="password" value={password} onChange={handleInputPassword} />

						<S.TextError size="1">{errorLogin}</S.TextError>
					</S.InputBox>
				</S.InputContainer>
				<S.ButtonBox>
					<S.Button type="image" src={homebg2} onClick={handleLogin} />
				</S.ButtonBox>
			</S.LoginContainer>
		</S.PageContainer>
	);
};
