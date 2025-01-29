import React from "react";
import { useNavigate } from "react-router-dom";

import { sectorActionsImgs } from "helper/indexImg.js";

import * as S from "./styles.jsx";

export function CardInfo({ data }) {
	const navigate = useNavigate();

	function goTo(url_path, id) {
		navigate(`${url_path}/${id}`);
	}

	return (
		<S.Container onClick={() => goTo(data.url_path, data._id)}>
			<S.Box>
				<S.Img src={sectorActionsImgs[data.url_img]} />
				<S.TextBox>
					<S.NameTitle>
						Nome: <S.NameText>{data.name}</S.NameText>
					</S.NameTitle>
					<S.NameTitle>
						Status: <S.NameText>{data.status}</S.NameText>
					</S.NameTitle>
					{data.description && (
						<S.Description>
							<S.NameTitle>Descrição: </S.NameTitle>
							<S.NameText>{data.description}</S.NameText>
						</S.Description>
					)}
				</S.TextBox>
			</S.Box>
		</S.Container>
	);
}
