import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

import * as S from "./styles.jsx";
import { CardInfo } from "component/Cards/CardInfo/index.jsx";

export function PageCardList({ theme = "normal", listData, pageLoading }) {
	return (
		<S.Container theme={theme}>
			{listData && listData.map((stock) => <CardInfo key={stock._id} data={stock} />)}

			{pageLoading && <>Carregando...</>}
			{listData && pageLoading ? <>Nenhum estoque...</> : null}
		</S.Container>
	);
}
