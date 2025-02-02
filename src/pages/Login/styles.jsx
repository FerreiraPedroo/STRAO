import styled from "styled-components";

import homebg from "./img/home-bg.png";

export const LoginContainer = styled.div`
  position: relative;
  top: 50%;
  width: 100%;
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 10px;
`;
export const Text = styled.div`
  height: 36px;
  font-size: ${({ size }) => size && `${size}rem;`};
  padding: 4px;
  overflow-wrap: break-word;
`;
export const InputBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
export const UserInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 4px;
  font-size: 1.25rem;
  border: 1px solid silver;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
export const PasswordInput = styled.input`
  width: 250px;
  height: 36px;
  padding: 4px;
  font-size: 1.25rem;
  border: 1px solid silver;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
export const ButtonBox = styled.div``;
export const Button = styled.input`
  width: 42px;
  height: 60px;
  margin-left: 30px;
`;
