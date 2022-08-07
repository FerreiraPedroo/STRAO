import React, { useState, useContext } from "react";
import { GlobalUseContext } from "../../provider/app";

import * as S from "./styles";
import homebg2 from "./img/home-bg2.png";


export const Login = () => {
  const { userLogin } = useContext(GlobalUseContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleInputUser = (e) => {
    setUser(e.target.value);
  }
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = async () => {
    const data = await userLogin(user, password);
  }

  return (
    <S.Container>
      <S.LoginContainer>

        <S.InputBox>
          <S.Text size="2">
            usuário
          </S.Text>
          <S.Text size="2">
            senha
          </S.Text>
        </S.InputBox>

        <S.PasswordBox>
          <S.UserInput value={user} onChange={handleInputUser} />
          <S.PasswordInput type="password" value={password} onChange={handleInputPassword} />
        </S.PasswordBox>

        <S.ButtonBox>
          <S.Button type="image" src={homebg2} onClick={() => handleLogin()} />
        </S.ButtonBox>

      </S.LoginContainer>
    </S.Container>
  )
}