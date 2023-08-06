import styled from "styled-components";

export const Container = styled.div`
	${({ width }) => width && `width:${width};`}
	min-width: 128px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
export const TitleText = styled.p`
	height: 12px;
	position: relative;
	color: #767676;
	font-weight: 500;
	top: -1px;
	left: 2px;
	font-size: 0.75rem;
	${({ disabled }) => disabled && "color: #b6b6b6;"}
`;
export const Input = styled.input`
	min-width: 160px;
	min-height: 28px;
	color: #565656;
	font-weight: 500;
	font-size: 0.75rem;
	padding: 4px 2px 2px 6px;
	background-color: #ffffff;
	border: 1px solid #808080;
	border-radius: 4px;
	outline: 0;

	&::placeholder {
		color: #c9c9c9;
	}

	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #b6b6b6;
	}
`;

export const ErrorMsg = styled.p` 
	min-height: 10px;
	font-size: 0.6rem;
	font-weight: bold;
	white-space: nowrap; 
	overflow: hidden;
	text-overflow: ellipsis;
	color: red;
`;
