import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api.js";
import { Notification } from "../../../component/Notification";

import { GlobalUseContext } from "../../../provider/app";

import * as S from "./styles.jsx";

export const AdminUserList = () => {
  const navigate = useNavigate();
  const { handle } = useContext(GlobalUseContext);
  const [notificationModal, setNotificationModal] = useState({});
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const { data } = await api.get("admin/user/list", {
          headers: { "x-access-token": localStorage.getItem("strao-token") },
        });
        setUserList(data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
        if (error.response.data.codStatus === 401) {
          handle.invalidToken();
        }
        setNotificationModal(error.response.data);
      }
    };
    getUserList();
  }, []);

  return (
    <S.Container>
      <S.PageTitle>LISTA DE USUÁRIOS</S.PageTitle>
      {notificationModal.codStatus && (
        <Notification type="full" msg={notificationModal.message} />
      )}
      {loading ? (
        <>{!notificationModal.codStatus && <>Carregando...</>}</>
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
