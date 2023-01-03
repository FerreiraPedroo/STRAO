import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { GlobalContext } from "../../provider/app";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const HumanResources = () => {
  const location = useLocation();
  const { userData } = useContext(GlobalContext);

  return (
    <S.Container>
      {Object.values(userData.departments[location.pathname].actions).map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </S.Container>
  );
};
