import styled from "styled-components";

const props = {
  textSize: "",
  bgColor: "",
};

export const Container = styled.div`
  width: 100%;
  padding: 16px 16px;
  display: flex;
  justify-content: start;
  align-content: start;
  flex-wrap: wrap;
  gap: 16px;
  background-color: #f5f3f0;
`;

export const NoAction = styled.div`
	width: 100%;
	text-align: center;
`;