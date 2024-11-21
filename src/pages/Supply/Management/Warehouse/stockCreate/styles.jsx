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