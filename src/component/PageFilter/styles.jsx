import styled from "styled-components";

const props = {
	headeTitle: `
  font-size: 20px;
  font-style: italic;
  font-weight: bold;  
  `
};

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
	${props.headeTitle}
	align-self: center;
	padding-top: 6px;
	font-size: 1.4rem;
	font-weight: bolder;
	color: #565656;
`;
export const FilterInputBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	align-items: end;
	gap: 16px;
`;