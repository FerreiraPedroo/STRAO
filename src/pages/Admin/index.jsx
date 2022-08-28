import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

const adminCardList = [
  { name: "Registrar usuário", img: "", link: "/admin/user/register" },
  { name: "Lista de usuários", img: "", link: "/admin/user/list" },
  { name: "Contratos", img: "", link: "/admin/contract/list" },
];

export const Admin = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCards(adminCardList);
    setCategory("");
  }, []);

  return (
    <S.Container>
      {cards.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </S.Container>
  );
};
