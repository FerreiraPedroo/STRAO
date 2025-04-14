import styled from "styled-components";
import { BlockStyle } from "styles/component/container/blockContainer";

export const Container = styled.div`
	${BlockStyle.container}
	gap: 12px;
	height: 100%;
	padding: 20px;
	align-content: flex-start;
`;

export const LastBox = styled.div`
	width: 100%;
	padding: 20px;
	text-align: center;
`;
