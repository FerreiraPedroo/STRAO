import React from "react";
import * as S from "./styles.jsx";

import { ButtonText } from "component/ButtonText/index.jsx";

export function Modal({ children, showModal }) {
	return (
		<S.Container>
			<S.Modal theme={"normal"}>
				<S.ModalClose theme={"normal"} onClick={() => showModal(null)}>
					☓
				</S.ModalClose>
				{children}
				<S.ButtonBox>
					<ButtonText
						typeStyle={"normal"}
						disabled={false}
						value="FECHAR"
						onClick={() => showModal(true)}
					/>
				</S.ButtonBox>
			</S.Modal>
		</S.Container>
	);
}
