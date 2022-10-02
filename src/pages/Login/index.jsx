import React, { useState, useContext } from "react";
import { GlobalUseContext } from "../../provider/app";

import * as S from "./styles";
import homebg2 from "./img/home-bg2.png";

export const Login = () => {
  const { userLogin } = useContext(GlobalUseContext);
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
    
    const data = await userLogin(user, password);
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
          <S.Button type="image" src={homebg2} onClick={() => handleLogin()} />
        </S.ButtonBox>
      </S.LoginContainer>
    </S.Container>
  );
};
