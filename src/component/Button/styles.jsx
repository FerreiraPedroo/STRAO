import styled from "styled-components";
import { Theme } from "../../theme";

export const Button = styled.button`
	width: ${({ width }) => (width ? `${width}px` : "160px")};
	min-height: 32px;
	max-height: 32px;
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	border-radius: 6px;
	background-color: ${({ theme }) =>
		Theme[theme] ? `${Theme[theme].buttonBgColor}` : "#dcdcdc"};
	border: 1px solid #555;
	cursor: pointer;
    outline: 0;

	${({ theme }) =>
		Theme[theme]
			? `border: 1px solid ${Theme[theme].buttonBorderColor}`
			 : "#555"};

	&:active not(:disabled) {
		border: 1px solid
			${({ disable, theme }) =>
				Theme[theme] && disable
					? `${Theme[theme].buttonDisableBorderColor}`
					: "silver"};
		transform: scale(0.98);
	}

	&:hover {
		cursor: pointer;
		border-color: ${({ theme }) =>
			Theme[theme] ? `${Theme[theme].buttonHoverBorderColor}` : "#000"};
		background-color: ${({ theme }) =>
			Theme[theme] ? `${Theme[theme].buttonHoverBgColor}` : "#bbb"};
	}

	&:active {
		color: #555;
		border-color: ${({ theme }) =>
			Theme[theme] ? `${Theme[theme].buttonActiveBorderColor}` : "#000"};
		background-color: ${({ theme }) =>
			Theme[theme] ? `${Theme[theme].buttonActiveBgColor}` : "#999"};
	}
`;
export const ButtonBack = styled.button`
	min-width: ${({ width }) => (width ? `${width}px` : "32px")};
	height: ${({ height }) => (height ? `${height}px` : "32px")};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	font-weight: 500;

	cursor: pointer;
	color: white;
	background-color: #666;
	user-select: none;

	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	background-image: url("../../assets/icons/visualpharm-goback.svg");

	&:hover {
		transform: scale(0.95);
	}
`;

const propsTheme = {
	find: `
    background: #908E8E;
    border: 1px solid #C9C9C9;
    &:disabled{
        color: #D1D1D1;
        border: 2px solid #DEDEDE;
        background-color: #AFACAC;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    } 
  `,
	remove: `
    background: #DA532C;
    border: 1px solid #FA734C;
    &:disabled{
        color: #D1D1D1;
        border: 2px solid #CC826D;
        background-color: #BF6E56;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    } 

  `,
	edit: `
    background: #1E90FF;
    border: 1px solid #ADD8E6;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #A5C2CC;
        background-color: #81ADD8;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    } 
    `,
	hidden: `
    background: #1E90FF;
    border: 1px solid #ADD8E6;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #A5C2CC;
        background-color: #81ADD8;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    } 
    `,
	show: `
    background: #1E90FF;
    border: 1px solid #ADD8E6;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #A5C2CC;
        background-color: #81ADD8;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    } 
    `,
	document: `
    background: #1E90FF;
    border: 1px solid #ADD8E6;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #A5C2CC;
        background-color: #81ADD8;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    } 
    `,

	correct: `
    background: #00A300;
    border: 1px solid #20C320;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #6BA76B;
        background-color: #4E744E;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    }  
  `,
	add: `
    background: #00A300;
    border: 1px solid #20C320;
    &:disabled{
        color: #9F9F9F;
        border: 2px solid #6BA76B;
        background-color: #4E744E;
        box-shadow: 0px 0px 0px #000000;
    }
    &:hover:disabled{
        cursor: default;
    }  
  `,

	normal: `
    background: #908E8E;
    border: 1px solid #C9C9C9;
  `
};

export const Button40x32 = styled.button`
	width: ${({ width }) => (width ? `${width}px` : "40px")};
	height: ${({ height }) => (height ? `${height}px` : "32px")};
	position: relative;
	top: -1px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	cursor: pointer;
	user-select: none;
	box-shadow: 2px 2px 0px #000000;

	&:hover:not(:active):not(:disabled) {
		box-shadow: 0px 0px 0px #000000;
		top: 1px;
		left: 1px;
	}

	&:active:not(:disabled) {
		box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.25);
		top: 1px;
		left: 1px;
	}

	${({ typeStyle }) => typeStyle && propsTheme[typeStyle]}
`;
