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
  justify-content: center;
  font-family: Verdana;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 12px;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
  gap: 16px;
`;
export const InputBox = styled.div`
  min-width: 256px;  
  width: ${({ w }) => w ? w : '320px'};
`;
export const FindText = styled.p`
`;
export const FindSelect = styled.select`
  width: 100%;
  height: 32px;
  padding: 4px;
  border: 1px solid #C0C0C0;
  outline: 0;
`;
export const FindBoxFind = styled.div`
  display: flex;
`;
export const FindOption = styled.option``;
export const FindIcon = styled.input`
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
      background-color: #C0C0C0;
      `
  }
`;
export const FindEmployeeSelect = styled.select`
  width: 100%;
  height: 32px;
  padding: 4px;
  border: 1px solid #C0C0C0;
  outline: 0;
`;
export const FindEmployeeOption = styled.option``;



export const SheetHead = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 8px;
  margin-bottom: 12px;
`;
export const SheetHeadText = styled.div`
  width: 45%;
  text-align: center;
  &:nth-child(1){
    width: 15%;
    min-width: 96px; 
  }
  &:nth-child(2){
    text-align: start;
    padding-left: 12px;
    min-width: 128px;
  }
  &:nth-child(3){
    width: 30%;
    text-align: start;
    min-width: 128px; 
  }
  &:nth-child(4){
    width: 10%;
    min-width: 96px;
  }
`;


export const FindEmployeeList = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  gap: 8px;
  border: 1px solid #c0c0c0;
`;
export const EmployeeRegister = styled.div`
  width: 15%;
  min-width: 96px; 
  display:flex;
  justify-content: center;
  place-items: center;
`;
export const EmployeeName = styled.p`
  width: 45%;
`;
export const EmployeeAction = styled.div`
  min-width: 128px; 
  width: 30%;
  display: flex;
  gap: 6px;
`;
export const EmployeeStatus = styled.p`
  min-width: 96px;  
  width: 10%;
  border: 1px solid #c0c0c0;
  text-align: center;
  font-weight: bold;
  font-size: 1.30rem;

  ${({ status }) =>
    status === "Enviado" && "color: #33f; background-color: #ccf; border: 1px solid #66f;"
  }
  ${({ status }) =>
    status === "Pendente" && "color: tomato; background-color: #fcc; border: 1px solid #f99;"
  }

`;

export const EmployeeButton = styled.button`
  height: 24px;
  font-size: 14px;
  padding: 0 8px;

  background-color: #DCDCDC;
  border: 1px solid #444;
  cursor: pointer;

    &:active not(: disabled) {
    border: 1px solid #C0C0C0;
    transform: scale(0.98);
  }

  background-color: #DCDCDC;
  border: 1px solid #A9A9A9;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.4);
`;




