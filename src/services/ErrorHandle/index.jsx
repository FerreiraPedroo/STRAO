const codStatusErrors = {
  401: "Remover login",
};

export const errorHandle = (_data, setNotificationModal, handleContext) => {
  const responseError = _data;

  if (!responseError) {
    return setNotificationModal({ message: "Erro na rede" });
  }
  switch (responseError.codStatus) {
    case 401:
      handleContext.removeLoginData();
      break;
    case 422:
      setNotificationModal(responseError);
      break;
    default:
      setNotificationModal({
        codStatus: 0,
        message: `ERRO DESCONHECIDO: ${responseError.message}`,
      });
      break;
  }
};
