import styled from "styled-components";

export const Window = styled.div`

  ${({ sizeWindow }) => `
  min-width: ${sizeWindow ? sizeWindow.x : '100'}px;
  min-height: ${sizeWindow ? sizeWindow.y : '100'}px;
  `}

  ${({ positionWindow }) => `
  left: ${positionWindow ? positionWindow.x : '100'}px;
  top: ${positionWindow ? positionWindow.y : '100'}px;
  `}

  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #C0C0C0;
  border: 4px double black;
  background-color: white;
  overflow-y: auto;
  `;
///////////////////////////////////////////////
export const TitleContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  background-color: white;
  `;
export const MenuButton = styled.div`
  min-width: 24px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #c0c0c0;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  &:hover {
    cursor: pointer;
  }

  `;
export const TitleText = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-bottom: 1px solid black;
  background-color: white;
  font-size: 0.9rem;
  `;
export const ButtonBox = styled.div`
  min-width: 48px;
  min-height: 24px;
  display: flex;
  background-color: #c0c0c0;
  `;
export const MaxButton = styled.div`
  width: 24px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #c0c0c0;
  border: 1px solid black;
  border-right: 0;
  border-top: 0;

  &:hover {
    cursor: pointer;
  }
  `;
export const MinButton = styled.div`
  width: 24px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #c0c0c0;
  border: 1px solid black;
  border-right: 0;
  border-top: 0;

  &:hover {
    cursor: pointer;
  }
  `;
///////////////////////////////////////////////
export const MenuContainer = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  background-color: white;
  border-bottom: 1px solid black;
  `;
export const MenuText = styled.div`
  height: 16px;
  display: flex;
  font-size: 0.8rem;
  color: black;
  background-color: white;
  padding: 0 10px;
  border-bottom: 1px solid black;

  &:hover{
    cursor: pointer;
    font-weight: bolder;
  }
  `;
///////////////////////////////////////////////
export const BodyContainer = styled.div`
  ${({ sizeWindow }) => `
  max-width: ${sizeWindow ? sizeWindow.x : '100'}px;
  min-height: ${sizeWindow ? sizeWindow.y : '100'}px;
  `}

  display: flex;
  font-size: 0.8rem;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
  `;
//////////////////////////////////////////////////
export const Text = styled.div`
  font-size: 0.8rem;
  color: black;
  background-color: #ffffff;
  word-wrap: break-all:
  word-break: break-all;
  margin: 4px;
  overflow: auto;

  `;
//////////////////////////////////////////////////
export const StatusBarBox = styled.div`
  height: 24px;
  display: flex;
  font-size: 0.8rem;
  color: black;
  background-color: #C0C0C0;
  `;
export const StatusBar = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  font-size: 0.7rem;
  color: black;
  background-color: #C0C0C0;
  margin: 3px 8px 2px 8px;
  padding: 2px;
  border: 1px inset #FFFFFF;
  border-left: 1px solid #808080;
  border-top: 1px solid #808080;
  `;
//////////////////////////////////////////////////
export const Resize = styled.div`
  position: absolute;
  bottom: 10px;
  right: 2px;
  height: 6px;
  width: 6px;
  // display: flex;
  font-size: 0.8rem;
  color: black;
  background-color: #C0C0C0;
  // z-index: 100;

  &:hover{
    cursor: nw-resize	;
  }
  `;