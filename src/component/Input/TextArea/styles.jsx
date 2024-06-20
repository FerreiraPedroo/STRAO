import styled from "styled-components";
import { InputTheme } from "styles/input";

export const Container = styled.div`
	${({ width }) => width && `max-width:${width};`}
	width: 100%;
	min-width: 128px;
	min-height: 50px;
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
	font-size: 0.85rem;

	${({ theme }) => InputTheme.text(theme)}

	${({ disabled }) => disabled && "color: #b6b6b6;"}
`;
export const TextArea = styled.textarea`
	${({ theme }) => InputTheme.input(theme)}

	width: 100%;
	min-height: 28px;
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
		color: #b6b6b6;
	}
`;

export const ErrorMsg = styled.p`
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
