
import { useState } from 'react'
import { AppUseContext } from '../../provider/app'

import * as S from './styles'


export const NavBar = () => {
  const { user } = AppUseContext()
  const [page, setPage] = useState()

  return (
    <S.Container>
      <S.UserAvatar>
        <S.UserAvatarImg img={user.avatar} />
      </S.UserAvatar>
      <S.NavContainer>
        <S.ModuleBox>Recursos<br />Humanos</S.ModuleBox>
        <S.Arrow>{'>'}</S.Arrow>
        <S.ModuleBox>Funcionários</S.ModuleBox>
        <S.ModuleBox>Ponto</S.ModuleBox>
        <S.ModuleBox>Recursos Humanos</S.ModuleBox>

      </S.NavContainer>

    </S.Container>
  )
}