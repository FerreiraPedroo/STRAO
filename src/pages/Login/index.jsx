import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../provider/app";
import { loginService } from "../../services/login";

import * as S from "./styles";
import homebg2 from "./img/home-bg2.png";

export const Login = () => {
    const { handleContext, userDataVersion } = useContext(GlobalContext);
    const navigate = useNavigate();
    
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const handleInputUser = (e) => {
        setUser(e.target.value);
    };
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = async () => {
        setErrorLogin("");
        const data = await loginService(user, password, userDataVersion);

        if (data.codStatus === 200) {
            handleContext.newLoginData(data);
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
                    <S.PasswordInput type="password" value={password} onChange={handleInputPassword} />

                    <S.Text size="1">{errorLogin}</S.Text>
                </S.InputBox>

                <S.ButtonBox>
                    <S.Button type="image" src={homebg2} onClick={() => handleLogin()} />
                </S.ButtonBox>
            </S.LoginContainer>
        </S.Container>
    );
};
