import { useState, useContext } from "react";
import { GlobalUseContext } from "../../provider/app";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { useEffect } from "react";

export const NavBar = () => {
  const { userData, userLogout } = useContext(GlobalUseContext);
  const navigate = useNavigate();

  const [departments, setDepartments] = useState();

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
    console.log(userData);
    for (const [key, value] of Object.entries(userData.departments)) {
      if (value.url !== "/home") {
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
              onClick={() => navigate(department.url)}
            >
              <S.ImgDepartment src={department.imagem} />
              <S.TextDepartment>{department.name}</S.TextDepartment>
            </S.BtnDepartment>
          ))}
      </S.NavContainer>
    </S.Container>
  );
};
