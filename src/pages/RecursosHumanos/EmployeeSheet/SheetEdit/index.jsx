import React, { useState, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { GlobalUseContext } from "../../../../provider/app";

import * as S from "./styles";

export const SheetEdit = () => {
  const { userData } = useContext(GlobalUseContext);

  const { state } = useLocation();
  console.log(state)


  return (
    <S.Container>


      <S.Title>
        FOLHA DE PONTO
      </S.Title>

      <S.Box>

      </S.Box>


    </S.Container>
  )
}





