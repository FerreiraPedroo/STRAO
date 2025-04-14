import styled from "styled-components";
import { InputStyles } from "styles/inputs/InputStyles";

export const Container = styled.div`
	${InputStyles.container}
	${({ width }) => width && `max-width:${width};`}
`;

export const TitleText = styled.p`
	${InputStyles.text}
	${({ disabled }) => disabled && "color: #36393D;"}
`;

export const TextArea = styled.textarea`
	${InputStyles.input}
 
	${({ width }) => width && `max-width:${width};`}
	${({ min }) => min && `min-width:${min};`}
	${({ max }) => max && `max-width:${max};`}
	${({ height }) => height && `height:${height};`}
	
	padding: 8px;

	&::placeholder {
		color: #c9c9c9;
	}
	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #46494D;
	}
`;

export const ErrorMsg = styled.p`
	${InputStyles.errorMessage}
`;
