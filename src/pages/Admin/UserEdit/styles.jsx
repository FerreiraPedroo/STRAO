import styled from "styled-components";

const props = {
	textPageTitle: `
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Arial;
  font-size: 36px;
  color:#999;
  font-style: italic;
  `,

	textPageSubTitle: `
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-weight: 600;
  font-size: 14px;
  color:#999;
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
  display: flex;
  align-items: center;
  text-align: center;
  `,

	errorTextColor: "#f66"
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	background-color: #ededed;
	padding: 16px;
	gap: 4px;
`;

export const PageHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
`;
export const PageTitleContainer = styled.div`
	width: 100%;
	padding-right: 32px;
`;
export const PageTitle = styled.h1`
	${props.textPageTitle}
	padding-right: 32px;
`;
export const PageSubTitle = styled.h2`
	${props.textPageSubTitle}
	padding-right: 32px;
	background-color: #e5e5e5;
`;
export const SubTitleStatus = styled.span`
	font-weight: bolder;
	padding: 0 6px;
	font-size: 18px;
	color: ${({ status }) => (status === "active" ? "#00A300;" : "#DA532C;")};
`;

export const CenterContainer = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #e5e5e5;
	padding: 16px;
	gap: 16px;
`;

export const HeaderCenter = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const HeaderTitle = styled.p`
	${props.headeTitle}
`;
export const RemoveTitle = styled.p`
	${props.headeTitle}
	padding: 0 12px;
`;
export const RemoveButtonBox = styled.div`
	display: flex;
	align-items: center;
`;

export const PrincipalData = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

export const CategoryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 2px solid #767676;
	border-radius: 3px;
	padding-bottom: 10px;
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
`;
export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
`;
export const InputBox = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 8px;
`;

export const DepartmentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 2px solid #767676;
	border-radius: 3px;
	gap: 16px;
`;
export const SubDepartmentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const SubDepartmentActionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	border-top: 1px solid #767676;
	padding-bottom: 10px;
`;
export const DepartmentAction = styled.p`
	padding-top: 8px;
	// margin-bottom: -8px;
`;
