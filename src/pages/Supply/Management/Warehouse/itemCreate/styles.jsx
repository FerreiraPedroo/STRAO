import styled from "styled-components";
import { BlockInfoContainerStyle } from "styles/container";

export const BlockInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;

	${BlockInfoContainerStyle.container};

	padding-bottom: 8px;
`;

export const DataContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const BlockInfoTitle = styled.p`
	${BlockInfoContainerStyle.containerTitle};
`;

export const InputBox = styled.div`
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	align-items: start;	
	gap: 4px 12px;
`;
