import styled from "styled-components";
import { pageListStyle } from "styles/component/container/pageList";


export const RowListContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;
export const RowHeaderBox = styled.div`
	width: 100%;
	height: 28px;
	display: flex;
	justify-content: start;
`;

export const RowHeadText = styled.p`
	${({ width }) => width && `width:${width}px`};
	${({ minWidth }) => minWidth && `min-width:${minWidth}px`};
	${({ maxWidth }) => maxWidth && `max-width:${maxWidth}px`};
	${({ align }) => (align ? `justify-content:${align};` : `justify-content: start;`)};
	height: 28px;

	display: flex;
	align-items: center;
	flex-grow: 1;

	font-size: 1rem;
	font-style: italic;
	font-weight: 600;

	padding: 0 8px;

	${pageListStyle.rowHeaderBox}
`;

export const RowBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	border-collapse: collapse;

	margin: 0px;
	cursor: pointer;

	${pageListStyle.rowBox}
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
	padding: 4px 6px;
	background: #f8f8f8;
	z-index: 1;
	flex-grow: 1;

	${(props) =>
		props["data-hover"] &&
		!props["data-selected"] &&
		`
		background: #DCDCDC;
		z-index: 2;
	`}

	${(props) =>
		props["data-selected"] &&
		`
		background-color: #808080;
		color: #fff;
		font-weight: 500;
	`}
`;

export const LoadingBox = styled.p`
	width: 100%;
	text-align: center;
	padding: 16px;
`;
