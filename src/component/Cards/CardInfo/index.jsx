import React from "react";
import { useNavigate } from "react-router-dom";

import { sectorActionsImgs } from "../../../helper/indexImg.js";

import * as S from "./styles.jsx";

export function CardInfo({ data }) {
	const navigate = useNavigate();

	function goTo(url_path) {
		navigate(url_path, { state: data });
	}

	return (
		<S.Container onClick={() => goTo(data.url_path)}>
			<S.Box>
				<S.Img src={sectorActionsImgs[data.url_img]} />
				<S.TextBox>
					<S.NameTitle>
						Nome: <S.NameText>{data.name}</S.NameText>
					</S.NameTitle>
					{data.contract && (
						<S.NameTitle>
							Contrato: <S.NameText>{data.contract.name}</S.NameText>
						</S.NameTitle>
					)}
				</S.TextBox>
			</S.Box>
			{data.description && (
				<S.Description>
					<S.NameTitle>Descrição: </S.NameTitle>
					{data.description}
				</S.Description>
			)}
		</S.Container>
	);
}
