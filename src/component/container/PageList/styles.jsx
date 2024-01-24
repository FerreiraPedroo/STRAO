import styled from "styled-components";

const props = {
	headeTitle: `
		font-size: 0.9rem;
		font-style: italic;
		font-weight: 600;  
	`
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;
	background-color: #e5e5e5;
	padding: 12px;
	padding-bottom: 64px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const CenterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ListUserContainer = styled.div`
	display: flex;
	width: 100%;
	align-self: start;
	flex-direction: column;
	padding: 8px 0;
`;
export const ListUserHeaderBox = styled.div`
	width: 100%;
	height: 28px;
	display: flex;
	justify-content: start;
	box-sizing: content-box;
	margin-bottom: 0px;
`;
export const ListHeadText = styled.p`
	${({ width }) => width && `width:${width}px`};
	${({ minWidth }) => minWidth && `min-width:${minWidth}px`};
	${({ maxWidth }) => maxWidth && `max-width:${maxWidth}px`};
	${({ align }) => (align ? `text-align:${align}` : `text-align: start;`)};
	height: 28px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	background-color: #e5e5e5;
	color: #767676;
	border-top: 1px solid #c0c0c0;
	border-bottom: 1px solid #c0c0c0;
	flex-grow: 1;

	${props.headeTitle}

	&:first-child {
		justify-content: center;
		border-left: 1px solid #c0c0c0;
	}

	&:last-child {
		border-right: 1px solid #c0c0c0;
	}
`;

export const ListUserBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	cursor: pointer;
	margin: 0px;
	border-top: 1px solid #c0c0c0;
	border-left: 1px solid #c0c0c0;
	border-right: 1px solid #c0c0c0;
	border-collapse: collapse;

	&:last-child {
		border-bottom: 1px solid #c0c0c0;
	}
`;
export const UserText = styled.p`
	${({ width }) => width && `width:${width}px`};
	${({ minWidth }) => minWidth && `min-width:${minWidth}px`};
	${({ maxWidth }) => maxWidth && `max-width:${maxWidth}px`};
	${({ align }) => (align ? `text-align:${align}` : `text-align: start;`)};
	${({ color }) => (color ? `color:${color}` : "#767676")};
	${({ overflow }) =>
		overflow === "yes"
			? "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
			: `white-space: wrap; word-wrap:break-word; `};

	font-size: 0.8rem;
	padding: 4px 10px;
	background: #f8f8f8;
	z-index: 1;
	flex-grow: 1;

	${(props) =>
		props["data-hover"] &&
		!props["data-selected"] &&
		`
		font-weight: 500;
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
`;
