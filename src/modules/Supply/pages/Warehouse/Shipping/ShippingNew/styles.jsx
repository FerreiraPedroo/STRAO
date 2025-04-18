import styled from "styled-components";
import { BlockInfoContainerStyle } from "styles/container";

export const BlockInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;

	${({ theme }) => BlockInfoContainerStyle.container(theme)};

	padding-bottom: 32px;
`;

export const DataContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const HeaderTitle = styled.p`
	${({ theme }) => BlockInfoContainerStyle.containerTitle(theme)};
`;

export const InputBox = styled.div`
	width: 100%;
	display: flex;
	align-items: start;
	gap: 12px;
`;
