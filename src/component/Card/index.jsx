import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles.jsx";

export const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(data.url)}>
      <S.Box>
        <S.Img src={data.img} />
        {/* <S.CategoryNotification>0</S.CategoryNotification> */}
      </S.Box>
      <S.CategoryName>{data.name}</S.CategoryName>
    </S.Container>
  );
};
