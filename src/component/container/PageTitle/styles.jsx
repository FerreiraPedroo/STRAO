import styled from "styled-components";
import { PageTitleTheme } from "styles/container";

export const PageTitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: var(--background-color);
	margin: 8px 0px;

	${PageTitleTheme["normal"]}
`;

export const PageHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 20px;
`;
export const PageTitleBox = styled.div`
	width: 100%;
`;
export const PageTitle = styled.h1`
	width: 100%;

	display: flex;
	align-items: center;

	font-size: 2.8rem;
	font-style: italic;
	font-weight: bolder;
	color: #283b72;
	line-height: 1;
	white-space: wrap;

	${PageTitleTheme["normal"]}
`;
export const PageSubTitle = styled.h2`
	display: flex;
	white-space: wrap;
	align-items: center;
	color: #283b72;
	font-size: 1rem;

	${PageTitleTheme["normal"]}
`;
