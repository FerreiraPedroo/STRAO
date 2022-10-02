import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../../services/api.js";
import { Notification } from "../../../component/Notification";

import { GlobalUseContext } from "../../../provider/app";

import { Button } from "../../../component/Button";
import { Input } from "../../../component/Input";

import * as S from "./styles.jsx";
import { errorHandle } from "../../../services/ErrorHandle/index.jsx";

export const AdminUserList = () => {
  const navigate = useNavigate();
  const { handleContext, userTokenData } = useContext(GlobalUseContext);
  const [notificationModal, setNotificationModal] = useState();
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(true);

  const [filterUserName, setFilterUserName] = useState();
  const [filterUserEmail, setFilterUserEmail] = useState();

  useEffect(() => {
    const getUserList = async () => {
      try {
        const { data } = await api.get("admin/user/list", {
          headers: { "x-access-token": userTokenData },
        });
        setUserList(data);
        setLoading(false);
      } catch (error) {
        errorHandle(error.response.data, setNotificationModal, handleContext);
      }
    };
    getUserList();
  }, []);

  return (
    <S.Container>
      <S.PageHeader>
        <Button typeStyle="back" value="<" onClick={() => navigate(-1)} />
        <S.PageTitle>LISTA DE USUÁRIOS</S.PageTitle>
      </S.PageHeader>
      {notificationModal && (
        <Notification
          type="full"
          msg={notificationModal.message}
          onClick={() => navigate(-1)}
        />
      )}
      {loading ? (
        <>Carregando...</>
      ) : (
        <S.CenterContainer>
          <S.FilterContainer>
            <S.FilterTitle>Filtro</S.FilterTitle>
            <S.FilterInputBox>
              <Input
                title="Usuário"
                onChange={(e) => setFilterUserName(e.target.value)}
                value={filterUserName}
                placeholder={"Usuário"}
              />
              <Input
                title="Email"
                onChange={(e) => setFilterUserEmail(e.target.value)}
                value={filterUserEmail}
                placeholder={"Email"}
              />
              <Button typeStyle="find" onClick={() => navigate(-1)} />
            </S.FilterInputBox>
          </S.FilterContainer>
          <S.ListUserBox>
            <S.ListUserHeader>
              <S.ListHeadText w="96px">Situação</S.ListHeadText>
              <S.ListHeadText w="384px">Nome</S.ListHeadText>
              <S.ListHeadText w="320px">E-mail</S.ListHeadText>
              <S.ListHeadText>Ações</S.ListHeadText>
            </S.ListUserHeader>
            {userList.map((user) => (
              <S.UserBox
                onClick={() =>
                  navigate("/admin/user/edit", {
                    state: { email: user.email },
                  })
                }
              >
                <S.UserText
                  w="96px"
                  color={user.status === "active" ? "#00A300" : "tomato"}
                >
                  {user.status === "active" ? "Ativo" : "Inativo"}
                </S.UserText>
                <S.UserText w="384px">{user.name}</S.UserText>
                <S.UserText w="320px">{user.email}</S.UserText>
                <S.UserText></S.UserText>
              </S.UserBox>
            ))}
          </S.ListUserBox>
        </S.CenterContainer>
      )}
    </S.Container>
  );
};
