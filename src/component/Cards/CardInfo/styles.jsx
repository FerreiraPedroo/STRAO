import styled from "styled-components";


export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	padding: 12px 16px;
	border-radius: 4px;
	border: 1px solid #DEE2E6;
	background-color: #F5F5F5;

	cursor: pointer;
	user-select: none;

	&:hover {
		border: 1px solid #aaa;
	}

    color: #4E5F8F;	
`;

export const Box = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
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
`;

export const NameText = styled.span`
	text-align: start;
	color: #333;
	font-size: 0.9rem;
`;

export const Description = styled.span`
	text-align: justify;
	font-size: 0.9rem;
`;
