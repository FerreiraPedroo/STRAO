import styled from "styled-components";

const props = {
	navMenuButtonTextSize: "16px",
	navMenuButtonSizeWidth: "100px",
	navMenuButtonSizeHeight: "96px",
	navMenuButtonBackColor: "#C0C0C0",

	navMenuContainerBackColor: "	#D3D3D3"
};

export const Container = styled.div`
	width: 192px;
	height: calc(100vh - 40px);
	display: flex;
	flex-direction: column;
	place-items: center;
	padding: 8px 4px;
	border-right: 1px solid #c4c6c9;
	background-color: ${props.navMenuContainerBackColor};
  gap: 12px;
`;

export const DepartmentTitle = styled.div`
	width: 100%;
	font-size: 1.2rem;
	font-weight: bolder;
	text-align: center;
	line-height: 1.2rem;
	color: #333;
`;

export const MenuAction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MenuActionTilte = styled.p`
  font-size: 0.9rem;
`;
