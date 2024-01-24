import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;
	gap: 10px;

	position: relative;
	width: 100%;
	height: auto;

	background: #dddddd;
	border: 1px solid #a9a9a9;
	box-shadow: 0px 1px 1px #767676, inset 1px 1px 2px #ffffff;
	border-radius: 2px;

	cursor: pointer;
	user-select: none;
	overflow: hidden;

	&:hover {
		border: 1px solid black;
	}
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
`;

export const TextBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const NameTitle = styled.span`
	width: 100%;

	font-size: 1rem;
	font-weight: 700;
`;

export const NameText = styled.span`
	text-align: start;
	font-weight: 700;
	color: #333;
	font-size: 1rem;
`;

export const Description = styled.span`
	text-align: justify;
	font-size: 1rem;
`;
