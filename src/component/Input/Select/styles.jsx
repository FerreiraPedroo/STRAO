import styled from "styled-components";
import { InputStyles } from "styles/inputs/InputStyles";

export const Container = styled.div`
	${InputStyles.container}
	${({ width }) => width && `max-width:${width};`}
`;

export const TitleText = styled.p`
	${InputStyles.text}
	/* ${({ disabled }) => disabled && "color: #36393D;"} */
`;

export const Select = styled.select`
	${InputStyles.input}

	&::placeholder {
		color: #c9c9c9;
	}

	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #46494d;
	}
`;

export const Option = styled.option`
	${InputStyles.input}
`;

export const OptionGroup = styled.optgroup`
	color: #36393d;
	font-weight: 500;
	font-size: 1rem;
`;

export const ErrorMsg = styled.p`
	${InputStyles.errorMessage}
`;
