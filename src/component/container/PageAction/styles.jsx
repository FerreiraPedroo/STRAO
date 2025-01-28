import styled from "styled-components";
import { PageStyle } from "styles/container";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	gap: 16px;
	padding: 12px;
	border-radius: 6px;

	${PageStyle.container};

`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	${({ disabled }) => disabled && ""};
	${({ show }) => !show && "display: none"};
`;

export const ButtonText = styled.div`
	font-size: 1rem;
	font-weight: 500;
	white-space: wrap;
	text-align: start;
	line-height: 14px;
`;
