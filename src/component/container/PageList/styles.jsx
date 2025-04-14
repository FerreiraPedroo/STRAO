import styled from "styled-components";
import { BlockStyle } from "styles/component/container/blockContainer";

export const ComponentContainer = styled.div`
	${BlockStyle.container}
	height: 100%;
	overflow: auto;
	padding: 0;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: darkgray;
		border-radius: 6px;
	}

	&::-webkit-scrollbar-thumb:active {
		background-color: #333;
	}
	`;

export const RowListContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	background-color: #fff;
	padding: 16px 20px;
	border-radius: 12px;
`;
export const RowHeaderBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: start;
`;

export const RowHeadText = styled.p`
	${({ width }) => width && `width:${width}px`};
	${({ minWidth }) => minWidth && `min-width:${minWidth}px`};
	${({ maxWidth }) => maxWidth && `max-width:${maxWidth}px`};
	${({ align }) => (align ? `justify-content:${align};` : `justify-content: start;`)};
	/* height: 28px; */

	display: flex;
	align-items: center;
	flex-grow: 1;

	font-size: 1rem;
	font-style: italic;
	font-weight: 600;

	padding: 6px 8px;
`;

export const RowBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	border-collapse: collapse;

	margin: 0px;
	cursor: pointer;

	border-top: 1px solid #c0c0c0;
	&:last-child {
		border-bottom: 1px solid #c0c0c0;
	}
`;

export const RowText = styled.p`
	${({ width }) => width && `width:${width}px`};
	${({ minWidth }) => minWidth && `min-width:${minWidth}px`};
	${({ maxWidth }) => maxWidth && `max-width:${maxWidth}px`};
	${({ align }) => (align ? `text-align:${align}` : `text-align: start;`)};
	${({ color }) => (color ? `color:${color}` : "#767676")};
	${({ overflow }) =>
		overflow === "yes"
			? "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
			: `white-space: wrap; word-wrap:break-word; `};

	font-size: 0.9rem;
	padding: 12px 6px;

	flex-grow: 1;

	${(props) =>
		props["data-hover"] &&
		!props["data-selected"] &&
		`
		background: #DCDCDC;
	`}

	${(props) =>
		props["data-selected"] &&
		`
		background-color: #808080;
		color: #fff;
		font-weight: 500;
	`}
	
	${(props) =>
		props["data-hover"] &&
		props["data-selected"] &&
		`
		background: #a0a0a0;
	`}
`;

export const LoadingBox = styled.p`
	width: 100%;
	text-align: center;
	padding: 16px;
`;
