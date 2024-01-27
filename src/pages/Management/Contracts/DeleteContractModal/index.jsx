import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

import { PageContainer } from "component/container/PageContainer/styles.jsx";

export function DeleteContractModal({ contractData, closeModal }) {
	const [itemInfo, setItemInfo] = useState(contractData);

	useEffect(() => {

	}, []);

	return (
		<PageContainer>
			<S.Modal theme={"theme"}>
				<S.ModalClose theme={"theme"} onClick={() => closeModal(false)}>
					☓
				</S.ModalClose>
				<S.ModalMessageTitle>{contractData.name}</S.ModalMessageTitle>
				<S.ModalContent>{"message"}</S.ModalContent>
				<S.ButtonFormSubmit onClick={() => closeModal(false)}>Voltar</S.ButtonFormSubmit>
			</S.Modal>
		</PageContainer>
	);
}
