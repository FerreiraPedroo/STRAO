import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;
	gap: 10px;

	position: relative;
	width: 256px;
	height: 130px;

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
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 8px;
`;

export const Img = styled.img`
	min-width: 3.5rem;
	min-height: 3.5rem;
	width: 3.5rem;
	height: 3.5rem;
`;

export const Name = styled.p`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: start;
	font-weight: 500;
	font-size: 0.9rem;
`;

export const Description = styled(Name)`
	-webkit-line-clamp: 3;
	font-size: 0.7rem;
`;
