import styled from "styled-components";
import { PageStyle } from "styles/container";

export const InnerContainer = styled.main`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;

	${({ theme }) => PageStyle.container(theme)};

	padding-top: 12px;
	padding-bottom: 16px;
	gap: 8px;
`;

export const HeaderInner = styled.div`
	width: 100%;
`;

export const HeaderInnerTitle = styled.p`
	${({ theme }) => PageStyle.containerTitle(theme)};
`;

export const UserDataContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const ButtonContainer = styled.div`
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

export const Loading = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	text-align: center;
`;
