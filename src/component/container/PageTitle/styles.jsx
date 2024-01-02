import styled from "styled-components";

const props = {
	textPageTitle: `
		width: 100%;
		font-size: 2.8rem;
		font-style: italic;
		font-weight: bolder;
		color: #565656;
		line-height: 1.1;
  	`
};

export const PageTitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: #f5f3f0;
	margin-bottom: 8px;
`;

export const PageHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 16px;
`;
export const PageTitleBox = styled.div`
	width: 100%;
`;
export const PageTitle = styled.h1`
	display: flex;
	white-space: wrap;
	align-items: center;
	/* justify-content: center; */
	padding-left: 16px;
	
	${props.textPageTitle}
`;
export const PageSubTitle = styled.h2`
	display: flex;
	white-space: wrap;
	align-items: center;
	/* justify-content: center; */
	padding-left: 16px;
	font-size: 1.0rem;
`;
export const PageIcon = styled.div`
	font-size: 1.0rem;
`;
