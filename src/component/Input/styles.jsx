import styled from "styled-components";

export const Container = styled.div``;
export const TitleText = styled.p`
  height: 14px;
  font-family: Courier New;
  position: relative;
  top: 2px;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 256px;
  height: 32px;
  padding: 8px;
  background: #FFFFFF;
  border: 0.5px solid #a1a1a1;
  box-shadow: inset 1px 1px 1px #969696, inset -1px -1px 1px #969696;
  border-radius: 2px;
  outline: 0;

  &:disabled{
    border: 0.5px solid #C9C9C9;
    background: #E0E0E0;
    color: #B6B6B6;
  }
`;
