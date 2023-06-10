import styled from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
    width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 4px 16px 12px 16px;
	gap: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;
export const FilterTitle = styled.div`
  	align-self: center;
  	font-style: italic;
  	font-size: 1.2rem;
	font-weight: 600;
  	color: #565656;
	padding-top: 10px;
`;
export const FilterInputBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	align-items: end;
	gap: 16px;
`;