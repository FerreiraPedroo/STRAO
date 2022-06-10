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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid #091034;
  padding: 8px;
  gap: 8px;
`

export const CNHRegisterBox = styled.div`
  min-width: 160px;
  width: 100%;
  max-width: 222px;
  margin: 4px;
`
export const CNHRegisterText = styled.p`
  font-size: 1rem;
  white-space: nowrap;
`
export const CNHRegisterInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;
  background-color: rgba(9, 21, 52, 0.1);
`
export const CNHRegisterPhoto = styled.input`
  width: 148px;
  color: transparent;
  height: 32px;
  padding: 4px;
`

export const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 4px;
`
export const Box = styled.div`
  width: 48px;
  display: flex;
  align-items: center;
  margin: 8px;
`
export const CategoryText = styled.p`
  width: 100%;
  font-size: 0.8rem;
`
export const CategoryCheck = styled.input`
  margin: 0 8px;
`
export const CategoryOther = styled.input`
  width: 48px;
  border: 1px solid silver;
  padding: 4px;
  margin: 0 8px;
  outline: 0;
  background-color: rgba(9, 21, 52, 0.1);
`