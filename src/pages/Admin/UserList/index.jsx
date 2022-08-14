import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";

import * as S from "./styles.jsx";

export const AdminUserList = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const { data } = await api.get("admin/user/list");
        setUserList(data);
        setLoading(false);
      } catch (error) {}
    };
    getUserList();
  }, []);

  return (
    <S.Container>
      <S.PageTitle>LISTA DE USUÁRIOS</S.PageTitle>
      {loading ? (
        <>Carregando...</>
      ) : (
        <S.ListUserBox>
          <S.ListUserHeader>
            <S.ListHeadText>NOME</S.ListHeadText>
            <S.ListHeadText>DATA DE NASCIMENTO</S.ListHeadText>
            <S.ListHeadText>EMAIL</S.ListHeadText>
          </S.ListUserHeader>
          {userList.map((user) => (
            <S.UserBox>
              <S.UserName>{user.name}</S.UserName>
              <S.UserBirthDate>{user.birthDate}</S.UserBirthDate>
              <S.UserEmail>{user.email}</S.UserEmail>
            </S.UserBox>
          ))}
        </S.ListUserBox>
      )}
    </S.Container>
  );
};
