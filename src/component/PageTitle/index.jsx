import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowFatLeft } from "phosphor-react";

import * as S from "./styles.jsx";
import { Button } from "../Button/index";

/**
 
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @returns
 */
export const PageTitle = ({ title, subTitle }) => {
	const navigate = useNavigate();

	return (
		<S.PageTitleContainer>
			<S.PageHeader>
				{/* <Button
					typeStyle="back"
					value={<ArrowFatLeft size={24} />}
					onClick={() => navigate(-1)}
				></Button> */}

				<S.PageTitle>
					{title}
					<S.PageSubTitle>{subTitle}</S.PageSubTitle>
				</S.PageTitle>
			</S.PageHeader>
		</S.PageTitleContainer>
	);
};
