import styled from "styled-components";
import { BlockStyle } from "styles/component/container/blockContainer";

export const BlockInfoContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;
	border-radius: 0;
	padding: 0;


	overflow-y: scroll;
	overflow: auto;
`;

export const HeaderContainer = styled.div`
	width: 100%;
`;
export const HeaderTitle = styled.p`
	${BlockStyle.title}
`;

export const BlockInfoData = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const BlockInputBox = styled.div`
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	align-items: start;
	gap: 0px 12px;
`;
