import React, { useEffect, useState, useContext } from "react";
import { GlobalUseContext } from "../../provider/app.jsx";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

export const Admin = () => {
  const { userData, pageName } = useContext(GlobalUseContext);
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(userData.departments[pageName]);
  }, []);

  return (
    <S.Container>
      {cards &&
        cards.actions.map((card) => <Card key={card.name} data={card} />)}
    </S.Container>
  );
};
