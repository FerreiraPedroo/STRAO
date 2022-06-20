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
export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
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
export const FindEmployeeList = styled.div`
  width: 100%; 
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:hover{
    cursor: pointer;
  }
  gap: 8px;
  border: 1px solid #C0C0C0;
`;
export const EmployeePhoto = styled.img`
  min-width: 40px;
  height: 40px;
  margin-right: 8px;
  border-right: 1px solid #c0c0c0;
`;
export const EmployeeName = styled.p`
  width: 100%;
  font-size: 1.10rem;
  margin-right: 8px;
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
export const EmployeeStatus = styled.p`
  min-width: 128px;
  text-align: center;
  font-weight: bold;
  font-size: 1.30rem;
  margin-right: 8px;

  ${({status}) =>
    status === "Enviado" && "color: #33f; background-color: #ccf; border: 1px solid #66f;"
  }
  ${({status}) =>
    status === "Pendente" && "color: tomato; background-color: #fcc; border: 1px solid #f99;"
  }

`;
