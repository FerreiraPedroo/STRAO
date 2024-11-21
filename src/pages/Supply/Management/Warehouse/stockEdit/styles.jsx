import styled from "styled-components";
import { PageStyle } from "styles/container";

export const InnerContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	gap: 8px;

	${({ theme }) => PageStyle.container(theme)};
`;

export const HeaderInner = styled.div`
	width: 100%;
`;

export const HeaderInnerTitle = styled.p`
	${({ theme }) => PageStyle.containerTitle(theme)};
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
