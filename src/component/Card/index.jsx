import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles.jsx";

export const Card = ({ data }) => {
	const navigate = useNavigate();
console.log(data)
	return (
		<S.Container onClick={() => navigate(data.path)}>
			<S.Box>
				<S.Img src={data.img} />
				{/* <S.CategoryNotification>0</S.CategoryNotification> */}
			</S.Box>
			<S.CategoryName>{data.title}</S.CategoryName>
		</S.Container>
	);
};
