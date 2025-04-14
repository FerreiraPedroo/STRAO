import styled from "styled-components";
import { InputStyles } from "styles/inputs/InputStyles";

export const Container = styled.div`
	${InputStyles.container}
	${({ width }) => width && `max-width:${width};`}
`;

export const TitleBox = styled.div`
	${InputStyles.textBox}
`;

export const TitleText = styled.p`
	${InputStyles.text};
	/* ${({ disabled }) => disabled && "color: #36393D;"} */
`;

export const ErrorMsg = styled.p`
	${InputStyles.errorMessage}

	&:hover:after {
		content: ${({ errorMsg }) => errorMsg && `"${errorMsg}"`};
	}
`;

export const Input = styled.input`
	${InputStyles.input};

	&::placeholder {
		color: #c9c9c9;
	}

	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #46494d;
	}

	&:read-only {
		cursor: default;
	}

`;
