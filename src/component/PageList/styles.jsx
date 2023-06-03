import styled from "styled-components";

const props = {
	headeTitle: `
		font-size: 1.3rem;
		font-style: italic;
		font-weight: bold;  
	`
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: #f5f3f0;
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
	height: 32px;
	display: flex;
	justify-content: start;
	box-sizing: content-box;
	margin-bottom: 3px;
`;
export const ListHeadText = styled.p`
	${({ w }) => `min-width:${w}px`};
	height: 32px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #E5E5E5;
	color: #767676;
	border-top: 1px solid #000000;
	border-bottom: 1px solid #000000;
	border-left: 1px solid #000000;
	${props.headeTitle}

	&:last-child{
		border-right: 1px solid #000000;
	}
`;

export const ListUserBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	margin-bottom: 1px;
	cursor: pointer;
	margin: 0px;
`;
export const UserText = styled.div`
	${({ w }) => `min-width:${w}px`};
	${({ color }) => (color ? `color:${color}` : "#767676")};
	padding: 4px 10px;
	margin-bottom: -1px;
	background: #F8F8F8;
	border-top: 1px solid #5A5A5A;
	border-bottom: 1px solid #5A5A5A;
	border-left: 1px solid #5A5A5A;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	z-index: 1;
	&:last-child{
		border-right: 1px solid #5A5A5A;
	}

	${(props) => props["data-hover"] && !props["data-selected"] && `
		font-weight: 700;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		border-left: 1px solid #000;
		&:last-child{
			border-right: 1px solid #000;
		}
		z-index: 2;
	`}

${(props) => props["data-selected"] && `
	background-color: #aaa;
	color: #fff;
	font-weight: 500;
	`}
`;
