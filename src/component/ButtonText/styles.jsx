import styled from "styled-components";
import { ButtonTextTheme } from "styles/buttons";

const Theme = {
	normal: {
		backgroundColor: "#4e5f8f",
		borderColor: "transparent",
		borderColorDisabled: "red",
		borderColorHover: "transparent",
		backgroundHoverColor: "#42517A"
	}
};

export const Button = styled.button`
	width: ${({ width }) => (width ? `${width}px` : "160px")};
	min-height: 32px;
	max-height: 32px;

	font-size: 0.9rem;
	font-weight: 400;
	text-align: center;
	color: #fff;

	padding: 0 8px;
	border-radius: 4px;

	overflow: hidden;
	text-overflow: ellipsis;
	outline: 0;

	cursor: pointer;

	border: 1px solid ${({ theme }) => (Theme[theme] ? `${Theme[theme].borderColor}` : "#555")};

	background-color: ${({ theme }) =>
		Theme[theme] ? `${Theme[theme].backgroundColor}` : "#dcdcdc"};

	&:active :not(:disabled) {
		border: 1px solid
			${({ disabled, theme }) =>
				Theme[theme] && disabled ? `${Theme[theme].borderColorDisabled}` : "silver"};
	}

	&:hover {
		border-color: ${({ theme }) => (Theme[theme] ? `${Theme[theme].borderColorHover}` : "#000")};
		background-color: ${({ theme }) =>
			Theme[theme] ? `${Theme[theme].backgroundHoverColor}` : "#bbb"};
	}

	&:active {
		border-color: ${({ theme }) => (Theme[theme] ? `${Theme[theme].borderColorActive};` : "#000")};
		background-color: ${({ theme }) =>
			Theme[theme] ? `${Theme[theme].backgroundColorActive};` : "#999"};
	}
`;

export const ButtonBack = styled.input`
	position: relative;
	min-width: ${({ width }) => (width ? `${width}px` : "32px")};
	height: ${({ height }) => (height ? `${height}px` : "32px")};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	font-weight: 500;

	border-radius: 6px;
	
	cursor: pointer;
	user-select: none;

	&:hover {
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
		top: 2px;
		left: 2px;
	}

	${({ theme }) => ButtonTextTheme[theme]};
`;
