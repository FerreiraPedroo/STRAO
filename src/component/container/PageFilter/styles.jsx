import styled from "styled-components";
import { PageStyle } from "styles/container";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${({ theme }) => PageStyle.container(theme)};
`;

export const TitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.div`
	${({ theme }) => PageStyle.containerTitle(theme)};
`;

export const OpenButton = styled.div`
	font-style: italic;
	line-height: 0px;

	&:hover {
		cursor: pointer;
	}
`;

export const InputBox = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0 12px;
`;
