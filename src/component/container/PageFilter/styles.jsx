import styled from "styled-components";
import { PageStyle } from "styles/container";

export const FilterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;

	${({ theme }) => PageStyle.container(theme)};
`;
export const FilterTitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const FilterTitle = styled.div`
	${({ theme }) => PageStyle.containerTitle(theme)};
`;

export const FilterOpenButton = styled.div`
	font-style: italic;
	line-height: 0px;

	&:hover {
		cursor: pointer;
	}
`;
export const FilterInputBox = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0 12px;
`;
