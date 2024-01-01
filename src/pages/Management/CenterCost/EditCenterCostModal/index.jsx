import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

export function EditCenterCostModal({ centerCostData, closeModal }) {
	const [itemInfo, setItemInfo] = useState(centerCostData);

	useEffect(() => {
	}, []);

	return (
		<S.Container>
			<S.Modal theme={"theme"}>
				<S.ModalClose theme={"theme"} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{centerCostData.name}</S.ModalMessageTitle>
				<S.ModalContent>{"message"}</S.ModalContent>
				<S.ButtonFormSubmit onClick={() => closeModal(false)}>Voltar</S.ButtonFormSubmit>
			</S.Modal>
		</S.Container>
	);
}
