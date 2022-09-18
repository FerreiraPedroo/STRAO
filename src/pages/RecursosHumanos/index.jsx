import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalUseContext } from "../../provider/app";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

const departmentCardList = [
  { name: "Registrar funcionário", img: "", link: "/rh/employee/register" },
  { name: "Lista de funcionários", img: "", link: "/rh/employee/list" },
  { name: "Folha de ponto", img: "", link: "/rh/sheet" },
  { name: "Férias", img: "", link: "/rh/vacation" },
];

const pageName = "Recursos Humanos"

export const RhHome = () => {
  const navigate = useNavigate();
  const { userData } = useContext(GlobalUseContext);
  const [departmentCard, setDepartmentCard] = useState([]);

  useEffect(() => {
    if(userData.departments){
      setDepartmentCard(userData.departments);

    }
  }, []);

  return (
    <S.Container>
      {departmentCard.find().map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </S.Container>
  );
};
