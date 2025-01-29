import styled from "styled-components";
import { CardStyle } from "styles/cards";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  position: relative;
  width: 256px;
  height: 160px;

  cursor: pointer;
  user-select: none;
  overflow: hidden;

  &:hover {
    border: 1px solid transparent;
  }

  ${CardStyle.container};
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CategoryNotification = styled.p`
  width: 3rem;
  height: 1.5rem;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: 1rem;
  border: 1px solid #a9a9a9;
`;

export const CategoryName = styled.p`
  width: 100%;
  text-align: center;
  align-content: center;
  font-weight: 500;
  font-size: 1.2rem;
`;
