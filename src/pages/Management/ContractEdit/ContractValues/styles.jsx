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
	gap: 2px;
`;

export const HeaderInner = styled.div`
	width: 100%;
	padding: 8px 0;
	margin-bottom: 8px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
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
	padding-bottom: 16px;
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
	padding: 12px;
`;

export const ItemValueInputBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const ItemName = styled.div`
	width: 100%;
	font-size: 0.8rem;
	font-weight: 300;

	& > span {
		font-size: 0.8rem;
		font-weight: 500;
	}
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
	font-weight: 300;
	text-align: justify;

	& > span {
		font-size: 0.8rem;
		font-weight: 500;
	}
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
	height: 2px;
	margin: 12px;
	background-image: linear-gradient(to right, transparent, #ccc, #bbb, #bbb, #ccc, transparent);
`;
