import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles.jsx";
import { ButtonText } from "../../ButtonText/index";
import { useDispatch } from "react-redux";

/**
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @param backUrl - String - Url para ser direcionado quando clicar no botão.
 * @param pageIndex - String - Se a página é index, não temo como voltar pelo botão.
 *
 * @returns
 */
export const PageTitle = ({ title, subTitle, backUrl, pageIndex = true }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const departmentLocation = "/" + location.pathname.split("/")[1];

	function selectSection() {
		dispatch({
			payload: departmentLocation,
			type: "sidebar/changeSectionSelected"
		});
		navigate(backUrl);
	}

	return (
		<S.PageTitleContainer>
			<S.PageHeader>
				{pageIndex && (
					<ButtonText
						disabled={!backUrl}
						typeStyle="back"
						value={"Voltar"}
						onClick={selectSection}
					/>
				)}

				<S.PageTitleBox>
					<S.PageTitle>{title}</S.PageTitle>
					<S.PageSubTitle>{subTitle}</S.PageSubTitle>
				</S.PageTitleBox>
			</S.PageHeader>
		</S.PageTitleContainer>
	);
};
