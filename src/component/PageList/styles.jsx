import styled from "styled-components";

const props = {
	headeTitle: `
  font-size: 20px;
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
	gap: 2px;
	box-sizing: content-box;
	border: 1px solid #ccc;
	margin-bottom: 2px;
`;
export const ListHeadText = styled.p`
	${({ w }) => `min-width:${w}px`};
	height: 32px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #e5e5e5;
	${props.headeTitle}
`;
export const ListUserBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	margin-bottom: 1px;
	gap: 2px;
	cursor: pointer;
	margin: 0px;
	border: 1px solid transparent;
	${(props) => props["data-selected"] && `border: 1px solid #444;`}

	&:hover {
		${(props) => !props["data-selected"] && `border: 1px solid #bbb;`}
	}
`;
export const UserText = styled.div`
	${({ w }) => `min-width:${w}px`};
	${({ color }) => (color ? `color:${color}` : "")};
	padding: 4px 10px;
	background: #dddddd;
	border: 1px solid #dddddd;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
