import { useEffect, useState } from "react";

import * as N from "./styled";

export const NotificationModal = ({ theme, message, setNotification }) => {
	const [modalTimeOut, setModalTimeOut] = useState();

	useEffect(() => {
		setModalTimeOut(setTimeout(() => setNotification(false), 4000));
	}, []);

	return (
		<N.Container theme={theme}>
			<N.NotificationTitleText theme={theme}>Notificação</N.NotificationTitleText>
			<N.NotificationText theme={theme}>{message}</N.NotificationText>
		</N.Container>
	);
};
