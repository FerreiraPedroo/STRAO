import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

import * as S from "./styles.jsx";
import { CardInfo } from "component/Cards/CardInfo/index.jsx";

export function PageCardList({ theme = "normal", stockListData, pageLoading }) {
	return (
		<S.Container theme={theme}>
			{stockListData && stockListData.map((stock) => <CardInfo key={stock._id} data={stock} />)}

			{pageLoading && <>Carregando...</>}
			{stockListData && pageLoading ? <>Nenhum estoque...</> : null}
		</S.Container>
	);
}
