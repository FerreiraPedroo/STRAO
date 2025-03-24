import styled from "styled-components";
import { BlockStyle } from "styles/component/container/blockContainer";
import { PageContainer } from "component/container/PageContainer/styles";

export const Container = styled(PageContainer)`
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: darkgray;
		border-radius: 6px;
	}
	&::-webkit-scrollbar-track {
		background-color: #ccc;
		border-radius: 6px;
	}
`;
export const DataContainer = styled.div`
	${BlockStyle.container}
`;
export const HeaderContainer = styled.div`
	width: 100%;
`;
export const HeaderTitle = styled.p`
	${BlockStyle.title}
`;
export const DataCenterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
export const InputBox = styled.div`
	width: 100%;
	display: flex;
	align-items: end;
	flex-wrap: wrap;
	gap: 12px;
`;
export const Empyt = styled.div`
	width: 100%;
	padding: 12px 0;
	text-align: center;
	font-size: 0.8rem;
`;
