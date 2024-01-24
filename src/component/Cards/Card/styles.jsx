import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  position: relative;
  width: 256px;
  height: 160px;

  background: #dddddd;
  border: 1px solid #a9a9a9;
  box-shadow: 0px 1px 1px #767676, inset 1px 1px 2px #ffffff;
  border-radius: 2px;

  cursor: pointer;
  user-select: none;
  overflow: hidden;

  &:hover {
    border: 1px solid black;
  }
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
  font-weight: 500;
  font-size: 1.2rem;
`;
