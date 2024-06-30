import styled from "styled-components";
import { BlockInfoContainerStyle } from "styles/container.jsx"

export const StockInfoBlock = styled.div`
	${({theme}) => BlockInfoContainerStyle.container(theme)}
	width: 100%;
`;
export const StockInfoBlockTitle = styled.div`
	${({theme}) => BlockInfoContainerStyle.containerTitle(theme)}
`;

export const LocationInfoBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const ButtonBox = styled.div`
	display: flex;
	padding: 12px;
	gap: 12px;
`;
