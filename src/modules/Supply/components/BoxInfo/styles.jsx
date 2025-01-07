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
`;

export const BlockInfoTitle = styled.p`
    ${BlockInfoContainerStyle.containerTitle};
`;

export const BlockInfoData = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const BlockInputBox = styled.div`
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	align-items: start;	
	gap: 0px 12px;
`;
