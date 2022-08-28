import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Notification } from "../../../component/Notification";

import * as S from './styles.jsx';

export const AdminContract = () => {
  const navigate = useNavigate();
  const [notificationModal, setNotificationModal] = useState({});
  const [submitReturnErrorMsg, setSubmitReturnErrorMsg] = useState({});


  return (
    <S.Container>
            {notificationModal.codStatus && (
        <Notification type="full" msg={notificationModal.msg} />
      )}

    </S.Container>
  )
}