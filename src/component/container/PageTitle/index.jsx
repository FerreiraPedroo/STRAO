import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles.jsx";
import { ButtonText } from "../../Buttons/ButtonText/index";
import { useDispatch } from "react-redux";

/**
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @param backUrl - String - Url para ser direcionado quando clicar no botão.
 * @param backPage - String - Se a página é index, não temo como voltar pelo botão.
 *
 * @returns
 */
export const PageTitle = React.memo(({ title, subTitle, backUrl, backPage = false }) => {
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

				{backPage && (
					<ButtonText
						disabled={!backUrl}
						text={"Voltar"}
						onClick={selectSection}
					/>
				)}

				<S.PageTitleBox>
					<S.PageTitle>{title}</S.PageTitle>
					<S.PageSubTitle>{subTitle}</S.PageSubTitle>
				</S.PageTitleBox>

		</S.PageTitleContainer>
	);
});
