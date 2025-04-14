import styled from "styled-components";
import { PageFiltersStyle } from "styles/component/container/pageFilters";
import { PageStyle } from "styles/container";

export const Container = styled.div`
	${PageFiltersStyle.container};
	width: 100%;
`;

export const TitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.div`
	${PageFiltersStyle.title};
`;

export const OpenButton = styled.div`
	font-style: italic;
	line-height: 0px;

	&:hover {
		cursor: pointer;
	}
`;

export const InputBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: end;
	gap: 8px 12px;
`;
