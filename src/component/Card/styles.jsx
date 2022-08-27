import styled from "styled-components";

const props = {
  cardCategoryNameTextSize: "16px",
};

export const Container = styled.div`
  /* Auto layout */

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
  width: 64px;
  height: 64px;
`;

export const CategoryNotification = styled.p`
  width: 48px;
  height: 24px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: ${props.cardCategoryNameTextSize};
  margin-right: 16px;
  border: 1px solid #a9a9a9;
`;

export const CategoryName = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${props.cardCategoryNameTextSize};
`;
