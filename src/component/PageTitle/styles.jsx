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
	justify-content: start;
	align-items: center;
	gap: 16px;
`;
export const PageTitleBox = styled.div`
	${props.textPageTitle}
`;
export const PageTitle = styled.h1`
	display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
	align-items: center;
	gap: 12px;
	${props.textPageTitle}
`;
export const PageSubTitle = styled.h1`
	font-size: 1.2rem;
`;
export const PageIcon = styled.div`
	font-size: 1.2rem;
`;
