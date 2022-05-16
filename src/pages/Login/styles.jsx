import styled from 'styled-components'

import homebg from './img/home-bg.png'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${homebg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  user-select: none;
`
export const LoginContainer = styled.div`
  position: relative;
  top: 60%;
  width: 100%;  
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 10px;
`
export const Text = styled.div`
  font-size: ${({ size }) => size && `${size}rem;`};
  padding: 4px;
 
`
export const InputBox = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-end;

`
export const PasswordBox = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`
export const UserInput = styled.input`
width: 250px;
height: 36px;
padding: 0 6px;
font-size: 1.25rem;
border: 1px solid silver;
border-radius: 4px;
border: 1px solid rgba(0,0,0,0.5);

`
export const PasswordInput = styled.input`
width: 250px;
height: 36px;
padding: 0 6px;
font-size: 1.25rem;
border: 1px solid silver;
border-radius: 4px;
border: 1px solid rgba(0,0,0,0.5);

`
export const ButtonBox = styled.div`

`
export const Button = styled.input`
width: 42px;
height: 60px;
margin-left: 30px;
`