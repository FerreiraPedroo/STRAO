import styled from "styled-components";

const props = {
	headeTitle: `
	font-style: italic;
	font-size: 1.2rem;
  	font-weight: 600;
	color: #565656;  
  `
};

export const CenterContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
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
export const HeaderTitle = styled.p`
	${props.headeTitle}
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

export const InputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

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

export const DepartmentSectorsBox = styled.div`
	width: 100%;
	display: flex;
	align-items: start;
	gap: 16px;
`;
export const SectorHead = styled.div`
	width: 100%;
	display: flex;
	font-size: 0.8rem;
	padding: 4px 0;
	align-items: center;
	border-bottom: 1px solid #c6c6c6;
`;
export const SectorAdded = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;
`;
export const SectorNotAdded = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;
`;
export const Sector = styled.div`
	width: 100%;
	display: flex;
	font-size: 0.8rem;
	padding: 6px 6px 6px 6px;
	align-items: center;
	background-color: white;
	border-radius: 4px;
`;
export const SectorName = styled.div`
	width: 100%;
	display: flex;
	font-size: 0.8rem;
`;
export const Empyt = styled.div`
	width: 100%;
	padding: 12px 0;
	text-align: center;
	font-size: 0.8rem;
`;
