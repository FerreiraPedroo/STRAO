import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { sectorActionsImgs } from "../../helper/indexImg.js";

import * as S from "./styles.jsx";

export const Card = ({ data }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<S.Container onClick={() => navigate(pathname + data.path)}>
			<S.Box>
				<S.Img src={sectorActionsImgs[data.img]} />
				{/* <S.CategoryNotification>0</S.CategoryNotification> */}
			</S.Box>
			<S.CategoryName>{data.title}</S.CategoryName>
		</S.Container>
	);
};
