import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../provider/app";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

const departmentCardList = [
  { title: "Registrar funcionário", img: "", link: "/rh/employee/register" },
  { title: "Lista de funcionários", img: "", link: "/rh/employee/list" },
  { title: "Folha de ponto", img: "", link: "/rh/sheet" },
  { title: "Férias", img: "", link: "/rh/vacation" },
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
        <Card key={card.title} data={card} />
      ))}
    </S.Container>
  );
};
