import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  max-width: 1920px;
  width: 24px;

  min-height: 24px;
  max-height: 24px;
  height: auto;
  
  display: flex;
  place-items: center;
  justify-content: center;

  ${(({ notified }) => notified && `
    width: 100%;
    background-color: tomato;
    color: white;
  `)}

border: 1px solid red;
`;