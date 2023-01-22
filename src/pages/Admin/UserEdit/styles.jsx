import styled from "styled-components";

const props = {
	headeTitle: `
  font-size: 20px;
  font-style: italic;
  font-weight: 700;  
  `
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: start;
	padding: 16px;
    padding-bottom: 64px;
	gap: 16px;
`;

export const CenterContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;

export const HeaderCenter = styled.div`
	width: 100%;
`;

export const HeaderTitle = styled.p`
	${props.headeTitle}
`;

export const PrincipalData = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px 12px;
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	gap: 32px;
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RightContainer = styled.div`
	display: flex;
    height: 100%;
	flex-direction: column;
`;

export const InputBox = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 12px;
`;

export const DepartmentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	gap: 32px;
`;

export const SubDepartmentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
    gap: 32px;
`;

export const SubDepartmentActionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	border-top: 1px solid #767676;
    padding-top: 16px;
    gap: 32px;
`;

export const DepartmentAction = styled.p`


`;
