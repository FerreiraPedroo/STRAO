import { useEffect, useState } from "react";

import * as N from "./styled";

export const NotificationModal = ({
	type,
	theme,
	messageTitle,
	message,
	onClick,
	setNotification,
	buttonTitle = "Voltar",
}) => {

	const [typeModal] = useState(type);
	const [modalTimeOut, setModalTimeOut] = useState()
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (typeModal == "modal") {
			setModalTimeOut(setTimeout(() => setNotification(false), 4000));
		}
	}, []);

	async function onClickFunction(){
		setLoading(true);
		await onClick();
		setLoading(false);
	}

	return (
		<>
			{typeModal === "modal" && (
				<N.Container theme={theme}>
					<N.NotificationTitleText theme={theme}>
						Notificação
					</N.NotificationTitleText>
					<N.NotificationText theme={theme}>{message}</N.NotificationText>
				</N.Container>
			)}
			{typeModal === "full" && (
				<N.ContainerFull>
					<N.Modal theme={theme}>
						<N.ModalClose theme={theme} onClick={() => setNotification(false)}>
							X
						</N.ModalClose>
						<N.ModalMessageTitle theme={theme}>{messageTitle}</N.ModalMessageTitle>
						<N.ModalMessage theme={theme}>{message}</N.ModalMessage>
						<N.ButtonFormSubmit disabled={loading} onClick={onClickFunction}>{buttonTitle}</N.ButtonFormSubmit>
					</N.Modal>
				</N.ContainerFull>
			)}
		</>
	);
};
