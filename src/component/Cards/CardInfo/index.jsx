import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sectorActionsImgs } from "../../../helper/indexImg.js";

import * as S from "./styles.jsx";

export function CardInfo({ data }) {
	const navigate = useNavigate();

	function selectSection(url_path) {
		navigate(url_path);
	}

	return (
		<S.Container onClick={() => selectSection(data.url_path)}>
			<S.Box>
				<S.Img src={sectorActionsImgs[data.url_img]} />
				<S.Name>{data.name}</S.Name>
			</S.Box>
			<S.Description>{data.name}</S.Description>
		</S.Container>
	);
}
