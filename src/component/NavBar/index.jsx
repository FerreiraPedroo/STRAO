import { useState, useContext } from "react";
import { GlobalUseContext } from "../../provider/app";
import { useNavigate, Navigate } from "react-router-dom";

import * as S from "./styles";
import rhIcon from "../../assets/icons/department/rh.png";
import { useEffect } from "react";

const imgLoad = {
  rh: rhIcon,
  admin: rhIcon,
};

const categoryDataList = {
  "Recursos Humanos": {
    imagem: imgLoad.rh,
    link: "/rh",
    subCategory: [
      "Cadastro funcionário",
      "Lista funcionários",
      "Ponto",
      "Férias",
    ],
  },
  "Segurança Trabalho": {
    imagem: imgLoad.rh,
    link: "/safety",
    subCategory: ["EPI", "CAT", "DDS"],
  },
  Suprimentos: {
    imagem: imgLoad.rh,
    link: "/supply",
    subCategory: ["Compras", "Almoxarifado"],
  },
  Admin: {
    imagem: imgLoad.rh,
    link: "/admin",
    subCategory: ["Registrar usuário", "Modificar usuário"],
  },
};

export const NavBar = () => {
  const { userData, userLogout } = useContext(GlobalUseContext);
  const navigate = useNavigate();

  const [departments, setDepartments] = useState();
  const [categorySelected, setCategorySelected] = useState("");

  const logout = async () => {
    const returnData = await userLogout();
    if (returnData.status === 200) {
      navigate("/");
    } else {
      console.log("ERRO AO EFETUAR O LOGOUT");
    }
  };

  useEffect(() => {
    const departmentsList = [];
    for (const [key, value] of Object.entries(userData.departments)) {
      if (value.link !== "/home") {
        departmentsList.push(value);
      }
    }
    setDepartments(departmentsList);
  }, []);

  return (
    <S.Container>
      <S.StraoTitle>STRAO</S.StraoTitle>
      <S.Logout onClick={logout}>{`<`}</S.Logout>
      <S.UserAvatar>
        <S.UserAvatarImg img={userData.avatar} />
        <S.UserName>Pedro</S.UserName>
      </S.UserAvatar>
      <S.NavContainer>
        {departments &&
          departments.map((department) => (
            <S.BtnDepartment
              key={department.name}
              select={""}
              onClick={() => navigate(department.link)}
            >
              <S.ImgDepartment src={imgLoad[department.imagem]} />
              <S.TextDepartment>{department.name}</S.TextDepartment>
            </S.BtnDepartment>
          ))}
      </S.NavContainer>
    </S.Container>
  );
};
