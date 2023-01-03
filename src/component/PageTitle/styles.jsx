import styled from "styled-components";

const props = {
	textPageTitle: `
  width: 100%;
  font-family: Calibri;
  font-size: 40px;
  color:#999;
  font-style: italic;
  line-height: 1;
  `
};

export const PageTitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: #f5f3f0;
`;

export const PageHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
`;
export const PageTitle = styled.h1`
	${props.textPageTitle}
`;
export const PageSubTitle = styled.div`
	font-size: 1.2rem;
`;
