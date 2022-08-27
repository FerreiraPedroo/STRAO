import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles.jsx";


export const Card = ({data: card}) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(card.link)}>
        <S.Box>
          <S.Img src={card.img} />
          <S.CategoryNotification>0</S.CategoryNotification>
        </S.Box>
        <S.CategoryName>{card.name}</S.CategoryName>
    </S.Container>
  );
};
