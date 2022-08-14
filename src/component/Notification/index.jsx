import { useEffect, useState } from "react";

import * as N from "./styled";

export const Notification = ({ type, msg }) => {
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    setShowModal(type);
  }, []);

  return (
    <>
      {showModal === "text" && (
        <N.Container>
          <N.TitleText notified={"success"}>Notificação</N.TitleText>
          <N.NotificationText notified={"success"}>
            Registrado com sucesso.
          </N.NotificationText>
        </N.Container>
      )}
      {showModal === "full" && (
        <N.ContainerFull>
          <N.Modal>
            <N.ModalClose onClick={() => setShowModal("")}>X</N.ModalClose>
            <N.ModalMessage>{msg}</N.ModalMessage>
            <N.ButtonFormSubmit onClick={() => setShowModal("")}>
              Voltar
            </N.ButtonFormSubmit>
          </N.Modal>
        </N.ContainerFull>
      )}
    </>
  );
};
