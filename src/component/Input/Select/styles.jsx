import styled from "styled-components";
import { InputSelectStyle } from "styles/inputs/inputSelect";

export const Container = styled.div`
	${({ width }) => width && `max-width:${width};`}
	width: 100%;
	min-width: 128px;
	height: 58px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
export const TitleText = styled.p`
	height: 16px;

	position: relative;
	top: -2px;
	left: 1px;

	font-weight: 500;
	font-size: 0.9rem;

	${InputSelectStyle.text}

	${({ disabled }) => disabled && "color: #36393D;"}
`;
export const Select = styled.select`
	min-width: 160px;
	min-height: 30px;

	&::placeholder {
		color: #c9c9c9;
	}

	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #101010;
	}

	${InputSelectStyle.input}
`;
export const Option = styled.option`
	${InputSelectStyle.input}
`;
export const OptionGroup = styled.optgroup`
	color: #36393d;
	font-weight: 500;
	font-size: 1rem;
`;

export const ErrorMsg = styled.p`
	min-height: 14px;
	font-size: 0.7rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: darkred;
	padding-right: 2px;
	text-shadow: 0 0 2px lightcoral;
	text-align: right;
`;
