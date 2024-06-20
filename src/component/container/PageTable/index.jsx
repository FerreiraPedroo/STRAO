import React, { useState, useLayoutEffect, useEffect } from "react";

import * as S from "./styles.jsx";
import "./style.css";

/**
 *
 */
export const PageTable = ({}) => {
	const [listHeaders, setListHeaders] = useState(["ID", "Name", "Qtd"]);
	const [listData, setListData] = useState([{ ID: 123, Name: "Lampada Fluorescente" }]);

	const [pagination, setPagination] = useState();

	const [rowSelected, setRowSelected] = useState(null);
	const [paginationSelected, setPaginationSelected] = useState(null);

	useEffect(() => {}, []);
	return (
		<S.Container theme={"normal"}>


			{/* {loading ? <S.LoadingBox>Carregando...</S.LoadingBox> : null}
			{!listData.length && !loading ? <S.LoadingBox>Sem registro</S.LoadingBox> : null} */}
		</S.Container>
	);
};
