import React, { useState } from "react";
import { AppContext } from "../../provider/app";

import * as S from "./styles"
import homebg2 from "./img/home-bg2.png"

export const Login = () => {
  const { user, userLogin } = AppContext()
  const [userData, setUserData] = useState('')
  const [passwordData, setPasswordData] = useState('')

  const handleInputUser = (e) => {
    setUserData(e.target.value)
  }
  const handleInputPassword = (e) => {
    setPasswordData(e.target.value)
  }
  const handleLogin = async () => {
    const data = await userLogin(userData, passwordData)
    console.log(data)
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
          <S.UserInput value={userData} onChange={handleInputUser} />
          <S.PasswordInput type="password" value={passwordData} onChange={handleInputPassword} />
        </S.PasswordBox>

        <S.ButtonBox>
          <S.Button type="image" src={homebg2} onClick={()=>handleLogin()} />
        </S.ButtonBox>

      </S.LoginContainer>
    </S.Container>
  )
}