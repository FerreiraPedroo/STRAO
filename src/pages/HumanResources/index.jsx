import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../provider/app";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

const departmentCardList = [
  { name: "Registrar funcionário", img: "", link: "/rh/employee/register" },
  { name: "Lista de funcionários", img: "", link: "/rh/employee/list" },
  { name: "Folha de ponto", img: "", link: "/rh/sheet" },
  { name: "Férias", img: "", link: "/rh/vacation" },
];

const pageName = "Recursos Humanos";

export const HumanResources = () => {
  // const navigate = useNavigate();
  const { userData } = useContext(GlobalContext);
  const [departmentCard, setDepartmentCard] = useState(departmentCardList);

  useEffect(() => {
    // if (userData.departments) {
    //   setDepartmentCard(userData.departments);
    // }
  }, []);

  return (
    <S.Container>
      {departmentCard.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </S.Container>
  );
};
