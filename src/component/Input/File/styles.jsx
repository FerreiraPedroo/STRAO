import styled from "styled-components";
import { InputTextStyle } from "styles/inputs/inputText";

export const Container = styled.div`
	height: 58px;
	${({ width }) => width && `max-width:${width};`}
	min-width: 128px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
export const TitleText = styled.p`
	height: 16px;

	position: relative;
	top: -2px;
	left: 1px;

	font-weight: 500;
	font-size: 0.85rem;

	${InputTextStyle.text}

	${({ disabled }) => disabled && "color: #b6b6b6;"}
`;

export const Input = styled.input`
	min-width: 160px;
	min-height: 30px;

	&::placeholder {
		color: #c9c9c9;
	}

	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #b6b6b6;
	}

	${InputTextStyle.input}
`;

export const ErrorMsg = styled.div`
	min-height: 14px;
	font-size: 0.7rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: darkred;
	padding-right: 2px;
	text-shadow: 0 0 4px lightcoral;
	text-align: right;
`;
