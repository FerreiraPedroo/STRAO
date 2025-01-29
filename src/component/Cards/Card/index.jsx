import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sectorActionsImgs } from "../../../helper/indexImg.js";

import * as S from "./styles.jsx";

export const Card = ({ data }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function selectSection(URLPath) {
		console.log("OK")
		dispatch({ payload: URLPath, type: "sidebar/changeSectionSelected" });
		navigate(URLPath);
	}

	return (
		<S.Container onClick={() => selectSection(data.URLPath)}>
			<S.Box>
				<S.Img src={sectorActionsImgs[data.URLMenuImg]} />
				{/* <S.CategoryNotification>0</S.CategoryNotification> */}
			</S.Box>
			<S.CategoryName>{data.name}</S.CategoryName>
		</S.Container>
	);
};
