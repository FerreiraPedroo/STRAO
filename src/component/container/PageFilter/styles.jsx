import styled from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	background-color: #e5e5e5;
	padding: 6px 12px 4px 12px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;	
	gap: 6px;
`;
export const FilterTitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const FilterTitle = styled.div`
	align-self: center;
	font-style: italic;
	font-size: 1rem;
	font-weight: 600;
	color: #565656;
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
