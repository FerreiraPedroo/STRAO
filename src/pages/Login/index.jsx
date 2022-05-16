import React from "react";
import { AppUseContext } from "../../provider/app";


import * as S from "./styles"
import homebg2 from "./img/home-bg2.png"


export const Login = () => {
  const { user, userLogin } = AppUseContext()

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
          <S.UserInput />
          <S.PasswordInput type="password" />
        </S.PasswordBox>

        <S.ButtonBox>
          <S.Button type="image" src={homebg2} onClick={() => userLogin()} />
        </S.ButtonBox>

      </S.LoginContainer>
    </S.Container>
  )
}