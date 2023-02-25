import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
  height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;
	padding: 16px 32px;
	gap: 32px;
`;

export const FindEmployeeList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`;
export const EmployeePhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
export const EmployeeName = styled.p`
  font-size: 1.1rem;
  margin-right: 8px;
`;
export const EmployeeStatus = styled.p`
  font-size: 1.1rem;
  margin-right: 16px;
`;

