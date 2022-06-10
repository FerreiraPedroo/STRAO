import styled from 'styled-components'

const color = {
  bgTitle: "silver"
}

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 12px;
  border: 1px solid silver;
  margin: 12px;
  padding-bottom: 32px;
`

export const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana;
  font-size: 2rem;
  color: rgba(0,0,0,0.7);
  background-color: ${color.bgTitle};

  border-radius: 10px 10px 0 0;
  margin-bottom: 12px;
`

export const FindEmployeeBox = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  gap: 16px;
`

export const FindEmployeeInputBox = styled.div`
min-width: 256px;  
width: 320px;
`
export const FindEmployeeBoxFind = styled.div`
display: flex;
width: 380px;

`
export const FindEmployeeText = styled.p`
// width: 100%;
`
export const FindEmployeeInput = styled.input`
  min-width: 256px;  
  width: 320px;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;
`
export const FindEmployeeIcon = styled.input`
width: 32px;
height: 32px;
margin-left: 8px;

&:hover{
  transform: scale(1.1); 
}
`
export const FindEmployeeSelect = styled.select`
width: 100%;
height: 32px;
padding: 4px;
border: 1px solid silver;
outline: 0;
`
export const FindEmployeeOption = styled.option``

export const FindEmployeeList = styled.div`
  width: 95%; 
  display: flex;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 8px;
`
export const EmployeePhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`
export const EmployeeName = styled.p`
  font-size: 1.10rem;
  margin-right: 8px;
  &:after{
    content: " -";
  }
`
export const EmployeeRegister = styled.p`
  font-size: 1.10rem;
  margin-right: 16px;
`