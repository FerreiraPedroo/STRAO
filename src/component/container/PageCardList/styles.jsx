import styled from "styled-components";
import { pageListStyle } from "styles/component/container/pageList";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;

	gap: 8px;

	${pageListStyle.container};
`;
