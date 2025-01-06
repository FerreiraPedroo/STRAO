import styled from "styled-components";
import { PageStyle } from "styles/container";

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

export const StockContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	font-weight: 600;
	${({theme}) => theme && PageStyle.container(theme)}
	gap: 32px;
`;

export const StockBox = styled.div`
`;

export const StockTitle = styled.div`
	font-weight: 500;
	font-size: 0.8rem;
`;

export const StockName = styled.div`
	font-size: 1.2rem;
`;
