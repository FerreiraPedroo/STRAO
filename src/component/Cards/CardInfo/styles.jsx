import styled from "styled-components";
import { CardStyle } from "styles/cards";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;
	gap: 10px;

	position: relative;
	width: 100%;
	height: auto;

	border-radius: 2px;

	cursor: pointer;
	user-select: none;
	overflow: hidden;

	&:hover {
		border: 1px solid #4E5F8F;
	}

	${({theme}) => CardStyle.container(theme)}
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
`;

export const Img = styled.img`
	min-width: 4rem;
	min-height: 4rem;
	width: 4rem;
	height: 4rem;
	border: 1px solid #FFF;
`;

export const TextBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const NameTitle = styled.span`
	width: 100%;

	font-size: 0.9rem;
	font-weight: 500;
`;

export const NameText = styled.span`
	text-align: start;
	font-weight: 500;
	color: #333;
	font-size: 0.9rem;
`;

export const Description = styled.span`
	text-align: justify;
	font-size: 1rem;
`;
