import styled from "styled-components";

const props = {
  navMenuButtonTextSize: "16px",
  navMenuButtonSizeWidth: "100px",
  navMenuButtonSizeHeight: "96px",
  navMenuButtonBackColor: "#C0C0C0",

  navMenuContainerBackColor: "	#D3D3D3",
};

export const Container = styled.div`
  width: 164px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 8px 16px;
  border-right: 1px solid #c4c6c9;
  background-color: ${props.navMenuContainerBackColor};
`;

export const DepartmentTitle = styled.div`
  font-size: 2rem;
  width: 100%;
  border: 2px solid red;
`;