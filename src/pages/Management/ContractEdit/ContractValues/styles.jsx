import styled from "styled-components";

const props = {
	textFontFamily: "Arial",
	titleTextColor: "#999",
	errorTextColor: "#f66",
	successTextColor: "#6f6",
	bgColor: "",
	inputBgColorDisable: "#ddd",
	headerTitle: `
	font-style: italic;
	font-size: 1.2rem;
  	font-weight: 600;
	color: #565656;  
  `
};

export const InnerContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	/* align-items: center; */
	background-color: #e5e5e5;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	gap: 8px;
`;

export const HeaderInner = styled.div`
	width: 100%;
`;

export const HeaderInnerTitle = styled.p`
	${props.headerTitle}
`;

export const ButtonContainer = styled.div`
	${({ width }) => width && `width:${width};`}
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 8px;
`;

export const ActionText = styled.div`
	font-size: 0.9rem;
	font-weight: 500;
	white-space: wrap;
	text-align: start;
	line-height: 14px;
`;

export const ListContractValuesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 4px;
`;

export const ListContractValuesTitle = styled.div`
	padding: 0 0 4px 0;
	font-size: 0.9rem;
	font-weight: 600;
`;

export const ItemContractBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	border: 1px solid #bbb;
	border-radius: 6px;
	padding: 6px;
	gap: 4px;
`;

export const ItemName = styled.div`
	width: 100%;
	font-size: 0.8rem;
	font-weight: 700;

	& > span {
		font-size: 0.8rem;
		font-weight: 500;
	}
`;

export const ItemValueInputBox = styled.div`
	width: 100%;
`;

export const ItemValueButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 48px;
`;

export const ItemValue = styled.div`
	width: 100%;
	font-size: 0.8rem;
	font-weight: 700;
	word-break: break-all;

	& > span {
		font-size: 0.8rem;
		font-weight: 500;
	}
`;

export const ActionsContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 6px 12px 6px 12px;
	gap: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
`;
export const ActionsTitle = styled.div`
	align-self: center;
	font-style: italic;
	font-size: 1rem;
	font-weight: 600;
	color: #565656;
`;

export const ActionsBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	gap: 12px;
`;

export const CenterContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	gap: 8px;
`;
export const PrincipalData = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px 12px;
`;
export const HeaderCenter = styled.div`
	width: 100%;
`;
export const HeaderTitle = styled.p``;

export const DataBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #c6c6c6;
	border-radius: 4px;
	margin: 8px 0;
	padding: 8px;
	gap: 8px;
	box-shadow: 0px 0px 8px 2px #b8b8b8;
`;
export const DataTitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const DataTitle = styled.p`
	display: flex;
	font-size: 0.9rem;
	font-weight: 600;
	color: #565656;
`;

export const DataContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	background-color: #e5e5e5;
	padding: 8px 12px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	gap: 8px;
`;
export const DataHeadContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const DataCenterContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-top: 1px solid #767676;
	padding-top: 8px;
`;

export const EmptyText = styled.div`
	width: 100%;
	height: 100%;
	padding: 32px;
	text-align: center;
	font-size: 0.8rem;
	font-weight: 500;
	color: #aaa;
`;

export const Line = styled.hr`
	height: 3px;
	margin: 12px;
	background-image: linear-gradient(to right, transparent, #ccc, #bbb, #bbb, #ccc, transparent);
`;
