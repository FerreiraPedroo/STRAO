import styled from "styled-components";
import { ButtonIconTheme } from "../../styles";

export const ButtonIcon = styled.button`
	min-width: ${({ width }) => `${width}px`};
	min-height: ${({ height }) => `${height}px`};

	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};

	position: relative;
	top: -1px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	cursor: pointer;
	user-select: none;
	box-shadow: 2px 2px 0px #000000;

	&:hover:not(:active):not(:disabled) {
		box-shadow: 0px 0px 0px #000000;
		top: 2px;
		left: 2px;
	}

	&:active:not(:disabled) {
		box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.25);
		top: 2px;
		left: 2px;
	}

	${({ typeStyle }) => typeStyle && ButtonIconTheme[typeStyle]}
`;
