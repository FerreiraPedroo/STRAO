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

  errorTextColor: "#f66",
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

export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 16px;
`;
export const PageTitle = styled.h1`
  ${props.textPageTitle}
  padding-right: 32px;
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FilterContainer = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  padding: 8px 16px 16px 16px;
  margin
`;
export const FilterTitle = styled.p`
  width: 100%;
  ${props.headeTitle}
`;
export const FilterInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 16px;
`;

export const ListUserBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ListUserHeader = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid transparent;
  margin-bottom: 2px;
`;
export const ListHeadText = styled.p`
  ${({ w }) => (w ? `min-width:${w}` : "width:100%;")};
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e5e5;
  ${props.headeTitle}
`;
export const UserBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1px;
  gap: 2px;
  cursor: pointer;
  margin: 0px 0px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #777;
  }
`;
export const UserText = styled.p`
  ${({ w }) => (w ? `min-width:${w}` : "width:100%;")};
  ${({ color }) => (color ? `color:${color}` : "")};
  height: 36px;
  background: #dddddd;
  border: 1px solid #dddddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props.paragraphTextSize}
`;
