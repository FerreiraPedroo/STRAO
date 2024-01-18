import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
 	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;
	padding: 12px 16px;
	gap: 8px;
`;

export const StockName = styled.div`
	width: 100%;
	font-size: 1.5rem;
	font-weight: 700;
	color: #333;
	background-color: #e5e5e5;
	padding: 8px 16px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);	
`;
