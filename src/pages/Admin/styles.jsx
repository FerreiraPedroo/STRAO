import styled from 'styled-components'

const props = {
  'textSize': '',
  'bgColor': '',
}

export const Container = styled.div`
  width: 100%;
  padding: 16px 16px;
  display: flex;
  justify-content: start;
  align-content: start;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Card = styled.div`
  min-width: 256px;
  width: 256px;
  height: 192px;
  border-radius: 4px;
  box-shadow: 4px 4px 0px rgba(0,0,0,0.2);
  background-color: #F5F5F5;
  border: 1px solid #A9A9A9;
  padding: 6px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;

  &:hover{
    border: 1px solid black;
  }
`;

export const Box = styled.div`
display: flex;
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
  border: 1px solid #A9A9A9;
`;

export const CategoryName = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${props.cardCategoryNameTextSize};
`;