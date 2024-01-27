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

export const InnerContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	background-color: #e5e5e5;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	gap: 16px;
`;

export const HeaderInner = styled.div`
	width: 100%;
`;

export const HeaderInnerTitle = styled.p`
	${props.headerTitle}
`;

export const UserDataContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;

`;

export const ButtonContainer = styled.div`
	${({ width }) => width && `width:${width};`}
	width: 100%;
	display: flex;
	justify-content: flex-start;
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

export const ReferenceContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 8px;
	background: #dddddd;
	border: 1px solid #a9a9a9;
	box-shadow: 0px 1px 1px #767676, inset 1px 1px 2px #ffffff;
	border-radius: 2px;
	gap: 8px;

	cursor: pointer;
	user-select: none;
	overflow: hidden;
	${({selected}) => selected && "border: 1px solid black;"}
	&:hover {
		border: 1px solid black;
	}
`;

export const ReferenceBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;

	user-select: none;
	overflow: hidden;
`;

export const ReferenceImg = styled.img`
	min-width: 128px;
	min-height: 96px;
`;

export const ReferenceText = styled.span`
	font-size: 0.9rem;
	font-weight: 700;
`;

export const ReferenceNameText = styled.span`
	text-align: start;
	font-weight: 700;
	color: #333;
	font-size: 0.9rem;
	padding: 0 6px;
`;
