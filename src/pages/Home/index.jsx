import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Window } from "../../component/windowsStyleContainer";

import * as S from './styles.jsx';

const cardList = [
  { name: 'Recursos Humanos', img: '', link: '/rh' },
  { name: 'Segurança do Trabahlho', img: '', link: '/safety' },
  { name: 'Suprimentos', img: '', link: '/supply' },
  { name: 'Frotas', img: '', link: '/fleets' },
  { name: 'Fluxo de caixa', img: '', link: '/cashflow' },
]

export const Home = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    setCards(cardList);
  },[])

  return (
    <S.Container>
      {cards.map((card) => (
        <S.DepartmentCategoryCard key={card.name} onClick={()=> navigate(card.link)}>
          <S.Box>
            <S.Img src={card.img} />
            <S.CategoryNotification>0</S.CategoryNotification>
          </S.Box>
          <S.CategoryName>{card.name}</S.CategoryName>
        </S.DepartmentCategoryCard>
      )
      )}
    </S.Container>

  )
}