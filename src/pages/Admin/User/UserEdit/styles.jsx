import styled from "styled-components";
import { BlockStyle } from "styles/component/container/blockContainer";
import { PageContainer } from "component/container/PageContainer/styles";

export const Container = styled(PageContainer)`
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: darkgray;
		border-radius: 6px;
	}
	&::-webkit-scrollbar-track {
		background-color: #ccc;
		border-radius: 6px;
	}
`;
export const DataContainer = styled.div`
	${BlockStyle.container}
`;
export const HeaderContainer = styled.div`
	width: 100%;
`;
export const HeaderTitle = styled.p`
	font-style: italic;
	font-size: 1.2rem;
	font-weight: 600;
	color: #565656;
	border-radius: 4px;
`;
export const DataCenterContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
`;

export const InputBox = styled.div`
	width: 100%;
	display: flex;
	align-items: end;
	gap: 12px;
`;

export const DataBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #b8b8b8;
	border-radius: 4px;
	margin: 8px 0;
	gap: 8px;
`;
export const DataTitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4px 14px 4px 8px;
	background-color: #ddd;
`;
export const DataTitle = styled.p`
	display: flex;
	font-size: 0.9rem;
	font-weight: 500;
	color: #565656;
`;

export const DepartmentSectorsBox = styled.div`
	width: 100%;
	display: flex;
	align-items: start;
	padding: 0 8px 8px 8px;
	gap: 16px;

	@media (max-width: 640px) {
		flex-direction: column;
	}
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
	gap: 10px;
`;
export const SectorNotAdded = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const Sector = styled.div`
	width: 100%;
	display: flex;
	font-size: 0.8rem;
	padding: 4px 6px 4px 6px;
	align-items: center;
`;
export const SectorName = styled.div`
	width: 100%;
	display: flex;
	font-size: 0.8rem;
`;
export const Empyt = styled.div`
	width: 100%;
	padding: 20px 0;
	text-align: center;
	font-size: 0.8rem;
`;
