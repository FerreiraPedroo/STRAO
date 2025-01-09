import React from "react";

import * as S from "./styles.jsx";
import { ButtonText } from "component/Buttons/ButtonText/index.jsx";

export function DeleteStockModal({ title, message, closeModal, action }) {
	return (
		<S.Container>
			<S.Modal>
				<S.ModalClose onClick={() => closeModal(false)}>☓</S.ModalClose>
				<S.ModalMessageTitle>{title}</S.ModalMessageTitle>
				<S.ModalContent>{message}</S.ModalContent>
				<S.ButtonBox>
					<ButtonText text="Excluir" onClick={() => action()} />
					<ButtonText text="Cancelar" onClick={() => closeModal(false)} />
				</S.ButtonBox>
			</S.Modal>
		</S.Container>
	);
}
