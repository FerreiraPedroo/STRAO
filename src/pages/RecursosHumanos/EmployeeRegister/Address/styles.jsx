import styled from 'styled-components'

export const Container = styled.details`
  width: 100%;
`
export const Title = styled.summary`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  border: 1px solid #696969;
  padding-left: 8px;
  padding-top: 5px;
  border-radius: 2px 2px 0 0;
  cursor: pointer;

  &:after{
    content: ' + ';
    font-weight: bolder;
    width: 32px;
    height: 28px;
    margin-top: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  border: 1px solid #696969;
  padding: 8px;
  gap: 8px;  
`

export const Box = styled.div`
  margin: 4px;
`
export const RegisterText = styled.p`
  font-size: 1rem;
  white-space: nowrap;
`
export const RegisterInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 4px;
  border: 1px solid #696969;
  outline: 0;
`
