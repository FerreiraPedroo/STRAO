import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalUseContext } from "../../provider/app";
import { Card } from "../../component/Card";

import { Window } from "../../component/windowsStyleContainer";

import * as S from "./styles.jsx";

export const Home = () => {
  const { userData, pageName } = useContext(GlobalUseContext);
  const [cards, setCards] = useState();

  useEffect(() => {
    if(userData.departments){
      setCards(userData.departments);
    }
  }, []);

  return (
    <S.Container>
      {cards &&
        cards[pageName].actions.map((card) => (
          <Card key={card.name} data={card} />
        ))}
    </S.Container>
  );
};
