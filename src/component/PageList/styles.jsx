import styled from "styled-components";

const props = {
	textPageTitle: `
  width: 100%;
  font-family: Arial;
  font-size: 36px;
  color:#999;
  font-style: italic;
  padding: 0px 32px 8px 32px;
  `,

	headeTitle: `
  font-family: Courier New;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;  
  `,

	paragraphTextSize: `
  font-family: 'Courier New';
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  padding: 0 4px;
  `,

	errorTextColor: "#f66"
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: #f5f3f0;
`;

export const PageHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
`;
export const PageTitle = styled.h1`
	${props.textPageTitle}
	padding-right: 32px;
`;
export const PageSubTitle = styled.div``;

export const CenterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #e5e5e5;
	padding: 0px 16px 12px 16px;
	gap: 16px;
	border: 1px solid #ccc;
	border-radius: 8px;
`;
export const FilterTitle = styled.div`
	${props.headeTitle}
	align-self: flex-end;
	padding-bottom: 4px;
`;
export const FilterInputBox = styled.div`
	display: flex;
	height: 100%;
	align-items: end;
	gap: 16px;
`;

export const ActionsContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #e5e5e5;
	padding: 12px 16px 12px 16px;
	gap: 16px;
	border: 1px solid #ccc;
	border-radius: 8px;
`;
export const ActionsTitle = styled.div`
	${props.headeTitle}
	align-self: center;
`;
export const ActionButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6px;
`;

export const ListUserContainer = styled.div`
	display: flex;
	width: 100%;
	align-self: start;
	flex-direction: column;
`;
export const ListUserHeaderBox = styled.div`
	height: 32px;
	display: flex;
	justify-content: start;
	gap: 2px;
	border: 1px solid transparent;
	margin-bottom: 2px;
`;
export const ListHeadText = styled.p`
	${({ w }) => `min-width:${w}px`};
	height: 32px;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #e5e5e5;
	${props.headeTitle}
`;
export const ListUserBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: start;
	margin-bottom: 1px;
	gap: 2px;
	cursor: pointer;
	margin: 0px 0px;
	border: 1px solid transparent;
	${(props) => props["data-selected"] && `border: 1px solid black;`}

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
