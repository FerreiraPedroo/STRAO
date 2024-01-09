import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

import * as S from "./styles.jsx";
import { CardInfo } from "../../Cards/CardInfo/index.jsx";

export function PageCardList({ stockListData, pageLoading }) {
	return (
		<S.Container>
			{stockListData && stockListData.map((stock) => <CardInfo key={stock._id} data={stock} />)}

			{pageLoading && <>Carregando...</>}
			{ stockListData && pageLoading ? <>Nenhum estoque...</> : null}
		</S.Container>
	);
}
