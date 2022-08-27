import styled from "styled-components";
import { Theme } from "../../theme";

export const Button = styled.input`
  width: ${({ width }) => (width ? `${width}px` : "160px")};
  height: 32px;
  font-size: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) =>
    Theme[theme] ? `${Theme[theme].buttonBgColor}` : "#dcdcdc"};
  border: 1px solid
    ${({ theme }) =>
      Theme[theme] ? `${Theme[theme].buttonBorderColor}` : "#555"};
  cursor: pointer;

  &:active not(:disabled) {
    border: 1px solid
      ${({ disable, theme }) =>
        Theme[theme] && disable
          ? `${Theme[theme].buttonDisableBorderColor}`
          : "silver"};
    transform: scale(0.98);
  }

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) =>
      Theme[theme] ? `${Theme[theme].buttonHoverBorderColor}` : "#000"};
    background-color: ${({ theme }) =>
      Theme[theme] ? `${Theme[theme].buttonHoverBgColor}` : "#bbb"};
  }

  &:active {
    color: #555;

    border-color: ${({ theme }) =>
      Theme[theme] ? `${Theme[theme].buttonActiveBorderColor}` : "#000"};
    background-color: ${({ theme }) =>
      Theme[theme] ? `${Theme[theme].buttonActiveBgColor}` : "#999"};
  }
`;
