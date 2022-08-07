import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from './styles.jsx';

export const AdminUserList = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      LISTA DE USUÁRIOS
    </S.Container>
  )
}