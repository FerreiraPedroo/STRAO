import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

const departmentCardList = [
  { name: "Registrar funcionário", img: "", link: "/rh/employee/register" },
  { name: "Lista de funcionários", img: "", link: "/rh/employee/list" },
  { name: "Folha de ponto", img: "", link: "/rh/sheet" },
  { name: "Férias", img: "", link: "/rh/vacation" },
];

export const RhHome = () => {
  const navigate = useNavigate();
  const [departmentCard, setDepartmentCard] = useState([]);

  useEffect(() => {
    setDepartmentCard(departmentCardList);
  }, []);

  return (
    <S.Container>
      {departmentCard.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </S.Container>
  );
};
