import styled from "styled-components";

const props = {
	textFontFamily: "Arial",
	titleTextColor: "#999",
	errorTextColor: "#f66",
	successTextColor: "#6f6",
	bgColor: "",
	inputBgColorDisable: "#ddd",
	headerTitle: `
	font-style: italic;
	font-size: 1.2rem;
  	font-weight: 600;
	color: #565656;  
  `
};

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;
	padding: 8px;
	gap: 16px;
`;

export const InnerContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	gap: 8px;
`;

export const HeaderInner = styled.div`
	width: 100%;
`;

export const HeaderInnerTitle = styled.p`
	${props.headerTitle}
`;

export const UserDataContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const ButtonContainer = styled.div`
	${({ width }) => width && `width:${width};`}
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 8px;
`;

export const ActionText = styled.div`
	font-size: 0.9rem;
	font-weight: 500;
	white-space: wrap;
	text-align: start;
	line-height: 14px;
`;
