import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  padding: 0 74px;
`;
export const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: Verdana;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 12px;
`;
export const FindEmployeeBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  gap: 16px;
`;
export const FindEmployeeInputBox = styled.div`
  min-width: 256px;  
  width: 320px;
`;
export const FindEmployeeBoxFind = styled.div`
  display: flex;
  width: 340px;
`;
export const FindEmployeeText = styled.p`
`;
export const FindEmployeeInput = styled.input`
  min-width: 256px;  
  width: 320px;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;
`;
export const FindEmployeeIcon = styled.input`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  ${({ disabled }) =>
      !disabled && `
      &:hover{
      transform: scale(1.1); 
      }`
  }

  ${({ disabled }) =>
      disabled && `
      cursor: load;
      background-color: silver;
      `
  }
`;
export const FindEmployeeSelect = styled.select`
  width: 100%;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;
`;
export const FindEmployeeOption = styled.option``;
export const FindEmployeeList = styled.div`
  width: 100%; 
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:hover{
    cursor: pointer;
  }
`;
export const EmployeePhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
export const EmployeeName = styled.p`
  font-size: 1.10rem;
  margin-right: 8px;
`;
export const EmployeeRegister = styled.p`
  font-size: 1.10rem;
  margin-right: 16px;
`;