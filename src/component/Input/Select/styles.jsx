import styled from "styled-components";

export const Container = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const TitleText = styled.p`
  height: 14px;
  font-family: Courier New;
  position: relative;
  top: 2px;
  font-size: 12px;
`;

export const Select = styled.select`
  width: 256px;
  height: 32px;
  padding: 4px;
  background: #ffffff;
  border: 0.5px solid #a1a1a1;
  box-shadow: inset 1px 1px 1px #969696, inset -1px -1px 1px #969696;
  border-radius: 2px;
  outline: 0;

  &:disabled {
    border: 0.5px solid #c9c9c9;
    background: #e0e0e0;
    color: #b6b6b6;
  }
`;
