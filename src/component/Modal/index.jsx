import React from "react";
import * as S from "./styles.jsx";

export function Modal({ children, showModal, title, width}) {
	return (
		<S.Container>
			<S.Modal width={width}>
				<S.ModalHeaderBox>
					<S.ModalMessageTitle>{title}</S.ModalMessageTitle>
					<S.ModalClose onClick={() => showModal(null)}>☓</S.ModalClose>
				</S.ModalHeaderBox>
				{children}
			</S.Modal>
		</S.Container>
	);
}
