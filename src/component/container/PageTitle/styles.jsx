import styled from "styled-components";

import { pageTitleStyle } from "styles/component/container/pageTitle";

export const PageTitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0px;
	/* padding: 12px 0; */
`;

export const PageTitleBox = styled.div`
	width: 100%;
`;

export const PageTitle = styled.h1`
	width: 100%;

	display: flex;
	align-items: center;

	font-size: 1.8rem;
	font-style: italic;
	font-weight: bold;
	line-height: 1;
	white-space: wrap;

	${pageTitleStyle.pageTitle}
`;

export const PageSubTitle = styled.h2`
	display: flex;
	white-space: wrap;
	align-items: center;
	font-size: 0.9rem;

	${pageTitleStyle.pageTitle}
`;
