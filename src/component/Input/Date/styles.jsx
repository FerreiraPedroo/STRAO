import styled from "styled-components";

export const Container = styled.div`
	height: 46px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
export const TitleText = styled.p`
	height: 14px;
	position: relative;
	top: -1px;
	left: 2px;
	font-size: 14px;
	${({ disabled }) => disabled && "color: #b6b6b6;"}
`;
export const Input = styled.input`
	width: 256px;
	height: 32px;
	padding: 0px 8px 2px 8px;
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

export const ErrorMsg = styled.div`
    width: 100%;
    height: 12px;
    font-size: 0.8rem;
    border:1 px solid red;
`;