import styled from "styled-components";
import { PageStyle } from "styles/container";

export const InnerContainer = styled.main`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;

	${PageStyle.container};

	padding-top: 12px;
	padding-bottom: 16px;
	gap: 8px;
`;

export const HeaderInner = styled.div`
	width: 100%;
`;

export const HeaderInnerTitle = styled.p`
	${PageStyle.containerTitle};
`;

export const UserDataContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 8px 0 0 0;

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
	background: #f1f1f1;
	border: 1px solid #a9a9a9;
	box-shadow: 0px 1px 1px #767676, inset 1px 1px 2px #ffffff;
	border-radius: 2px;
	gap: 8px;

	cursor: pointer;
	user-select: none;
	overflow: hidden;
	${({selected}) => selected && "border: 1px solid blue;"}
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
	width: 128px;
	height: 96px;
	border: 1px solid #ccc;
`;

export const ReferenceText = styled.span`
	font-size: 0.85rem;
	font-weight: 600;
`;

export const ReferenceNameText = styled.span`
	text-align: start;
	font-weight: 600;
	color: #333;
	font-size: 0.85rem;
	padding: 0 6px;
`;
