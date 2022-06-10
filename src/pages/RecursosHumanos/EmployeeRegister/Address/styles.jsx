import styled from 'styled-components'

export const Container = styled.details`
  width: 100%;
  align-self: start;
`
export const Title = styled.summary`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0,0,0,0.6);
  border-bottom: 2px solid #1430B8;
  padding-left: 8px;
  padding-top: 5px;
  border-radius: 2px 2px 0 0;
  cursor: pointer;

  &:after{
    content: ' + ';
    width: 32px;
    display: flex;
    justify-content: center;
    align-self: center;
  }
`
export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid #091034;
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
  border: 1px solid silver;
  outline: 0;
  background-color: rgba(9, 21, 52, 0.1);
`
