import styled from "styled-components";

const props = {
	headeTitle: `
		font-size: 1.2rem;
		font-style: italic;
		font-weight: 600;  
	`
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: #e5e5e5;
	padding:12px;
	border-radius: 8px;
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
	height: 32px;
	display: flex;
	justify-content: start;
	box-sizing: content-box;
	margin-bottom: 0px;
`;
export const ListHeadText = styled.p`
	${({ w }) => `min-width:${w}px`};
	height: 32px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	background-color: #E5E5E5;
	color: #767676;
	border-top: 1px solid #C0C0C0;
	border-bottom: 1px solid #C0C0C0;
	${props.headeTitle}
	
	&:first-child{
		justify-content: center;
		border-left: 1px solid #C0C0C0;
	}

	&:last-child{
		border-right: 1px solid #C0C0C0;
	}

`;

export const ListUserBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	margin-bottom: 1px;
	cursor: pointer;
	margin: 0px;
	border-top: 1px solid #C0C0C0;
	border-left: 1px solid #C0C0C0;
	border-right: 1px solid #C0C0C0;
	
	&:last-child{
		border-bottom: 1px solid #C0C0C0;		
	}
`;
export const UserText = styled.div`
	${({ w }) => `min-width:${w}px`};
	${({ color }) => (color ? `color:${color}` : "#767676")};
	padding: 8px 10px;
	background: #F8F8F8;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	z-index: 1;

	${(props) => props["data-hover"] && !props["data-selected"] && `
		font-weight: 500;
		background: #DCDCDC;
		z-index: 2;
	`}

	${(props) => props["data-selected"] && `
		background-color: #808080;
		color: #fff;
		font-weight: 500;
	`}
`;
