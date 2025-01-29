import styled from "styled-components";

export const Button = styled.button`
	position: relative;
	min-width: ${({ width }) => (width ? `${width}px` : "32px")};
	height: ${({ height }) => (height ? `${height}px` : "32px")};

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: 500;
	padding: 8px;

	border-radius: 6px;

	cursor: pointer;
	user-select: none;

	&:hover {
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
		top: 2px;
		left: 2px;
	}

	&:hover:not(:active):not(:disabled) {
		box-shadow: 0px 0px 0px #000000;
		top: 2px;
		left: 2px;
	}

	&:active {
		border: 2px solid red inset;
	}

	&:active:not(:disabled) {
		box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.25);
		top: 2px;
		left: 2px;
	}

	color: #4e5f8f;
	border: 1px solid #4e5f8f;
	box-shadow: 2px 2px 0px rgba(78, 95, 143, 0.9);
	background-color: #fff;
`;
