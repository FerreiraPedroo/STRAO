import styled from "styled-components";
import { PageStyle } from "styles/container";

export const ActionsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 16px;

	${({ theme }) => PageStyle.container(theme)};
`;
export const ActionsTitle = styled.div`
	${({ theme }) => PageStyle.containerTitle(theme)};
`;

export const ActionsBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	gap: 12px;
`;

export const ActionButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	${({ disabled, theme }) => disabled && PageStyle.buttonBoxText(theme)};
	${({ show }) => !show && "display: none"};
`;

export const ActionText = styled.div`
	font-size: 0.9rem;
	font-weight: 500;
	white-space: wrap;
	text-align: start;
	line-height: 14px;
`;
