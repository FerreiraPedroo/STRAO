import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles.jsx";
import { Button } from "../../Button/index";
import { useDispatch } from "react-redux";

/**
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @returns
 */
export const PageTitle = ({ title, subTitle, icon, backButton }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const departmentLocation = "/" + location.pathname.split("/")[1];
	
	function selectSection() {
		dispatch({
			payload: departmentLocation,
			type: "sidebar/changeSectionSelected"
		});
		navigate(departmentLocation);
	}

	return (
		<S.PageTitleContainer>
			<S.PageHeader>
				<Button
					typeStyle="back"
					value={"Voltar"}
					onClick={selectSection}
				></Button>

				<S.PageTitleBox>
					<S.PageTitle>
						{title}
					</S.PageTitle>
					<S.PageSubTitle>{subTitle}</S.PageSubTitle>
				</S.PageTitleBox>
			</S.PageHeader>
		</S.PageTitleContainer>
	);
};
