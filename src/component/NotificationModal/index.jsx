import { useEffect, useState } from "react";

import * as N from "./styled";

export const NotificationModal = ({ type, theme, message, messageTitle, onClick }) => {
	const [showModal, setShowModal] = useState();

	useEffect(() => {
		setShowModal(type);
	}, []);

	return (
		<>
			{showModal === "modal" && (
				<N.Container theme={theme}>
					<N.NotificationTitleText theme={theme}>Notificação</N.NotificationTitleText>
					<N.NotificationText theme={theme}>{message}</N.NotificationText>
				</N.Container>
			)}
			{showModal === "full" && (
				<N.ContainerFull>
					<N.Modal theme={theme}>
						<N.ModalClose theme={theme} onClick={onClick}>X</N.ModalClose>
						<N.ModalMessageTitle>{messageTitle}</N.ModalMessageTitle>
						<N.ModalMessage>{message}</N.ModalMessage>
						<N.ButtonFormSubmit onClick={onClick}>
							Voltar
						</N.ButtonFormSubmit>
					</N.Modal>
				</N.ContainerFull>
			)}
		</>
	);
};
