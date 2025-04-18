import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { providerClearAllInfo } from "services/store/features/data/appData";
import { setLoginReset } from "services/store/features/actions/actions.js";

import { Outlet, useNavigate } from "react-router-dom";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";
import { Modal } from "pages/Root/Modal/index.jsx";
import { NavBar } from "component/NavBar";
import { SideBar } from "component/SideBar";

import * as S from "./styles.jsx";
// import { NotificationModal } from "component/Notification/modal.jsx";

/**
 * Esta função é repassada para o STORE no redux.
 * É verificado se os dados do aplicativo estão completos no local storage ou
 * se o login foi resetado por alguma razão, quando recebe da API um 401.
 * @param {*} state
 * @returns
 */
function verifyDataApp(state) {
	if (
		!state.appData.departmentsInfo ||
		!state.appData.sectorsInfo ||
		!state.appData.userInfo ||
		!state.appData.token ||
		state.actions.loginRequest
	) {
		return true;
	}
	return false;
}

export function Root() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const result = useSelector(verifyDataApp);
	// const notification = useSelector((state) => state.notification);

	// console.log("Verificação do usuario /root/index");

	return (
		<S.Container>
			{result ? (
				
				<Modal
					showModal={true}
					title="ERROR"
					width="480px"
					showCloseButton={false}
					buttons={
						<ButtonText
							text="Fechar"
							onClick={() => {
								dispatch(providerClearAllInfo());
								dispatch(setLoginReset(false));
								navigate("/");
							}}
						/>
					}
				>
					<S.Message>Voce deve efetuar login novamente.</S.Message>
					<S.Message>Para atualizar os dados da aplicação ou autenticação</S.Message>
				</Modal>
			) : null}
			{/* {!notification.length ? (
				<NotificationModal/>
			):null} */}

			<NavBar />
			{/* <S.HrLine /> */}
			<S.CenterContainer>
				<SideBar />
				<Outlet />
			</S.CenterContainer>
		</S.Container>
	);
}
