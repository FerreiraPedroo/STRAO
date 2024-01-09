import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sectorActionsImgs } from "../../../helper/indexImg.js";

import * as S from "./styles.jsx";

export const Card = ({ data }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function selectSection(url_path) {
		dispatch({ payload: url_path, type: "sidebar/changeSectionSelected" });
		navigate(url_path);
	}
	return (
		<S.Container onClick={() => selectSection(data.url_path)}>
			<S.Box>
				<S.Img src={sectorActionsImgs[data.url_img]} />
				{/* <S.CategoryNotification>0</S.CategoryNotification> */}
			</S.Box>
			<S.CategoryName>{data.name}</S.CategoryName>
		</S.Container>
	);
};
