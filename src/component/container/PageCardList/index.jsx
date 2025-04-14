import React from "react";

import * as S from "./styles.jsx";
import { CardInfo } from "component/Cards/CardInfo/index.jsx";

export function PageCardList({ listData, pageLoading }) {
	return (
		<S.Container>
			{listData && listData.length
				? listData.map((stock) => <CardInfo key={stock._id} data={stock} />)
				: null}
			
				{pageLoading && <S.LastBox>Carregando...</S.LastBox>}
				{listData && !listData.length ? <S.LastBox>Nenhum companhia</S.LastBox> : null}
			
		</S.Container>
	);
}
