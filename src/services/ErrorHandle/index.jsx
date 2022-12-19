const codStatusErrors = {
	401: "Remover login"
};

export const errorHandle = (data, setNotificationModal, handleContext) => {
	const responseError = data;

	if (!responseError) {
		return setNotificationModal({ message: "Erro na rede" });
	}

	switch (responseError.codStatus) {
		case 401:
			handleContext.removeLoginData();
			break;
		case 422:
			setNotificationModal(responseError.response);
			break;
		default:
			setNotificationModal({
				codStatus: 0,
				message: `ERRO DESCONHECIDO: ${responseError.message}`
			});
			break;
	}
};
