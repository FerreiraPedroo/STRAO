import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../component/Card";

import { Window } from "../../component/windowsStyleContainer";

import * as S from "./styles.jsx";

const cardList = [
  { name: "Recursos Humanos", img: "", link: "/rh" },
  { name: "Segurança do Trabahlho", img: "", link: "/safety" },
  { name: "Suprimentos", img: "", link: "/supply" },
  { name: "Frotas", img: "", link: "/fleets" },
  { name: "Fluxo de caixa", img: "", link: "/cashflow" },
];

export const Home = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardList);
  }, []);

  return (
    <S.Container>
      {cards.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </S.Container>
  );
};
