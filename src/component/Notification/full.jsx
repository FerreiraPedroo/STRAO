import { useEffect, useState } from "react";

import * as N from "./styled";

export const NotificationFull = ({
	theme,
	messageTitle,
	message,
	onClick,
	setNotification,
	buttonTitle = "Voltar"
}) => {
	const [loading, setLoading] = useState(false);

	function closeNotification() {
		console.log("OJ")
		setNotification(false);
	}

	async function onClickFunction() {
		setLoading(true);
		await onClick();
		setLoading(false);
	}

	return (
		<N.ContainerFull>
			<N.Modal theme={theme}>
				<N.ModalClose theme={theme} onClick={closeNotification}>
					X
				</N.ModalClose>
				<N.ModalMessageTitle theme={theme}>{messageTitle}</N.ModalMessageTitle>
				<N.ModalMessage theme={theme}>{message}</N.ModalMessage>
				<N.ButtonFormSubmit disabled={loading} onClick={onClickFunction}>
					{buttonTitle}
				</N.ButtonFormSubmit>
			</N.Modal>
		</N.ContainerFull>
	);
};
