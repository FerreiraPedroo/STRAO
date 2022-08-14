import styled from "styled-components";

const props = {
  textFontFamily: "Arial",
  titleTextSize: "40px",
  titleTextColor: "#999",
  errorTextColor: "#f66",
  textSize: "",
};

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: start;
  align-content: start;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PageTitle = styled.h1`
  font-family: ${props.textFontFamily};
  font-size: ${props.titleTextSize};
  color: ${props.titleTextColor};

  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;
  margin-bottom: 16px;
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
padding: 12px;
gap: 8px;
`;
export const ListHeadText = styled.p`
  text-align: center;

  &:nth-child(1){
    min-width: 380px;
    text-align: start;
  }
  &:nth-child(2){
    min-width: 200px;
  }
  &:nth-child(3){
    min-width: 256px;
    text-align: center;
  }
`;
export const UserBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #bbb;
  align-items: center;
  padding: 12px;
  margin-bottom: 4px;
  gap: 8px;

  &:hover{
    border: 1px solid #777; 
  }
`;
export const UserName = styled.p`
  min-width: 380px;
`;
export const UserBirthDate = styled.p`
  min-width: 200px;
  text-align: center;
`;
export const UserEmail = styled.p`
  min-width: 256px;
  text-align: center;
`;
