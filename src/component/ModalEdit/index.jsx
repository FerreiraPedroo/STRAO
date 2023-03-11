import { useEffect, useState } from "react";
import * as S from "./styles.jsx";

export function ModalEdit({title, subtitle, itemData, handleSaveItemData}) {
    console.log(title)

    const [itemInfo, setItemInfo] = useState(itemData);
    

    useEffect(()=> {
        console.log("ISE");
    },[])

	return (
		<S.Container>
			<S.Modal theme={'theme'}>
				<S.ModalClose theme={'theme'} onClick={'onClick'}>
				☓
				</S.ModalClose>
				<S.ModalMessageTitle>{title}</S.ModalMessageTitle>
				<S.ModalMessage>{'message'}</S.ModalMessage>
				<S.ButtonFormSubmit onClick={handleSaveItemData}>Voltar</S.ButtonFormSubmit>
			</S.Modal>
		</S.Container>
	);
}
