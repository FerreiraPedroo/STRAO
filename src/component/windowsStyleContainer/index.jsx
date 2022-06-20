import { useState, useEffect, useRef } from 'react'
import * as W from './styles';


export const Window = () => {
  const [sizeWindow, setSizeWindow] = useState({ x: "500", y: "300" });
  const [positionWindow, setPositionWindow] = useState({ x: "200", y: "300" });
  const [statusWindow, setStatusWindow] = useState('normal');
  const [statusBar, setStatusBar] = useState('');
  const elementWindow = useRef(null)



  const handleMoveWindows = () => {
    const addMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      if (!(x <= sizeWindow.x / 2 + 5) && !(x >= event.view.innerWidth - sizeWindow.x / 2 - 15)) {
        elementWindow.current.style.setProperty('left', `${x - 150}px`);
      }
      if (!(y <= 20) && !(y >= event.view.innerHeight - sizeWindow.y - 70)) {
        elementWindow.current.style.setProperty('top', `${y - 10}px`);
      }
    }
    const removeMove = () => {
      document.removeEventListener("mousemove", addMove)
    }
    document.addEventListener("mousemove", addMove)
    document.addEventListener("mouseup", removeMove)
  }


  return (
    <W.Window ref={elementWindow} sizeWindow={sizeWindow} positionWindow={positionWindow} >
      <W.TitleContainer>
        <W.MenuButton> - </W.MenuButton>
        <W.TitleText onMouseDown={(event) => handleMoveWindows(event)}> Painel de Controle</W.TitleText>
        <W.ButtonBox>
          <W.MaxButton>|</W.MaxButton>
          <W.MinButton>/</W.MinButton>
        </W.ButtonBox>
      </W.TitleContainer >

      <W.MenuContainer>
        <W.MenuText>Salvar</W.MenuText>
        <W.MenuText>Editar </W.MenuText>
      </W.MenuContainer>

      <W.BodyContainer sizeWindow={sizeWindow} >
        <W.Text>
          Pedro Henrique de assis ferreiraedro henrique --------
          Pedro Henrique de assis ferreira  do nascimento pedro henrique --------
          Pedro Henrique de assis ferreiranascimento pedro henrique --------
          Pedro Henrique de assis ferreira henrique --------
          Pedro Henrique d          do nascimento pedro henrique --------
        </W.Text>


      </W.BodyContainer>

      <W.StatusBarBox>
        <W.StatusBar>Editar arquivo que está ai.</W.StatusBar>
      </W.StatusBarBox>
      <W.Resize>∴</W.Resize>
    </W.Window >
  )
}